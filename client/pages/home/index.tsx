import React from 'react';
import { connect } from 'react-redux';

import { EmptyDataText } from './styled';
import { IHomeProps } from './types';

import { Button } from '../../components/button';
import Layout from '../../components/layout';
import { saveScheme } from '../../store/actions';
import { isSchemeTouchSelector, schemeSelector } from '../../store/selectors';
import SchemeSelect from './components/scheme-select';
import SchemeTreeView from './components/scheme-tree-view';

const Home = ({ isSchemeTouched, scheme, requestSaveScheme }: IHomeProps) => (
  <Layout>
    <SchemeSelect />
    {
      scheme
        ? <>
            <SchemeTreeView/>
            <Button
              onClick={requestSaveScheme}
              disabled={!isSchemeTouched}
              margin={'20px auto 0 auto'}
            >
              Save
            </Button>
          </>
        : <EmptyDataText>
            There is no any data
          </EmptyDataText>
    }
  </Layout>
);

const mapStateToProps = (state: any) => ({
  isSchemeTouched: isSchemeTouchSelector(state),
  scheme: schemeSelector(state),
});

export default connect(mapStateToProps, { requestSaveScheme: saveScheme.request })(Home);
