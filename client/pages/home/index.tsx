import { isNil } from 'ramda';
import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../../components/button';
import Layout from '../../components/layout';
import { deleteScheme, saveScheme } from '../../store/actions';
import { isSchemeTouchedSelector, schemeSelector } from '../../store/selectors';
import SchemeSelect from './components/scheme-select';
import SchemeTreeView from './components/scheme-tree-view';
import { IHomeProps } from './types';

import { ButtonsWrapper, EmptyDataText } from './styled';

const Home = ({ isSchemeTouched, scheme, requestDeleteScheme, requestSaveScheme }: IHomeProps) => (
  <Layout>
    <SchemeSelect />
    {
      scheme
        ? <>
            <SchemeTreeView/>
            <ButtonsWrapper>
              <Button
                onClick={() => requestSaveScheme()}
                disabled={!isSchemeTouched}
              >
                Save
              </Button>
              {
                !isNil(scheme.id) &&
                  <Button
                    type={'danger'}
                    onClick={() => requestDeleteScheme(scheme.id)}
                  >
                    Delete
                  </Button>
              }
            </ButtonsWrapper>
          </>
        : <EmptyDataText>
            There is no any data
          </EmptyDataText>
    }
  </Layout>
);

const mapStateToProps = (state: any) => ({
  isSchemeTouched: isSchemeTouchedSelector(state),
  scheme: schemeSelector(state),
});

export default connect(mapStateToProps, {
  requestDeleteScheme: deleteScheme.request,
  requestSaveScheme: saveScheme.request,
})(Home);
