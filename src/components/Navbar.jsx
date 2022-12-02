import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import { navbarData } from "../data/mainData";

const Navbar = () => {
  const { user, setUser } = useContext(StateContext);

  return (
    <div className="2xl:w-[1290px] mx-auto">
      <div className="flex justify-between w-full py-[15px]">
        {navbarData.logo.image.length > 0 ? (
          <img src={navbarData.logo.image} alt={navbarData.logo.alt} />
        ) : (
          <p className="w-max h-max my-auto font-bold text-24 leading-30 text-black">
            TOP2PRO
          </p>
        )}
        <div className="w-max h-max flex">
          {navbarData.menuButtons.map((item) => (
            <a
              href={item.href}
              className="w-max h-max my-auto cursor-pointer 2xl:mr-[40px]"
            >
              <span className="font-bold text-black text-14 leading-20 ">
                {item.label}
              </span>
            </a>
          ))}

          {!user ? (
            <button
              type="button"
              onClick={() => console.log("click login button")}
              className="flex justify-between w-max h-max px-[15px] py-[10px] bg-green rounded-4"
            >
              <img
                src={navbarData.loginButton.image}
                alt={navbarData.loginButton.altImage}
              />
              <p className="font-bold text-14 text-white leading-20 mx-[5px] text-center">
                {navbarData.loginButton.login}
              </p>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => console.log("click account button")}
              className="flex justify-between w-max h-max px-[15px] py-[10px] bg-white rounded-4 border border-1 border-gray "
            >
              <img
                src={navbarData.loginButton.accountImage}
                alt={navbarData.loginButton.altImage}
              />
              <p className="w-max h-max my-auto text-green text-14 leading-20 font-bold mx-[7px]">
                {navbarData.loginButton.account}
              </p>
              <img
                className="w-max h-max my-auto ml-[3px]"
                src={navbarData.loginButton.chevron}
                alt={navbarData.loginButton.altChevron}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
