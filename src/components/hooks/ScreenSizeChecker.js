import { useState, useEffect } from "react";

const ScreenSizeChecker = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const updatedIsSmallScreen = window.innerWidth < 768;
      setIsSmallScreen(updatedIsSmallScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isSmallScreen };
};

export default ScreenSizeChecker;
