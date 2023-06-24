import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [toggleBar, setToggleBar] = useState(false);

  return (
    <header className="bg-transparent">
      <nav className="container h-24 flex justify-between items-center gap-1 lg:gap-10 ">
        <div>
          <Link to="/">
            <img
              className="w-10/12"
              src="/images/logo.png"
              alt="Easexpense logo"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex gap-3 lg:gap-20 items-center font-poppins font-semibold">
          <li>
            <NavLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="/about"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[#999999] hover:text-secondary transition-all"
              to="contact"
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-2 md:gap-5">
          <ul className=" gap-5 font-medium font-roboto hidden lg:flex">
            <li>
              <Link className="text-main ">Sing In</Link>
            </li>

            <li>
              <Link className="bg-[#D0EDFB] text-main rounded-lg py-3 px-4">
                Free trial
              </Link>
            </li>
          </ul>
          <div
            className="block lg:hidden"
            onClick={() => setToggleBar(!toggleBar)}
          >
            <span className="text-xl">
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
        {toggleBar && (
          <ul className=" flex flex-col gap-5 justify-center  items-center font-poppins font-semibold absolute inset-0 bg-light w-full h-screen z-10">
            <li>
              <NavLink
                className="text-[#999999] hover:text-secondary transition-all"
                to="/"
                onClick={() => setToggleBar(!toggleBar)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="text-[#999999] hover:text-secondary transition-all"
                to="/blog"
                onClick={() => setToggleBar(!toggleBar)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#999999] hover:text-secondary transition-all"
                to="/about"
                onClick={() => setToggleBar(!toggleBar)}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#999999] hover:text-secondary transition-all"
                to="contact"
                onClick={() => setToggleBar(!toggleBar)}
              >
                Contact us
              </NavLink>
            </li>

            <li>
              <Link
                className="text-main font-medium font-roboto"
                to="/"
                onClick={() => setToggleBar(!toggleBar)}
              >
                Sing In
              </Link>
            </li>

            <div
              className="absolute top-10 right-10"
              onClick={() => setToggleBar(!toggleBar)}
            >
              <span className="text-xl">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
