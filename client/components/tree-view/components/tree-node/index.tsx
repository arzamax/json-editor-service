import { Map } from 'immutable';
import { isEmpty } from 'ramda';
import React, { memo, useContext, useRef, useState } from 'react';

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

export const TreeNode = memo(({ currentKey, path }: ITreeNodeProps) => {
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
  const isStructureMap = Map.isMap(structure);
  const value = isStructureMap && structure.getIn(path);
  const isNode = typeof value === 'object';

  const handleOpenContextMenuOnNode = (e: any) => {
    e.preventDefault();

    if (withContextMenu) {
      setContextMenuVisibleOnNode(true);
      highlightNode(true);
    }
  };

  const handleOpenContextMenuOnValue = (e: any) => {
    e.preventDefault();

    if (withContextMenu) {
      setContextMenuVisibleOnValue(true);
      highlightValue(true);
    }
  };

  const handleDeleteNode = () => {
    const newStructure = isStructureMap && structure.deleteIn(path);

    updateScheme(newStructure);
  };

  const handleDeleteValue = () => {
    const newStructure = isStructureMap && structure.setIn(path, {});

    updateScheme(newStructure);
  };

  const renderList = () => {
    if (!isCollapsed && value) {
      if (isNode) {
        return (
          <List>
            {
              Object.keys(value).map((k: any) =>
                <TreeNode
                  key={`${schemeId}-${k}`}
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
              <DataIcon fill={MAIN_THEME.mainColor}/>
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

  useOnClickOutside(nodeTitleRef, () => highlightNode(false));
  useOnClickOutside(valueTitleRef, () => highlightValue(false));
  useOnClickOutside(contextMenuRef, () => setContextMenuVisibleOnNode(false));
  useOnClickOutside(contextMenuRef, () => setContextMenuVisibleOnValue(false));

  return (
    <ListNodeItem isEmpty={isNode && isEmpty(value)}>
      <ListItemTitleWrapper>
        {
          !isEmpty(value) &&
            <Toggler onClick={() => toggleNode(!isCollapsed)}>
              {
                isCollapsed
                  ? <PlusIcon fill={MAIN_THEME.mainColor} />
                  : <MinusIcon fill={MAIN_THEME.mainColor} />
              }
            </Toggler>
        }
        <KeyIcon fill={MAIN_THEME.mainColor}/>
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
              isOpen={isContextMenuOpenOnNode}
              onDelete={handleDeleteNode}
            />
        }
      </ListItemTitleWrapper>
      {renderList()}
    </ListNodeItem>
  );
});
