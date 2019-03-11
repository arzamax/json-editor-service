import { Map } from 'immutable';
import { Reducer } from 'redux';

import {
  CHANGE_SCHEME_NAME,
  CREATE_SCHEME,
  DELETE_SCHEME,
  GET_SCHEME,
  GET_SCHEMES_NAMES,
  SAVE_SCHEME,
  SET_ACTIVE_SCHEME_NAME,
  UPDATE_SCHEME,
} from '../constants/actions';
import { IDefaultAction } from '../types/actions';
import { IState } from '../types/reducers';

const initialState = {
  activeScheme: null,
  isSchemeSavingError: false,
  isSchemeTouched: false,
  scheme: null,
  schemesNames: [],
};

export const rootReducer: Reducer<IState, IDefaultAction<any>> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case GET_SCHEMES_NAMES.SUCCESS: {
      return {
        ...state,
        schemesNames: payload.data,
      };
    }

    case GET_SCHEMES_NAMES.FAILURE: {
      return {
        ...state,
        schemesNames: null,
      };
    }

    case GET_SCHEME.REQUEST: {
      return {
        ...state,
        activeScheme: payload,
      };
    }

    case GET_SCHEME.SUCCESS: {
      const { data } = payload;
      const { id, name, structure } = data;

      return {
        ...state,
        isSchemeSavingError: false,
        isSchemeTouched: false,
        scheme: {
          ...state.scheme,
          id,
          name,
          structure: Map({ root: structure }),
        },
      };
    }

    case GET_SCHEME.FAILURE: {
      return {
        ...state,
        activeScheme: null,
        scheme: null,
      };
    }

    case UPDATE_SCHEME: {
      return {
        ...state,
        isSchemeTouched: true,
        scheme: {
          ...state.scheme,
          structure: payload,
        },
      };
    }

    case SAVE_SCHEME.SUCCESS: {
      const { data } = payload;
      const { id } = data;

      return {
        ...state,
        isSchemeSavingError: false,
        isSchemeTouched: false,
        scheme: {
          ...state.scheme,
          id,
        },
      };
    }

    case SAVE_SCHEME.FAILURE: {
      return {
        ...state,
        isSchemeSavingError: true,
      };
    }

    case CREATE_SCHEME: {
      return {
        ...state,
        activeScheme: null,
        isSchemeSavingError: false,
        isSchemeTouched: true,
        scheme: {
          ...state.scheme,
          id: null,
          name: '',
          structure: Map({ root: {} }),
        },
      };
    }

    case SET_ACTIVE_SCHEME_NAME: {
      return {
        ...state,
        activeScheme: payload,
      };
    }

    case CHANGE_SCHEME_NAME: {
      return {
        ...state,
        isSchemeTouched: true,
        scheme: {
          ...state.scheme,
          name: payload,
        },
      };
    }

    case DELETE_SCHEME.SUCCESS: {
      const { data } = payload;
      const { id } = data;

      return {
        ...state,
        activeScheme: null,
        scheme: null,
        schemesNames: state.schemesNames.filter((schemeName) => schemeName.id !== id),
      };
    }

    default:
      return state;
  }
};
