import {useState, useEffect} from "react"

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Make follower visible after first mouse movement
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  return (
    <div
      className={`
         z-50 fixed pointer-events-none w-16 h-16 rounded-full 
          bg-gradient-to-br from-white to-orange-500 transform -translate-x-1/2 -translate-y-1/2
          transition-transform duration-1000 ease-out
          ${isVisible ? "opacity-70" : "opacity-0"}
        `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default MouseFollower;
