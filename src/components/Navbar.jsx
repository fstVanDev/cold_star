import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import { getCurrencies } from "../data/Requests";

import { burgerMenu, fire } from "../images";

const Navbar = () => {
  const { user, setLoginView, viewSidebar, setViewSidebar } =
    useContext(StateContext);

  const navButtons = [
    { name: "Home", href: "#home", id: 0 },
    { name: "How it works", href: "#hitw", id: 1 },
    { name: "FAQs", href: "#faqs", id: 2 },
  ];

  return (
    <div className="fixed w-[100vw] bg-secondary">
      <div className="flex justify-between h-[64px] px-[30px] 2xl:w-[1290px] bg-main rounded-10 2xl:mx-auto">
        {/* // logo */}
        <div className="w-max h-max text-white flex my-auto">
          {user === true ? (
            <button
              type="button"
              className="w-max h-max my-auto mr-[12px]"
              onClick={() => setViewSidebar(!viewSidebar)}
            >
              <img src={burgerMenu} alt="menu" className="w-[44px] h-[34px]" />
            </button>
          ) : null}
          <img src={fire} alt="fire" className="w-max h-max " />
          <p
            className="w-max h-max text-white flex my-auto font-bold my-auto
        2xl:text-22 xl:text-22 lg:text-20 md:text-18 sm:text-16"
          >
            COLDSTAR
          </p>
        </div>

        <div className="flex justify-between h-full 2xl:w-[1078px] 2xl:pl-[60px]">
          <div
            className="flex justify-between
        2xl:w-[280px] xl:w-[240px] lg:w-[200px] md:hidden sm:hidden"
          >
            {navButtons.map((item) => (
              <a
                href={item.href}
                key={item.id}
                className="font-normal text-light-blue my-auto w-max h-max hover:border-b hover:border-1 hover:border-b-light-blue 
              2xl:text-16 xl:text-14 lg:text-12"
              >
                {item.name}
              </a>
            ))}
          </div>

          {user === false ? (
            <div className="flex w-max h-max my-auto justify-between">
              <>
                <button
                  type="button"
                  onClick={() => console.log()}
                  className="text-white bg-light-blue text-16 hover:bg-blue w-max h-max rounded-6 border-none px-[12px] py-[4px] mr-[15px] font-bold"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => setLoginView(true)}
                  className="text-light-blue text-16 hover:text-blue py-[4px] px-[12px] font-bold"
                >
                  Sign in
                </button>
              </>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
