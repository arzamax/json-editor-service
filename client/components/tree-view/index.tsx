import { Map } from 'immutable';
import React, { memo, useEffect } from 'react';

import { TreeNode } from './components/tree-node';
import { TreeViewContext } from './context';
import { ITreeViewProps } from './types';

const ROOT = 'root';

const TreeView = ({ scheme, withContextMenu, updateScheme }: ITreeViewProps): JSX.Element | null => {
  if (scheme) {
    const { structure } = scheme;

    if (!Map.isMap(structure) || !structure.get(ROOT)) {
      return null;
    }

    return (
      <ul>
        <TreeViewContext.Provider value={{ scheme, updateScheme, withContextMenu } as any}>
          <TreeNode
            key={ROOT}
            path={[ROOT]}
            currentKey={ROOT}
            withContextMenu={withContextMenu}
            isRoot={true}
          />
        </TreeViewContext.Provider>
      </ul>
    );
  }

  return null;
};

export default memo(TreeView);
