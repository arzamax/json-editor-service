import React, { memo } from 'react';

import MAIN_THEME from '../../../../themes/main';
import {
  ContextMenuItem,
  ContextMenuItemText,
  ContextMenuWrapper,
} from './styled';
import { IContextMenuProps } from './types';

import DeleteIcon from '../../../../assets/img/delete.svg';

export const ContextMenu = memo(React.forwardRef(({ isOpen, onDelete }: IContextMenuProps, ref: any) => {
  if (isOpen) {
    return (
      <ContextMenuWrapper ref={ref}>
        <ContextMenuItem onClick={onDelete}>
          <DeleteIcon width={10} height={10} fill={MAIN_THEME.errorColor} />
          <ContextMenuItemText>Delete</ContextMenuItemText>
        </ContextMenuItem>
      </ContextMenuWrapper>
    );
  }

  return null;
}));
