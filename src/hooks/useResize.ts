import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent): void => {
      const target = event.target as Window;
      setWidth(target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
  };
};