import { useEffect, useRef } from 'react';

type CbType = () => void;

export const useOnClickOutside = (ref: React.RefObject<HTMLElement>, cb: CbType) => {
  useEffect(() => {
    if (!ref || !cb) {
      return;
    }

    const handleMouseDown = (e: any) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }

      cb();
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
};
