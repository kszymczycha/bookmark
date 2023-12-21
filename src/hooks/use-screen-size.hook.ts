import { useState, useEffect } from "react";
import { ScreenSizeInterface } from "@/interface/screen-size.interface";

const useScreenSize = (): ScreenSizeInterface => {
  const isClient = typeof window === "object";
  const [screenSize, setScreenSize] = useState<ScreenSizeInterface>({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export { useScreenSize };
