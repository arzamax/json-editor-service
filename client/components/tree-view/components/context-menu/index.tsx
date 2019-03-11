import React, { forwardRef, memo, useCallback, useEffect, useState } from 'react';

import MAIN_THEME from '../../../../themes/main';
import {
  ContextMenuInput,
  ContextMenuInputIconWrapper,
  ContextMenuInputWrapper,
  ContextMenuItem,
  ContextMenuItemText,
  ContextMenuWrapper,
} from './styled';
import { IContextMenuProps } from './types';

import AddKeyIcon from '../../../../assets/img/add-key.svg';
import AddValueIcon from '../../../../assets/img/add-value.svg';
import DeleteIcon from '../../../../assets/img/delete.svg';
import EditIcon from '../../../../assets/img/edit.svg';
import SuccessIcon from '../../../../assets/img/success.svg';

const ICON_SIZE = 17;

const INPUT_TYPES = {
  ADD_KEY: 'addKey',
  ADD_VALUE: 'addValue',
  EDIT_KEY_NAME: 'editKeyName',
  EDIT_VALUE: 'editValue',
};

export const ContextMenu = memo(forwardRef((
  {
    isEmptyNode,
    isNode,
    isOpen,
    isRootNode,
    keyName,
    value,
    onAddNode,
    onEditKeyName,
    onEditValue,
    onAddValue,
    onDelete,
  }: IContextMenuProps,
  ref: any,
) => {
  const [inputType, setInputType] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleClickEdit = useCallback(() => {
    if (keyName) {
      setInputValue(keyName);
      return setInputType(INPUT_TYPES.EDIT_KEY_NAME);
    }

    if (value) {
      setInputValue(value);
      return setInputType(INPUT_TYPES.EDIT_VALUE);
    }
  }, [keyName, value]);

  const handleChangeInput = useCallback((e: any) => {
    setInputValue(e.target.value);
  }, []);

  const saveInput = useCallback(() => {
    if (inputValue) {
      setInputValue('');
      if (inputType === INPUT_TYPES.ADD_KEY && onAddNode) {
        return onAddNode(inputValue);
      }

      if (inputType === INPUT_TYPES.ADD_VALUE && onAddValue) {
        return onAddValue(inputValue);
      }

      if (inputType === INPUT_TYPES.EDIT_KEY_NAME && onEditKeyName) {
        return onEditKeyName(inputValue);
      }

      if (inputType === INPUT_TYPES.EDIT_VALUE && onEditValue) {
        return onEditValue(inputValue);
      }
    }
  }, [inputType, inputValue]);

  const handleKeyPressSaveInput = useCallback((e: any) => {
    if (e.key === 'Enter') {
      saveInput();
    }
  }, [inputType, inputValue]);

  useEffect(() => {
    setInputType('');
  }, [isOpen]);

  if (isOpen) {
    if (inputType) {
      return (
        <ContextMenuWrapper ref={ref}>
          <ContextMenuInputWrapper>
            <ContextMenuInput
              onChange={handleChangeInput}
              onKeyPress={handleKeyPressSaveInput}
              value={inputValue}
            />
            <ContextMenuInputIconWrapper onClick={() => setInputType('')}>
              <DeleteIcon
                width={ICON_SIZE}
                height={ICON_SIZE}
                fill={MAIN_THEME.errorColor}
              />
            </ContextMenuInputIconWrapper>
            <ContextMenuInputIconWrapper onClick={saveInput}>
              <SuccessIcon
                width={ICON_SIZE}
                height={ICON_SIZE}
                fill={MAIN_THEME.successColor}
              />
            </ContextMenuInputIconWrapper>
          </ContextMenuInputWrapper>
        </ContextMenuWrapper>
      );
    }

    return (
      <ContextMenuWrapper ref={ref}>
        {
          isNode
            ? <ContextMenuItem onClick={() => setInputType(INPUT_TYPES.ADD_KEY)}>
                <AddKeyIcon width={ICON_SIZE} height={ICON_SIZE} fill={MAIN_THEME.mainColor} />
                <ContextMenuItemText>Add key</ContextMenuItemText>
              </ContextMenuItem>
            : null
        }
        {
          isEmptyNode && !isRootNode
            ? <ContextMenuItem onClick={() => setInputType(INPUT_TYPES.ADD_VALUE)}>
                <AddValueIcon width={ICON_SIZE} height={ICON_SIZE} fill={MAIN_THEME.mainColor} />
                <ContextMenuItemText>Add value</ContextMenuItemText>
              </ContextMenuItem>
            : null
        }
        {
          !isRootNode
            ? <>
                <ContextMenuItem onClick={handleClickEdit}>
                  <EditIcon width={ICON_SIZE} height={ICON_SIZE} fill={MAIN_THEME.mainColor} />
                  <ContextMenuItemText>Edit name</ContextMenuItemText>
                </ContextMenuItem>
                <ContextMenuItem onClick={onDelete}>
                  <DeleteIcon width={ICON_SIZE} height={ICON_SIZE} fill={MAIN_THEME.errorColor} />
                  <ContextMenuItemText>Delete</ContextMenuItemText>
                </ContextMenuItem>
              </>
            : null
        }
      </ContextMenuWrapper>
    );
  }

  return null;
}));
