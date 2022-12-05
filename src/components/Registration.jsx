import React, { useContext, useState } from "react";
import { StateContext } from "../context/StateProvider";
import { showPassword } from "../images";

import { Link } from "react-router-dom";

const Registration = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    user,
    setUser,
  } = useState(StateContext);
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  return (
    <div className="bg-main">
      <div className="2xl:w-[1290px] mx-auto h-[100vh] 2xl:pt-[95px]">
        <div className="2xl:w-[410px] 2xl:h-max border border-1 border-gray rounded-30 bg-white m-auto p-[30px] ">
          <h1 className="w-max h-max mx-auto text-black font-bold text-24 leading-30 ">
            Registration
          </h1>

          <div className="mt-[30px] w-full h-max grid">
            <h2 className="text-black text-14 leading-17 font-normal">Email</h2>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="focus:ring-0 focus:outline-none border border-1 border-gray rounded-10 w-full h-[40px] text-gray pl-[15px] mt-[10px]"
            />
          </div>
          <div className="mt-[20px] w-full h-max grid">
            <h2 className="text-black text-14 leading-17 font-normal">Name</h2>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="focus:ring-0 focus:outline-none border border-1 border-gray rounded-10 w-full h-[40px] text-gray pl-[15px] mt-[10px]"
            />
          </div>
          <div className="mt-[20px] w-full h-max grid">
            <h2 className="text-black text-14 leading-17 font-normal">
              Password
            </h2>

            <div className="border border-1 border-gray rounded-10 mt-[10px]">
              <input
                type={hide2 ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="focus:ring-0 focus:outline-none w-[310px] h-[40px] text-gray rounded-10 pl-[15px] "
              />
              <button
                type="button"
                className="w-[20px] h-[20px] my-auto"
                onClick={() => setHide2(!hide2)}
              >
                <img
                  src={showPassword}
                  alt="show"
                  className="w-max h-max m-auto"
                />
              </button>
            </div>
          </div>
          <div className="mt-[20px] w-full h-max grid">
            <h2 className="text-black text-14 leading-17 font-normal">
              Confirm password
            </h2>

            <div className="border border-1 border-gray rounded-10 mt-[10px]">
              <input
                type={hide ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="focus:ring-0 focus:outline-none w-[310px] h-[40px] text-gray rounded-10 pl-[15px] "
              />
              <button
                type="button"
                className="w-[20px] h-[20px] my-auto"
                onClick={() => setHide(!hide)}
              >
                <img
                  src={showPassword}
                  alt="show"
                  className="w-max h-max m-auto"
                />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="w-full h-max px-auto py-[14px] mt-[30px] bg-green rounded-6 text-white font-bold text-18 leading-22"
            onClick={() => console.log("click")}
          >
            Continue
          </button>
          <div className="flex justify-center h-max w-full mt-[20px]">
            <p className="text-12 font-normal text-gray leading-17">
              Already registered?
            </p>
            <Link to={"/login"}>
              <p className="ml-[5px] text-green text-12 leading-17 underline">
                Log In
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
