import React, { memo, useEffect } from 'react';

import { useDocumentWithoutContextMenu } from '../../lib/hooks/use-document-without-context-menu';
import { TreeNode } from './components/tree-node';
import { TreeViewContext } from './context';
import { ITreeViewProps } from './types';

const TreeView = ({ scheme, withContextMenu, updateScheme }: ITreeViewProps) => {
  if (scheme) {
    const { id: schemeId, structure } = scheme;

    useDocumentWithoutContextMenu();

    return (
      <ul>
        <TreeViewContext.Provider value={{ scheme, updateScheme, withContextMenu } as any}>
          {
            structure.keySeq().map((k: any) => (
                <TreeNode
                  key={`${schemeId}-${k}`}
                  path={[k]}
                  currentKey={k}
                  withContextMenu={withContextMenu}
                />
              ),
            )
          }
        </TreeViewContext.Provider>
      </ul>
    );
  }

  return null;
};

export default memo(TreeView);
