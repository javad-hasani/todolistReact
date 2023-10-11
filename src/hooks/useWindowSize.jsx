import { useState, useEffect } from "react";

function useWidnowSize() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check the window width and update the state
  const checkWindowSize = () => {
    setIsMobile(window.innerWidth > 600); // Change the threshold as needed
  };

  // Add an event listener to check window size when the component mounts
  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return isMobile;
}

export { useWidnowSize };
