import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setNavbarOpen(!isNavbarOpen);

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open-nav", !isNavbarOpen);
  };
  return (
    <>
      <header className="header bs1 zi9999">
        <div className="wrapper v-center jcsb ptb12">
          <Link href="/" className="logo box-center">
            <Image
              src="/images/logo.png"
              width={200}
              height={48}
              alt="logo"
              className="logo"
            />
          </Link>
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <nav className="navbar jce v-center zi999">
            <ul id="nav-items" className="nav-items fc1 v-center fw6 fww">
              <li className="nav-item">
                <Link href="#" className="nav-link ptb32 plr16 ls1 transit2">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link ptb32 plr16 ls1 transit2 v-center"
                >
                  Cources
                </Link>
              </li>
            </ul>
            <div className="header-btn df fw6">
              <Link
                href="#"
                className="header-sign-btn h48 bg-h4 fc-h1 transit2 plr24 mlr12 bg5 v-center"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="header-login-btn h48 bg-h4 fc-h1 transit2 plr24 mlr12 bg5 v-center"
              >
                Log in
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
