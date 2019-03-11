import { Map } from 'immutable';
import { Reducer } from 'redux';

import {
  GET_SCHEME,
  GET_SCHEMES_NAMES,
  SAVE_SCHEME,
  UPDATE_SCHEME,
} from '../constants/actions';
import { IDefaultAction } from '../types/actions';
import { IState } from '../types/reducers';

const initialState = {
  isSchemeTouched: false,
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
      const { id, name, structure } = data;

      return {
        ...state,
        isSchemeTouched: false,
        scheme: {
          id,
          name,
          structure: Map({ root: structure }),
        },
      };
    case GET_SCHEME.FAILURE:
      return {
        ...state,
        scheme: null,
      };
    case UPDATE_SCHEME:
      return {
        ...state,
        isSchemeTouched: true,
        scheme: {
          ...state.scheme,
          structure: payload,
        },
      };
    case SAVE_SCHEME.SUCCESS:
      return {
        ...state,
        isSchemeTouched: false,
      };
    default:
      return state;
  }
};
