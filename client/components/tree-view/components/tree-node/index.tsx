import { Map } from 'immutable';
import React, { useContext, useRef, useState } from 'react';

import { useOnClickOutside } from '../../../../lib/hooks/use-click-outside';
import MAIN_THEME from '../../../../themes/main';
import { StructureContext } from '../../context';
import { List, ListItem, ListItemTitle, ListItemTitleWrapper, Toggler } from './styled';
import { ITreeNode } from './types';

import DataIcon from '../../../../assets/img/data.svg';
import KeyIcon from '../../../../assets/img/key.svg';
import MinusIcon from '../../../../assets/img/minus.svg';
import PlusIcon from '../../../../assets/img/plus.svg';

export const TreeNode = ({ currentKey, path }: ITreeNode) => {
  const [isCollapsed, toggleNode] = useState(true);
  const [isNodeActive, highlightNode] = useState(false);
  const nodeTitleRef = useRef(null);
  const scheme = useContext(StructureContext);
  const { id: schemeId, structure } = scheme as any;
  const value = Map.isMap(structure) && structure.getIn(path);
  const isNode = typeof value === 'object';

  const renderList = () => {
    if (!isCollapsed && value) {
      if (isNode) {
        return (
          <List>
            {
              Map(value).keySeq().map((k: any) =>
                <TreeNode key={`${schemeId}-${k}`} currentKey={k} path={[...path, k]}/>,
              )
            }
          </List>
        );
      }

      return (
        <List>
          <ListItem>
            <ListItemTitleWrapper>
              <DataIcon fill={MAIN_THEME.mainColor}/>
              <ListItemTitle>{value}</ListItemTitle>
            </ListItemTitleWrapper>
          </ListItem>
        </List>
      );
    }

    return null;
  };

  useOnClickOutside(nodeTitleRef, () => highlightNode(false));

  return (
    <ListItem>
      <ListItemTitleWrapper>
        <Toggler onClick={() => toggleNode(!isCollapsed)}>
          {
            isCollapsed
              ? <PlusIcon fill={MAIN_THEME.mainColor} />
              : <MinusIcon fill={MAIN_THEME.mainColor} />
          }
        </Toggler>
        <KeyIcon fill={MAIN_THEME.mainColor}/>
        <ListItemTitle
          ref={nodeTitleRef}
          onClick={() => highlightNode(true)}
          onDoubleClick={() => toggleNode(false)}
          isActive={isNodeActive}
        >
          {currentKey}
        </ListItemTitle>
      </ListItemTitleWrapper>
      {renderList()}
    </ListItem>
  );
};
