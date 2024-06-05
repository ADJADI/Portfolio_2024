import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Navbar({ isOpen, handleToggle, setIsOpen }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setIsOpen(false); // Close the menu first
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }, 300); // Delay to ensure the menu has closed
  };

  console.log(isOpen);
  return (
    <div className="">
      <nav
        className={`h-14 flex fixed bg-black text-neutral-100 z-50 justify-between items-center px-5 py-10 opacity-[97%] top-0 w-full ${
          isOpen ? "opacity-[100%]" : ""
        }`}
      >
        <a href="">
          <h2 className="text-2xl text-stroke-1 text-stroke-white text-transparent">
            My Portfolio
          </h2>
        </a>
        <ul className={`gap-10 flex ${isMobile ? "hidden" : ""}`}>
          <li className="hover:underline  underline-offset-2">
            <a href="" onClick={(e) => handleLinkClick(e, "about")}>
              A propos de moi
            </a>{" "}
          </li>
          <li className="hover:underline  underline-offset-2">
            <a href="" onClick={(e) => handleLinkClick(e, "project")}>
              Projets
            </a>
          </li>
          <li className="hover:underline  underline-offset-2">
            <a href="service" onClick={(e) => handleLinkClick(e, "service")}>
              Services
            </a>
          </li>
          <li className="hover:underline underline-offset-2 ">
            <a href="" onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={handleToggle}
          className="flex flex-col gap-1 shadow-xl md:hidden"
          aria-label="hamburger-button-toggle"
        >
          <span className="w-6 h-1 bg-white rounded-lg block"></span>
          <span className="w-6 h-1 bg-white rounded-lg block"></span>
          <span className="w-6 h-1 bg-white rounded-lg block"></span>
        </button>

        <span className="top-0 right-14 w-8 h-10 bg-blue-900 hidden md:absolute"></span>
      </nav>
      {isOpen && (
        <div className="min-h-screen h-full w-full right-0 fixed top-16 bg-black z-10 md:hidden">
          <ul className="flex flex-col text-neutral-100 w-full  justify-center items-center pt-20 text-3xl gap-10">
            <li className=" hover:scale-105">
              <a
                href="about"
                className=" text-stroke-white text-stroke text-transparent"
                onClick={(e) => handleLinkClick(e, "about")}
              >
                A propos de moi
              </a>
            </li>
            <li className=" hover:scale-105">
              <a
                href="project"
                className=" text-stroke-white text-stroke text-transparent"
                onClick={(e) => handleLinkClick(e, "project")}
              >
                Projets
              </a>
            </li>
            <li className=" hover:scale-105">
              <a
                href="service"
                className=" text-stroke-white text-stroke text-transparent"
                onClick={(e) => handleLinkClick(e, "service")}
              >
                Services
              </a>
            </li>
            <li className=" hover:scale-105">
              <a
                href=""
                className=" text-stroke-white text-stroke text-transparent"
                onClick={(e) => handleLinkClick(e, "")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
