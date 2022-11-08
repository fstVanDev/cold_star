import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import MainModal from "../AuxiliaryComponents/MainModal";

const LoginModal = () => {
  const {
    user,
    login,
    setLogin,
    password,
    setPassword,
    setUser,
    loginView,
    setLoginView,
    setViewSidebar,
  } = useContext(StateContext);

  return (
    <MainModal visible={loginView} onClose={() => setLoginView(false)}>
      <div className="grid bg-inherit h-max mx-auto h-max 2xl:w-[450px] 2xl:rounded-10 border border-[1.5px] border-secondary">
        <div className="flex bg-main w-full rounded-10 px-[30px] justify-center mb-[15px] py-[12px]">
          <p className="w-max h-max mx-auto text-light-blue 2xl:text-26 font-bold">
            Login
          </p>
        </div>

        <div className="w-full h-max grid px-[30px] bg-main rounded-10 py-[24px]">
          <p className="text-white w-max h-max 2xl:mb-[12px] 2xl:text-16 font-normalplus">
            Email
          </p>
          <input
            type="text"
            placeholder="Name@mail.com"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-1 border-light-blue w-full bg-inherit focus:border-blue focus:ring-0 focus:outline-none text-white
            2xl:px-[12px] 2xl:py-[6px] 2xl:rounded-6 2xl:text-14"
          />

          <p className="text-blue  text-12 mt-[12px] w-full h-max cursor-pointer">
            Forgot your password ?
          </p>

          <div className="flex w-full h-max mt-[60px] justify-center">
            <button
              type="button"
              onClick={() => {
                setUser(true);
                setLoginView(false);
                setViewSidebar(true);
              }}
              className="text-white bg-light-blue text-16 hover:bg-blue w-max h-max rounded-6 border-none px-[30px] py-[6px] mr-[24px]  font-bold"
            >
              Log in
            </button>

            <button
              type="button"
              onClick={() => setLoginView(false)}
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

export default LoginModal;
