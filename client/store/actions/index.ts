import {
  GET_LANGUAGE_SCHEME,
  GET_LANGUAGE_SCHEMES_NAMES,
  SAVE_LANGUAGE_SCHEME,
  SEARCH_KEY_VALUE_BY_OBJECT_PATH,
} from '../constants/actions';
import { generateDefaultAction } from '../helpers/actions';
import { generateFetchActions } from '../helpers/actions';

export const getLanguageSchemesNames = generateFetchActions(GET_LANGUAGE_SCHEMES_NAMES);
export const getLanguageScheme = generateFetchActions(GET_LANGUAGE_SCHEME);
export const saveLanguageScheme = generateFetchActions(SAVE_LANGUAGE_SCHEME);
export const searchKeyValueByObjectPath = generateFetchActions(SEARCH_KEY_VALUE_BY_OBJECT_PATH);
