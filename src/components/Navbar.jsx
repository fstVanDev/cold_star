import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import { navbarData } from "../data/mainData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, setUser, accountView, setAccountView } =
    useContext(StateContext);

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
              key={item.label}
              href={item.label}
              className="w-max h-max my-auto cursor-pointer 2xl:mr-[40px]"
            >
              <span className="font-bold text-black text-14 leading-20 ">
                {item.label}
              </span>
            </a>
          ))}
          {user === false ? (
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
              onClick={() => setAccountView(!accountView)}
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
        !user ? (
          <div
            className="w-[200px] h-max border border-1 border-gray bg-main ml-auto rounded-10 p-[20px] "
            onMouseLeave={() => setAccountView(false)}
          >
            <Link to={"/login"}>
              <h2 className="text-gray text-14 leading-20 mb-[10px] w-max h-max mx-auto font-bold">
                Log In
              </h2>
            </Link>
            <hr />
            <Link to={"/registration"}>
              <h2 className="text-gray text-14 leading-20 mt-[10px] w-max h-max mx-auto font-bold">
                Registration
              </h2>
            </Link>
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
  );
};

export default Navbar;
