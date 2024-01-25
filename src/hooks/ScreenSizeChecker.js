import { useState, useEffect } from "react";

const ScreenSizeChecker = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const updatedIsSmallScreen = window.innerWidth <= 768;
      // console.log("Updated isSmallScreen:", updatedIsSmallScreen);
      setIsSmallScreen(updatedIsSmallScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log("Current isSmallScreen:", isSmallScreen);

  return { isSmallScreen };
};

export default ScreenSizeChecker;
