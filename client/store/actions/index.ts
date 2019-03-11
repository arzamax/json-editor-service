import { ISchemeName } from '../../pages/home/components/scheme-select/types';
import {
  CHANGE_SCHEME_NAME,
  CREATE_SCHEME,
  DELETE_SCHEME,
  GET_SCHEME,
  GET_SCHEMES_NAMES,
  SAVE_SCHEME,
  SEARCH_KEY_VALUE_BY_OBJECT_PATH,
  SET_ACTIVE_SCHEME_NAME,
  UPDATE_SCHEME,
} from '../constants/actions';
import { generateDefaultAction } from '../helpers/actions';
import { generateFetchActions } from '../helpers/actions';

/**
 * Fetch actions
 */

export const getSchemesNames = generateFetchActions(GET_SCHEMES_NAMES);
export const getScheme = generateFetchActions(GET_SCHEME);
export const saveScheme = generateFetchActions(SAVE_SCHEME);
export const deleteScheme = generateFetchActions(DELETE_SCHEME);
export const searchKeyValueByObjectPath = generateFetchActions(SEARCH_KEY_VALUE_BY_OBJECT_PATH);

/**
 * Default actions
 */

export const setActiveSchemeName = (payload: ISchemeName) => generateDefaultAction(SET_ACTIVE_SCHEME_NAME, payload);
export const updateScheme = (payload: any) => generateDefaultAction(UPDATE_SCHEME, payload);
export const createScheme = () => generateDefaultAction(CREATE_SCHEME);
export const changeSchemeName = (payload: string) => generateDefaultAction(CHANGE_SCHEME_NAME, payload);
