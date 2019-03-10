export interface IContextMenuProps {
  isOpen: boolean;
  isNode?: boolean;
  isEmptyNode?: boolean;
  keyName?: string;
  value?: string;
  onDelete?: () => void;
  onAddNode?: (value: string) => void;
  onAddValue?: (value: string) => void;
  onEditKeyName?: (value: string) => void;
  onEditValue?: (value: string) => void;
}
