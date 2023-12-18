import clsx from "clsx";
import { Menu, X } from "react-feather";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import NavLinkList from "./NavLinkList";
import useWindowSize from "../hooks/useWindowSize";

import Logo from "../assets/CartBoost_logo-cropped-1200x1200-removebg-preview.png";
import styles from "../styles/Header.module.css";
import useScroll from "../hooks/useScroll";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [width, _] = useWindowSize();
  const isScrolled = useScroll();

  const isMobile = width < 768;

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <div
      id="main-nav"
      className={clsx(
        {
          ["bg-transparent"]: !open && !isScrolled,
          "bg-slate-100": open && isMobile,
          ["bg-slate-950/90 shadow-slate-950"]: isScrolled && !isMobile,
        },
        "z-50 sticky transition-all duration-200 top-0 shadow-sm"
      )}
    >
      <div className="container flex relative justify-between px-4 py-3 w-full max-w-7xl max-h-20">
        <div className="flex items-center">
          <img src={Logo.src} alt="CartBoost Logo" height="60" width="60" />
          <h1
            className={clsx(
              { ["text-white"]: !open, ["text-black"]: open && isMobile },
              "text-3xl font-bold transition duration-200 hover:text-blue-600 cursor-pointer"
            )}
          >
            CartBoost
          </h1>
        </div>
        <nav className="mr-auto ml-auto items-center hidden md:flex">
          <NavLink title="Product" href="/product" />
          <NavLink title="Pricing" href="/pricing" />
          <NavLink title="Documentation" href="/docs" />
        </nav>
        <div className="hidden md:block self-center">
          <Button title="Coming Soon" disabled/>
        </div>
        <div
          className="self-center cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {open ? (
            <X className="stroke-black hover:stroke-blue-600" />
          ) : (
            <Menu className="stroke-white hover:stroke-blue-600" />
          )}
        </div>
      </div>
      <div
        className={clsx(
          { hidden: !open },
          "z-10 bg-black/30 fixed top-0 left-0 right-0 bottom-0 mt-20"
        )}
      ></div>
      <div
        id="main-nav-mobile"
        className="absolute left-0 right-0 top-20 w-full md:hidden transition-all duration-200 overflow-hidden"
        style={{ height: open ? "100vh" : "0px" }}
      >
        <nav
          className={clsx(
            { [styles.translate]: !open },
            "z-20 block text-center min-w-full absolute left-0 right-0 overflow-visible bg-slate-100 pt-3 pb-6 rounded-b-2xl transition-transform duration-200"
          )}
        >
          <NavLinkList title="Product" href="/product" />
          <NavLinkList title="Pricing" href="/pricing" />
          <NavLinkList title="Documentation" href="/docs" />
          <div className="flex px-4">
            <Button title="Get Started" />
          </div>
        </nav>
      </div>
    </div>
  );
}
