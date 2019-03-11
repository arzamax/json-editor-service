export interface IHomeProps {
  isSchemeTouched: boolean;
  scheme: any;
  requestSaveScheme: () => void;
  requestDeleteScheme: (id: string) => void;
}
