import {ASYNC_STATES} from '../constants/actions';

export const generateAsyncActionConstants = (action: string) =>
  ASYNC_STATES.reduce((acc: any, state: string) => {
    acc[state] = `${action}_${state}`;

    return acc;
  }, {});
