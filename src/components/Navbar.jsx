import React, { useContext, useState } from "react";
import { StateContext } from "../context/StateProvider";
import { navbarData } from "../data/mainData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(StateContext);
  const [accountView, setAccountView] = useState(false);

  return (
    <div className="fixed w-[100vw] h-[70px] z-[300] bg-white border-b border-b-1 border-b-gray ">
      <div className="2xl:w-[1290px] mx-auto relative">
        <div className="flex justify-between w-full py-[15px]">
          <NavLink to="/" className="w-max h-max my-auto">
            <p className="w-max h-max my-auto font-bold text-24 leading-30 text-black">
              TOP2PRO
            </p>
          </NavLink>

          <div className="w-max h-max flex">
            {navbarData.menuButtons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="w-max h-max my-auto cursor-pointer 2xl:mr-[40px]"
              >
                <span className="font-bold text-black text-14 leading-20 ">
                  {item.label}
                </span>
              </a>
            ))}
            {user && (
              <NavLink
                to={{
                  pathname: `/${user.name}-${user.id}/toTrade`,
                  // pathname: "/:id/toTrade",
                }}
                className="w-max h-max my-auto cursor-pointer 2xl:mr-[40px]"
              >
                <p className="font-bold text-black text-14 leading-20 underline ">
                  To Trade
                </p>
              </NavLink>
            )}
            {user === null ? (
              <button
                type="button"
                onClick={() => setAccountView(!accountView)}
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
                onClick={() => console.log("mono click")}
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
        {accountView ? (
          user === null ? (
            <div
              className="w-[200px] h-max border border-1 border-gray bg-main ml-auto rounded-10 p-[20px] "
              onMouseLeave={() => setAccountView(false)}
            >
              <NavLink
                className="w-full h-max mx-auto"
                to={{
                  pathname: "/login",
                }}
              >
                <h2 className="text-gray text-14 leading-20 mb-[10px] w-max h-max mx-auto font-bold">
                  Log In
                </h2>
              </NavLink>
              <hr />
              <NavLink
                className="w-full h-max m-auto"
                to={{
                  pathname: "/registration",
                }}
              >
                <h2 className="text-gray text-14 leading-20 mt-[10px] w-max h-max mx-auto font-bold">
                  Registration
                </h2>
              </NavLink>
            </div>
          ) : (
            <div
              className="w-[200px] h-max border border-1 border-gray bg-main ml-auto rounded-10 p-[20px] "
              onMouseLeave={() => setAccountView(false)}
            >
              <button type="button" className="w-full h-max mb-[10px]">
                <p className="text-14 text-gray font-bold leading-22 w-max h-max mx-auto ">
                  Account
                </p>
              </button>
              <hr />
              <button type="button" className="w-full h-max my-[10px]">
                <p className="text-14 text-gray font-bold leading-22 w-max h-max mx-auto ">
                  Change password
                </p>
              </button>
              <hr />
              <button type="button" className="w-full h-max mt-[10px]">
                <p className="text-14 text-gray font-bold leading-22 w-max h-max mx-auto ">
                  Log Out
                </p>
              </button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
