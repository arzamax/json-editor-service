import React from 'react';

import { TreeNode } from './components/tree-node';
import { StructureContext } from './context';

interface ITreeViewProps {
  scheme: any;
}

const TreeView = ({ scheme }: ITreeViewProps) => {
  if (scheme) {
    const { id: schemeId, structure } = scheme;

    return (
      <ul>
        <StructureContext.Provider value={scheme}>
          {
            structure.keySeq().map((k: any) => (
                <TreeNode key={`${schemeId}-${k}`} path={[k]} currentKey={k} />
              ),
            )
          }
        </StructureContext.Provider>
      </ul>
    );
  }

  return null;
};

export default TreeView;
