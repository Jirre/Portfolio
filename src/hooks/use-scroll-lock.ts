import { useEffect, useRef } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  const originalStyle = useRef<string>("");

  useEffect(() => {
    if (!originalStyle.current) {
      originalStyle.current = window.getComputedStyle(document.body).overflow;
    }

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle.current;
    }

    return () => {
      document.body.style.overflow = originalStyle.current;
    };
  }, [isLocked]);
};