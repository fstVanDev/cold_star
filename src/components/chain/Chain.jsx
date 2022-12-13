import React, { useContext, usaState, useEffect } from "react";
import ChainBlock from "./chainBlock/ChainBlock";
import { StateContext } from "../../context/StateProvider";
import AddNewChainButton from "./chainBlock/AddNewChainButton";

const Chain = () => {
  const {} = useContext(StateContext);

  return (
    <div className="2xl:w-[190px] h-max">
      <AddNewChainButton />
      <ChainBlock />
    </div>
  );
};

export default Chain;
