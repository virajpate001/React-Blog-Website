import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  //navbar item
  const navItem = [
    { path: "/", links: "Home" },
    { path: "/about", links: "About us" },
    { path: "/blog", links: "Blog" },
    { path: "/contact", links: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  

  return (
    <header className="bg-gray-800 py-4 sm:py-6">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <h4 className="h-8 sm:h-10 text-white text-3">BlogApp</h4>
          </Link>
        </div>

        {/* Menu */}
        <nav className="sm:block hidden">
          <ul className="md:flex space-x-4 hidden">
            {navItem.map(({ path, links }) => (
              <li className="text-white" key={path}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={path}
                >
                  {links}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login button */}
        <div className="md:flex hidden">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>

        <div className="md:hidden text-white">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-8 h-8" />
            ) : (
              <IoMdMenu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      <div>
        <ul
          className={`md:hidden gap-12 text-12 text-lg space-y-4 px-4 py-6 mt-4  bg-white ${
            isMenuOpen ? "fixed" : "hidden"
          } w-full transition-all ease-out duration-150`}
        >
          {navItem.map(({ path, links }) => (
            <li className="text-black" key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {links}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
