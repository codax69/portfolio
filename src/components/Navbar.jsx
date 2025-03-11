// Navbar.js
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` bg-gray-400/20 backdrop-blur-sm w-1/2 left-1/2 -translate-x-1/2 fixed rounded-b-xl transition-all duration-1000 z-10 ${
        isScrolled ? "top-0 py-4 shadow-md" : "-top-6 py-0"
      }`}
    >
      <ul className="flex justify-center items-center space-x-40">
        <Link
          to="home"
          smooth={true}
          duration={800}
          offset={50}
          className="font text-orange-600"
        >
          Home
        </Link>
        <Link
          to="githubSection"
          smooth={true}
          duration={800}
          offset={50}
          className="font text-orange-600"
        >
          Github
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={50}
          className="font text-orange-600"
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          offset={50}
          className="font text-orange-600"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
