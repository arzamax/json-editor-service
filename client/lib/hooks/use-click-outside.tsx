import React, { useEffect, useRef } from 'react';

type CbType = () => void;

export const useOnClickOutside = (ref: React.RefObject<HTMLElement>, cb: CbType) => {
  useEffect(() => {
    if (!ref || !ref.current || !cb) {
      return;
    }

    const handleClick = (e: any) => {
      if ((ref.current as any).contains(e.target)) {
        return;
      }

      cb();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};
