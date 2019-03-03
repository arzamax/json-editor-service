export interface IDefaultAction<T> {
  type: string;
  payload?: T;
}

export type GenerateDefaultActionType<T> = (type: string, payload?: T) => IDefaultAction<T>;
