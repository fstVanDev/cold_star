import React, { useContext, usaState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import AddNewChain from "./AddNewChain";
import CurrentChain from "./CurrentChain";

const Chain = () => {
  const { currentId } = useContext(StateContext);

  // useEffect(() => {
  //   if(window.localStorage.length !== 0 ) {

  //   }
  // }, [window.localStorage])

  return (
    <div className="2xl:w-[190px] h-max">
      <AddNewChain />
    </div>
  );
};

export default Chain;
