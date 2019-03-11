import { isNil } from 'ramda';
import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';

import TreeView from '../../../../components/tree-view';
import {
  changeSchemeName as changeSchemeNameAction,
  updateScheme as updateSchemeAction,
} from '../../../../store/actions';
import { schemeSelector } from '../../../../store/selectors';
import { TreeViewNameInput, TreeViewNameInputWrapper, TreeViewNameLabel, TreeViewWrapper } from './styled';
import { ISchemeTreeView} from './types';

const SchemeTreeView = ({ scheme, updateScheme, changeSchemeName }: ISchemeTreeView) => {
  const isSchemeWithName = scheme && scheme.hasOwnProperty('name') && !isNil(scheme.name);
  const schemeName = isSchemeWithName
    ? scheme.name
    : '';
  const handleChangeSchemeName = useCallback((e: any) => {
    const { value } = e.target;

    changeSchemeName(value);
  }, []);

  return (
    <TreeViewWrapper>
      <TreeViewNameInputWrapper>
        <TreeViewNameLabel>Scheme name</TreeViewNameLabel>
        <TreeViewNameInput value={schemeName} onChange={handleChangeSchemeName}/>
      </TreeViewNameInputWrapper>
      <TreeView scheme={scheme} withContextMenu={true} updateScheme={updateScheme} />
    </TreeViewWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  scheme: schemeSelector(state),
});

export default connect(mapStateToProps, {
  changeSchemeName: changeSchemeNameAction,
  updateScheme: updateSchemeAction,
})(memo(SchemeTreeView));
