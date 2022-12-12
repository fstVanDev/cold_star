import React, { useContext, usaState, useEffect } from "react";
import Chain from "./chainBlock/Chain";
import { StateContext } from "../../../context/StateProvider";
import AddNewChainButton from "./chainBlock/AddNewChainButton";

const ChainBlock = () => {
  const {} = useContext(StateContext);

  return (
    <div className="2xl:w-[190px] h-max">
      <AddNewChainButton />
      <Chain />
    </div>
  );
};

export default ChainBlock;
