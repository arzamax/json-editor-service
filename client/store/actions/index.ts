import {
  GET_SCHEME,
  GET_SCHEMES_NAMES,
  SAVE_SCHEME,
  SEARCH_KEY_VALUE_BY_OBJECT_PATH,
} from '../constants/actions';
import { generateDefaultAction } from '../helpers/actions';
import { generateFetchActions } from '../helpers/actions';

export const getSchemesNames = generateFetchActions(GET_SCHEMES_NAMES);
export const getScheme = generateFetchActions(GET_SCHEME);
export const saveScheme = generateFetchActions(SAVE_SCHEME);
export const searchKeyValueByObjectPath = generateFetchActions(SEARCH_KEY_VALUE_BY_OBJECT_PATH);
