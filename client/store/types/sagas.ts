import { IDefaultAction } from './actions';

export interface IFetchResultHandlers {
  success: (res: any) => IDefaultAction<any>;
  failure: () => IDefaultAction<any>;
}
