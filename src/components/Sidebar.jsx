import React, { useContext, useState } from "react";
import { StateContext } from "../context/StateProvider";

import { getCurrencies, clearCoockies } from "../data/Requests";
import { chevron } from "../images";

const Sidebar = () => {
  const {
    viewSidebar,
    setViewSidebar,
    setUser,
    setFilterView,
    setFiatArray,
    setCryptoArray,
  } = useContext(StateContext);
  const [chevronAcc, setChevronAcc] = useState(false); // true - параметры аккаунта показываются, false - скрываются
  const [chevronFav, setChevronFav] = useState(false); // true - параметры Избранных показываются, false - скрываются
  const [beta, setBeta] = useState(true); // true - beta block is visible, false - not visible

  return (
    <>
      {viewSidebar === true ? (
        <div className="2xl:w-[1290px]  2xl:mx-auto 2xl:mt-[104px]">
          <aside className="2xl:w-[240px] fixed">
            <div className="py-4 px-3 bg-main rounded-10 border border-[1.5px] border-secondary">
              {/* Sidebar menu links */}
              <ul className="space-y-2">
                {/* Account */}
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setChevronAcc(!chevronAcc);
                      setChevronFav(false);
                    }}
                    className={
                      chevronAcc === false
                        ? "flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between rounded-6 hover:bg-gray hover:text-light-blue"
                        : "flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between bg-gray rounded-t-6 rounded-b-0 border-b border-b-1 border-b-light-blue"
                    }
                  >
                    <span className="ml-3 whitespace-nowrap w-max ">
                      Account
                    </span>
                    <img
                      src={chevron}
                      alt="chevron"
                      className={
                        chevronAcc === false
                          ? "w-[12px] h-[12px] mr-3 my-auto"
                          : "rotate-180 w-[12px] h-[12px] mr-3 my-auto"
                      }
                    />
                  </button>

                  {chevronAcc === true ? (
                    <>
                      {" "}
                      <ul className="space-y-0 ">
                        <li className="flex items-center p-2 text-16 font-normal text-white cursor-pointer bg-gray hover:text-light-blue">
                          <p className="w-max h-max ml-3 whitespace-nowrap ">
                            Settings
                          </p>
                        </li>
                        <li className="flex items-center p-2 text-16 font-normal text-white w-full justify-between rounded-b-6 cursor-pointer bg-gray hover:text-light-blue">
                          <p className="w-max h-max ml-3 whitespace-nowrap ">
                            My Plan
                          </p>
                          <span className="inline-flex justify-center items-center px-2 ml-3 text-10 font-normal text-white bg-blue rounded-6">
                            Pro
                          </span>
                        </li>
                      </ul>
                    </>
                  ) : null}
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setFilterView(true);
                      getCurrencies(setFiatArray, setCryptoArray);
                    }}
                    className="flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between rounded-6 hover:bg-gray hover:text-light-blue"
                  >
                    <p className="ml-3">New Filter</p>
                  </button>
                </li>

                {/* Favorites */}
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setChevronAcc(false);
                      setChevronFav(!chevronFav);
                    }}
                    className={
                      chevronFav === false
                        ? "flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between rounded-6 hover:bg-gray hover:text-light-blue"
                        : "flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between bg-gray rounded-t-6 rounded-b-0 border-b border-b-1 border-b-light-blue"
                    }
                  >
                    <span className="ml-3 whitespace-nowrap w-max ">
                      Favorites
                    </span>
                    <img
                      src={chevron}
                      alt="chevron"
                      className={
                        chevronFav === false
                          ? "w-[12px] h-[12px] mr-3 mu-auto"
                          : "rotate-180 w-[12px] h-[12px] mr-3 my-auto"
                      }
                    />
                  </button>
                  {chevronFav === true ? (
                    <div>
                      <ul>
                        <li className="flex items-center p-2 text-16 font-normal text-white w-full justify-between cursor-pointer bg-gray hover:text-light-blue">
                          <p className="w-max h-max ml-3 whitespace-nowrap ">
                            USDT / KZT
                          </p>
                          <span className="inline-flex justify-center items-center px-2 ml-3 text-10 font-normal text-white bg-green rounded-6">
                            BUY
                          </span>
                        </li>
                        <li className="flex items-center p-2 text-16 font-normal text-white w-full justify-between cursor-pointer bg-gray hover:text-light-blue">
                          <p className="w-max h-max ml-3 whitespace-nowrap ">
                            BUSD / USD
                          </p>
                          <span className="inline-flex justify-center items-center px-2 ml-3 text-10 font-normal text-white bg-red rounded-6">
                            SELL
                          </span>
                        </li>
                        <li className="flex items-center p-2 text-16 font-normal text-white w-full justify-between cursor-pointer bg-gray hover:text-light-blue">
                          <p className="w-max h-max ml-3 whitespace-nowrap ">
                            BUSD / KZT
                          </p>
                          <span className="inline-flex justify-center items-center px-2 ml-3 text-10 font-normal text-white bg-red rounded-6">
                            SELL
                          </span>
                        </li>
                        <li className="flex items-center p-2 text-16 font-normal text-white w-full justify-between rounded-b-6 cursor-pointer bg-gray hover:text-light-blue">
                          <p className="w-max h-max ml-3 whitespace-nowrap ">
                            BTC / RUB
                          </p>
                          <span className="inline-flex justify-center items-center px-2 ml-3 text-10 font-normal text-white bg-green rounded-6">
                            BUY
                          </span>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </li>

                {/* Help */}
                <li>
                  <button
                    type="button "
                    className="flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between rounded-6 hover:bg-gray hover:text-light-blue"
                  >
                    <p className="ml-3">Help</p>
                  </button>
                </li>

                {/* Soon */}
                <li>
                  <button
                    type="button "
                    className="flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between rounded-6 hover:bg-gray hover:text-light-blue"
                  >
                    <p className="ml-3">Something</p>
                  </button>
                </li>
                <li>
                  <button
                    type="button "
                    className="flex items-center p-2 text-16 font-normal text-white w-full h-max justify-between rounded-6 hover:bg-gray hover:text-light-blue"
                  >
                    <p className="ml-3">Something</p>
                  </button>
                </li>
              </ul>

              {/* Beta Block */}
              {beta === true ? (
                <div className="p-4 mt-6 bg-light-blue rounded-10">
                  <div className="flex items-center mb-3 bg-inherit">
                    <span className="bg-blue text-white text-12 font-bold mr-2 px-2.5 py-0.5 rounded-6">
                      Beta
                    </span>
                    <button
                      type="button"
                      className="ml-auto text-main rounded-6 p-1 inline-flex h-6 w-6 bg-white"
                      onClick={() => setBeta(false)}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-3 text-12 text-black ">
                    FIRESTAR is in beta version, there may be changes in the
                    interface and the logical part of the project. Follow us on
                    social networks.
                  </p>
                  <a className="text-12 text-white underline" href="">
                    To social media links
                  </a>
                </div>
              ) : null}

              <button
                typeof="button"
                onClick={() => {
                  setChevronAcc(false);
                  setChevronFav(false);
                  setViewSidebar(false);
                  clearCoockies();
                  setUser(false);
                }}
                className="flex items-center w-full mt-[6px] p-2 text-16 font-normalplus bg-[#0c9aed] mt-2 text-white rounded-6 bg-gray"
              >
                <p className="w-max h-max mx-auto whitespace-nowrap">Log out</p>
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
