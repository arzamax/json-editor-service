import React, { memo } from 'react';
import { connect } from 'react-redux';

import TreeView from '../../../../components/tree-view';
import { schemeSelector } from '../../../../store/selectors';
import { TreeViewWrapper } from './styled';
import { ISchemeTreeView} from './types';

const SchemeTreeView = ({ scheme }: ISchemeTreeView) => {
  return (
    <TreeViewWrapper>
      <TreeView scheme={scheme} />
    </TreeViewWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  scheme: schemeSelector(state),
});

export default connect(mapStateToProps)(memo(SchemeTreeView));
