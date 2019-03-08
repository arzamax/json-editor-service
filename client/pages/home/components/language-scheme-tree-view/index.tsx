import React from 'react';
import { connect } from 'react-redux';

import TreeView from '../../../../components/tree-view';
import { languageSchemeSelector } from '../../../../store/selectors';

interface ILanguageSchemeTreeView {
  languageScheme: any;
}

const LanguageSchemeTreeView = ({ languageScheme }: ILanguageSchemeTreeView) => {
  return (
    <TreeView scheme={languageScheme} />
  );
};

const mapStateToProps = (state: any) => ({
  languageScheme: languageSchemeSelector(state),
});

export default connect(mapStateToProps)(LanguageSchemeTreeView);
