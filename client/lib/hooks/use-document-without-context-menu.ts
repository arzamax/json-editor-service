import { useEffect, useRef } from 'react';

export const useDocumentWithoutContextMenu = () => {
  const handleDisableContextMenuOnDocument = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleDisableContextMenuOnDocument);

    return () => {
      document.removeEventListener('contextmenu', handleDisableContextMenuOnDocument);
    };
  }, []);
};
