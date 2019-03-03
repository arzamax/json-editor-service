import { IDefaultAction } from '../../store/types/actions';

export interface IAppProps {
  requestLanguageSchemesNames: () => IDefaultAction<any>;
}