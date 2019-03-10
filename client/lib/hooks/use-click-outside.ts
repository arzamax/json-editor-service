import React, { useEffect, useRef } from 'react';

type CbType = () => void;

export const useOnClickOutside = (refs: Array<React.RefObject<HTMLElement>>, cb: CbType) => {
  useEffect(() => {
    if (refs && Array.isArray(refs) && cb) {
      const handleMouseDown = (e: any) => {
        let isTarget = false;

        for (const ref of refs) {
          if (ref.current && ref.current.contains(e.target)) {
            isTarget = true;
            break;
          }
        }

        if (!isTarget) {
          cb();
        }
      };

      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, []);
};
