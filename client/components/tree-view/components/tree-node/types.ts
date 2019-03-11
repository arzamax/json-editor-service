export interface ITreeNodeProps {
  currentKey: string;
  path: string[];
  withContextMenu?: boolean;
  isRoot?: boolean;
}

export interface IListNodeItemProps {
  isEmpty: boolean;
}

export interface IListItemTitleProps {
  isActive?: boolean;
}
