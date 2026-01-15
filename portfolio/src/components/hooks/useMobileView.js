import { useState, useEffect } from 'react';
import useScreenSize from './useScreenSize';

function useMobileView() {
  const [isMobile, setIsMobile] = useState(false);
  const screensize = useScreenSize();
  useEffect(() => {
    setIsMobile(screensize.width<650)
  }, [screensize]);

  return isMobile;
}

export default useMobileView; 