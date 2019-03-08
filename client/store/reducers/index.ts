import { Map } from 'immutable';
import { Reducer } from 'redux';

import {
  GET_SCHEME,
  GET_SCHEMES_NAMES,
} from '../constants/actions';
import { IDefaultAction } from '../types/actions';
import { IState } from '../types/reducers';

const initialState = {
  scheme: null,
  schemesNames: [],
};

export const rootReducer: Reducer<IState, IDefaultAction<any>> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SCHEMES_NAMES.SUCCESS:
      return {
        ...state,
        schemesNames: payload.data,
      };
    case GET_SCHEMES_NAMES.FAILURE:
      return {
        ...state,
        schemesNames: null,
      };
    case GET_SCHEME.REQUEST:
      return {
        ...state,
        activeScheme: payload,
      };
    case GET_SCHEME.SUCCESS:
      const { data } = payload;

      return {
        ...state,
        scheme: {
          id: data.id,
          structure: Map(data.structure),
        },
      };
    case GET_SCHEME.FAILURE:
      return {
        ...state,
        scheme: null,
      };
    default:
      return state;
  }
};
