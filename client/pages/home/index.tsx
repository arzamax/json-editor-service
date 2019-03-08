import React from 'react';

import Layout from '../../components/layout';
import LanguageSchemeSelect from './components/language-scheme-select';
import LanguageSchemeTreeView from './components/language-scheme-tree-view';

const Home = () => (
  <Layout>
    <LanguageSchemeSelect />
    <LanguageSchemeTreeView />
  </Layout>
);

export default Home;
