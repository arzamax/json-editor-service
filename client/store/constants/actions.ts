import { generateAsyncActionConstants } from '../helpers/constants';

export const ASYNC_STATES = ['FAILURE', 'REQUEST', 'SUCCESS'];

/**
 * Async constants
 */

export const GET_LANGUAGE_SCHEMES_NAMES = generateAsyncActionConstants('GET_LANGUAGE_SCHEMES_NAMES');
export const GET_LANGUAGE_SCHEME = generateAsyncActionConstants('GET_LANGUAGE_SCHEME');
export const SAVE_LANGUAGE_SCHEME = generateAsyncActionConstants('SAVE_LANGUAGE_SCHEME');
export const SEARCH_KEY_VALUE_BY_OBJECT_PATH = generateAsyncActionConstants('SEARCH_KEY_VALUE_BY_OBJECT_PATH');
