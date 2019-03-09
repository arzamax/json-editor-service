import React, { memo } from 'react';
import { connect } from 'react-redux';

import TreeView from '../../../../components/tree-view';
import { updateScheme as updateSchemeAction } from '../../../../store/actions';
import { schemeSelector } from '../../../../store/selectors';
import { TreeViewWrapper } from './styled';
import { ISchemeTreeView} from './types';

const SchemeTreeView = ({ scheme, updateScheme }: ISchemeTreeView) => {
  return (
    <TreeViewWrapper>
      <TreeView scheme={scheme} withContextMenu={true} updateScheme={updateScheme} />
    </TreeViewWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  scheme: schemeSelector(state),
});

export default connect(mapStateToProps, { updateScheme: updateSchemeAction })(memo(SchemeTreeView));
