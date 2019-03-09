import {
  GET_SCHEME,
  GET_SCHEMES_NAMES,
  SAVE_SCHEME,
  SEARCH_KEY_VALUE_BY_OBJECT_PATH,
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
export const searchKeyValueByObjectPath = generateFetchActions(SEARCH_KEY_VALUE_BY_OBJECT_PATH);

/**
 * Default actions
 */

export const updateScheme = (payload: any) => generateDefaultAction(UPDATE_SCHEME, payload);
