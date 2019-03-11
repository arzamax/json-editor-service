import { generateAsyncActionConstants } from '../helpers/constants';

export const ASYNC_STATES = ['FAILURE', 'REQUEST', 'SUCCESS'];

/**
 * Async constants
 */

export const GET_SCHEMES_NAMES = generateAsyncActionConstants('GET_SCHEMES_NAMES');
export const GET_SCHEME = generateAsyncActionConstants('GET_SCHEME');
export const SAVE_SCHEME = generateAsyncActionConstants('SAVE_SCHEME');
export const DELETE_SCHEME = generateAsyncActionConstants('DELETE_SCHEME');
export const SEARCH_KEY_VALUE_BY_OBJECT_PATH = generateAsyncActionConstants('SEARCH_KEY_VALUE_BY_OBJECT_PATH');

export const UPDATE_SCHEME = 'UPDATE_SCHEME';
export const CREATE_SCHEME = 'CREATE_SCHEME';
export const SET_ACTIVE_SCHEME_NAME = 'SET_ACTIVE_SCHEME_NAME';
export const CHANGE_SCHEME_NAME = 'CHANGE_SCHEME_NAME';
