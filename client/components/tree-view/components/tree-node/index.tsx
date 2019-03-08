import { Map } from 'immutable';
import React, { useContext, useState } from 'react';

import { StructureContext } from '../../context';
import { List, ListItem, ListItemTitle, ListItemTitleWrapper, Toggler } from './styled';

import KeyIcon from '../../../../assets/img/key.svg';

interface ITreeNode {
  currentKey: string;
  path: string[];
}

export const TreeNode = ({ currentKey, path }: ITreeNode) => {
  const [isCollapsed, toggleNode] = useState(true);
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
            <ListItemTitle>{value}</ListItemTitle>
          </ListItem>
        </List>
      );
    }

    return null;
  };

  return (
    <ListItem>
      <ListItemTitleWrapper>
        <Toggler onClick={() => toggleNode(!isCollapsed)}>
          {
            isCollapsed
              ? '+'
              : '-'
          }
        </Toggler>
        <KeyIcon width={17} height={17}/>
        <ListItemTitle onDoubleClick={() => toggleNode(false)}>{currentKey}</ListItemTitle>
      </ListItemTitleWrapper>
      {renderList()}
    </ListItem>
  );
};
