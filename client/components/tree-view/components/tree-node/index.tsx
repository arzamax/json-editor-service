import { isEmpty } from 'ramda';
import React, { memo, useCallback, useContext, useRef, useState } from 'react';

import { useOnClickOutside } from '../../../../lib/hooks/use-click-outside';
import MAIN_THEME from '../../../../themes/main';
import { TreeViewContext } from '../../context';
import { ContextMenu } from '../context-menu';
import {
  List,
  ListItemTitle,
  ListItemTitleWrapper,
  ListNodeItem,
  ListValueItem,
  Toggler,
} from './styled';
import { ITreeNodeProps } from './types';

import DataIcon from '../../../../assets/img/data.svg';
import KeyIcon from '../../../../assets/img/key.svg';
import MinusIcon from '../../../../assets/img/minus.svg';
import PlusIcon from '../../../../assets/img/plus.svg';
import TextIcon from '../../../../assets/img/text.svg';

export const TreeNode = memo(({ currentKey, path, isRoot }: ITreeNodeProps): JSX.Element => {
  const [isCollapsed, toggleNode] = useState(true);
  const [isNodeActive, highlightNode] = useState(false);
  const [isValueActive, highlightValue] = useState(false);
  const [isContextMenuOpenOnNode, setContextMenuVisibleOnNode] = useState(false);
  const [isContextMenuOpenOnValue, setContextMenuVisibleOnValue] = useState(false);
  const nodeTitleRef = useRef(null);
  const valueTitleRef = useRef(null);
  const contextMenuRef = useRef(null);
  const { scheme, withContextMenu, updateScheme } = useContext(TreeViewContext) as any;

  const { id: schemeId, structure } = scheme as any;
  const value = structure.getIn(path);
  const isNode = typeof value === 'object';
  const isEmptyNode = isNode && isEmpty(value);

  const handleOpenContextMenuOnNode = useCallback((e: any) => {
    e.preventDefault();

    if (withContextMenu) {
      setContextMenuVisibleOnNode(true);
      highlightNode(true);
    }
  }, []);

  const handleOpenContextMenuOnValue = useCallback((e: any) => {
    e.preventDefault();

    if (withContextMenu) {
      setContextMenuVisibleOnValue(true);
      highlightValue(true);
    }
  }, []);

  const refreshNodeAfterAdding = useCallback((newStructure: any) => {
    updateScheme(newStructure);
    toggleNode(false);
    setContextMenuVisibleOnNode(false);
  }, []);

  const handleAddNode = useCallback((v: string) => {
    const newStructure = structure.setIn([...path, v], {});

    refreshNodeAfterAdding(newStructure);
  }, [path]);

  const handleAddValue = useCallback((v: string) => {
    const newStructure = structure.setIn(path, v);

    refreshNodeAfterAdding(newStructure);
  }, [path]);

  const handleEditKeyName = useCallback((v: string) => {
    const newPath = [...path.slice(0, -1), v];
    const newStructure = structure.deleteIn(path).setIn(newPath, value);

    updateScheme(newStructure);
    setContextMenuVisibleOnNode(false);
  }, [path]);

  const handleEditValue = useCallback((v: string) => {
    const newStructure = structure.setIn(path, v);

    updateScheme(newStructure);
    setContextMenuVisibleOnValue(false);
  }, [path]);

  const handleDeleteNode = useCallback(() => {
    const newStructure = structure.deleteIn(path);

    updateScheme(newStructure);
  }, [path]);

  const handleDeleteValue = useCallback(() => {
    const newStructure = structure.setIn(path, {});

    updateScheme(newStructure);
  }, [path]);

  const renderList = () => {
    if (!isCollapsed && value) {
      if (isNode) {
        return (
          <List>
            {
              Object.keys(value).map((k: any, index: number) =>
                <TreeNode
                  key={`${schemeId || index}-${k}`}
                  currentKey={k}
                  path={[...path, k]}
                  withContextMenu={withContextMenu}
                />,
              )
            }
          </List>
        );
      }

      return (
        <List>
          <ListValueItem>
            <ListItemTitleWrapper>
              <TextIcon width={17} height={17} fill={MAIN_THEME.mainColor}/>
              <ListItemTitle
                ref={valueTitleRef}
                onClick={() => highlightValue(true)}
                onContextMenu={handleOpenContextMenuOnValue}
                isActive={isValueActive}
              >
                {value}
              </ListItemTitle>
              {
                withContextMenu &&
                  <ContextMenu
                    ref={contextMenuRef}
                    isOpen={isContextMenuOpenOnValue}
                    value={value}
                    onEditValue={handleEditValue}
                    onDelete={handleDeleteValue}
                  />
              }
            </ListItemTitleWrapper>
          </ListValueItem>
        </List>
      );
    }

    return null;
  };

  useOnClickOutside([nodeTitleRef, contextMenuRef], () => highlightNode(false));
  useOnClickOutside([valueTitleRef, contextMenuRef], () => highlightValue(false));
  useOnClickOutside([contextMenuRef], () => setContextMenuVisibleOnNode(false));
  useOnClickOutside([contextMenuRef], () => setContextMenuVisibleOnValue(false));

  return (
    <ListNodeItem isEmpty={isEmptyNode}>
      <ListItemTitleWrapper>
        {
          !isEmptyNode &&
            <Toggler onClick={() => toggleNode(!isCollapsed)}>
              {
                isCollapsed
                  ? <PlusIcon fill={MAIN_THEME.mainColor} />
                  : <MinusIcon fill={MAIN_THEME.mainColor} />
              }
            </Toggler>
        }
        {
          isNode
            ? <KeyIcon fill={MAIN_THEME.mainColor}/>
            : <DataIcon fill={MAIN_THEME.mainColor}/>
        }
        <ListItemTitle
          ref={nodeTitleRef}
          onClick={() => highlightNode(true)}
          onDoubleClick={() => toggleNode(false)}
          onContextMenu={handleOpenContextMenuOnNode}
          isActive={isNodeActive}
        >
          {currentKey}
        </ListItemTitle>
        {
          withContextMenu &&
            <ContextMenu
              ref={contextMenuRef}
              onAddNode={handleAddNode}
              onAddValue={handleAddValue}
              onDelete={handleDeleteNode}
              onEditKeyName={handleEditKeyName}
              keyName={currentKey}
              isNode={isNode}
              isRootNode={isRoot}
              isEmptyNode={isEmptyNode}
              isOpen={isContextMenuOpenOnNode}
            />
        }
      </ListItemTitleWrapper>
      {renderList()}
    </ListNodeItem>
  );
});
