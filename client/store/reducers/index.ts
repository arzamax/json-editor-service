import { Reducer } from 'redux';

import {
  GET_LANGUAGE_SCHEME,
  GET_LANGUAGE_SCHEMES_NAMES,
} from '../constants/actions';
import { IDefaultAction } from '../types/actions';
import { IState } from '../types/reducers';

const initialState = {
  activeSchemeId: null,
  names: null,
  scheme: null,
};

export const rootReducer: Reducer<IState, IDefaultAction<any>> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LANGUAGE_SCHEMES_NAMES.SUCCESS:
      return {
        ...state,
        names: payload,
      };
    case GET_LANGUAGE_SCHEMES_NAMES.FAILURE:
      return {
        ...state,
        names: null,
      };
    case GET_LANGUAGE_SCHEME.SUCCESS:
      return {
        ...state,
        scheme: payload,
      };
    case GET_LANGUAGE_SCHEME.FAILURE:
      return {
        ...state,
        scheme: null,
      };
    default:
      return state;
  }
};
