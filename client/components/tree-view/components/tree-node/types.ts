export interface ITreeNodeProps {
  currentKey: string;
  path: string[];
  withContextMenu?: boolean;
}

export interface IListNodeItemProps {
  isEmpty: boolean;
}

export interface IListItemTitleProps {
  isActive?: boolean;
}
