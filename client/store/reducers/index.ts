import { Reducer } from 'redux';

import {
  GET_LANGUAGE_SCHEME,
  GET_LANGUAGE_SCHEMES_NAMES,
} from '../constants/actions';
import { IDefaultAction } from '../types/actions';
import { IState } from '../types/reducers';

const initialState = {
  languageScheme: null,
  languageSchemesNames: [],
};

export const rootReducer: Reducer<IState, IDefaultAction<any>> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LANGUAGE_SCHEMES_NAMES.SUCCESS:
      return {
        ...state,
        languageSchemesNames: payload.data,
      };
    case GET_LANGUAGE_SCHEMES_NAMES.FAILURE:
      return {
        ...state,
        languageSchemesNames: null,
      };
    case GET_LANGUAGE_SCHEME.REQUEST:
      return {
        ...state,
        activeScheme: payload,
      };
    case GET_LANGUAGE_SCHEME.SUCCESS:
      return {
        ...state,
        languageScheme: payload.data,
      };
    case GET_LANGUAGE_SCHEME.FAILURE:
      return {
        ...state,
        languageScheme: null,
      };
    default:
      return state;
  }
};
