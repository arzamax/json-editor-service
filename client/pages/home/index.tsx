import React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/layout';
import { schemeSelector } from '../../store/selectors';
import SchemeSelect from './components/scheme-select';
import SchemeTreeView from './components/scheme-tree-view';

const Home = () => (
  <Layout>
    <SchemeSelect />
    <SchemeTreeView />
  </Layout>
);

const mapStateToProps = (state: any) => ({
  scheme: schemeSelector(state),
});

export default connect(mapStateToProps)(Home);
