import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import MainModal from "../AuxiliaryComponents/MainModal";

import { registerFunc, getCsrf } from "../../data/Requests";

const RegisterModal = () => {
  const {
    setUser,
    setStatus,
    registerView,
    setRegisterView,
    registerLogin,
    setRegisterLogin,
    registerPassword,
    setRegisterPassword,
    validation,
    setValidation,
    registerConfirmPassword,
    setRegisterConfirmPassword,
    registerName,
    setRegisterName,
  } = useContext(StateContext);

  function confirmRegistration() {
    if (
      registerName.length === 0 &&
      registerLogin.length === 0 &&
      registerPassword.length === 0 &&
      registerConfirmPassword.length === 0 &&
      registerPassword === registerConfirmPassword &&
      validation === "k32nf91mss2"
    ) {
      alert("Login and Password can`t be null");
    } else {
      // getCsrf(setStatus, setUser);
      registerFunc(
        setUser,
        registerName,
        registerLogin,
        registerPassword,
        registerConfirmPassword,
        validation
      );
    }
  }

  return (
    <MainModal visible={registerView} onClose={() => setRegisterView(false)}>
      <div className="grid bg-inherit h-max mx-auto h-max 2xl:w-[450px] 2xl:rounded-10 border border-[1.5px] border-secondary">
        <div className="flex bg-main w-full rounded-10 px-[30px] justify-center mb-[15px] py-[12px]">
          <p className="w-max h-max mx-auto text-light-blue 2xl:text-26 font-bold">
            Register
          </p>
        </div>

        <div className="w-full h-max grid px-[30px] bg-main rounded-10 py-[24px]">
          <p className="text-white w-max h-max 2xl:mb-[12px] 2xl:text-16 font-normalplus">
            Name
          </p>
          <input
            type="text"
            placeholder="Name"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
            className="border border-1 border-light-blue w-full bg-inherit focus:border-blue focus:ring-0 focus:outline-none text-white
            2xl:px-[12px] 2xl:py-[6px] 2xl:rounded-6 2xl:text-14 mb-[12px]
            "
          />

          <p className="text-white w-max h-max 2xl:mb-[12px] 2xl:text-16 font-normalplus">
            Email
          </p>
          <input
            type="text"
            placeholder="Name@mail.com"
            value={registerLogin}
            onChange={(e) => setRegisterLogin(e.target.value)}
            className="border border-1 border-light-blue w-full bg-inherit focus:border-blue focus:ring-0 focus:outline-none text-white
            2xl:px-[12px] 2xl:py-[6px] 2xl:rounded-6 2xl:text-14 
            "
          />

          <p className="text-white w-max h-max 2xl:mb-[12px] 2xl:text-16 font-normalplus mt-[12px]">
            Password
          </p>
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            className="border border-1 border-light-blue w-full bg-inherit focus:border-blue focus:ring-0 focus:outline-none text-white
            2xl:px-[12px] 2xl:py-[6px] 2xl:rounded-6 2xl:text-14"
          />

          {/* <p className="text-white w-max h-max 2xl:mb-[12px] 2xl:text-16 font-normalplus mt-[12px]">
            Confirm your password
          </p> */}
          <input
            type="password"
            placeholder="Confirm your password"
            value={registerConfirmPassword}
            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            className="border border-1 border-light-blue w-full mt-[12px] bg-inherit focus:border-blue focus:ring-0 focus:outline-none text-white
            2xl:px-[12px] 2xl:py-[6px] 2xl:rounded-6 2xl:text-14"
          />

          <p className="text-white w-max h-max 2xl:mb-[12px] 2xl:text-16 font-normalplus mt-[12px]">
            Validation k32nf91mss2
          </p>
          <input
            type="text"
            placeholder="Validation code"
            value={validation}
            onChange={(e) => setValidation(e.target.value)}
            className="border border-1 border-light-blue w-full bg-inherit focus:border-blue focus:ring-0 focus:outline-none text-white
            2xl:px-[12px] 2xl:py-[6px] 2xl:rounded-6 2xl:text-14"
          />

          <div className="flex w-full h-max mt-[60px] justify-center">
            <button
              type="button"
              onClick={() => confirmRegistration()}
              className="text-white bg-light-blue text-16 hover:bg-blue w-max h-max rounded-6 border-none px-[30px] py-[6px] mr-[24px]  font-bold"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => setRegisterView(false)}
              className="text-light-blue text-16 hover:text-blue py-[4px] px-[12px] font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default RegisterModal;
