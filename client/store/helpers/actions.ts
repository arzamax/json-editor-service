import { GenerateDefaultActionType } from '../types/actions';
import { IFetchActionConstants } from '../types/constants';

export const generateDefaultAction: GenerateDefaultActionType<any> = (type, payload) =>
  ({ type, payload });

export const generateFetchActions = (constants: IFetchActionConstants) => ({
  failure: () => generateDefaultAction(constants.FAILURE),
  request: (req?: any) => generateDefaultAction(constants.REQUEST, req),
  success: (res: any) => generateDefaultAction(constants.SUCCESS, res),
});
