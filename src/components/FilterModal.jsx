import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import Filter from "./Filter";

function Modal({ children, visible, onClose }) {
  if (!visible) return null;

  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdrop3") onClose && onClose();
  };

  return (
    <div
      id="backdrop"
      onClick={handleOnBackDropClick}
      className="w-[100vw] h-[100vh]  fixed mx-auto inset-0 bg-[#1F1F1F] bg-opacity-50"
    >
      <div
        id="backdrop3"
        className=" mt-[70px] mx-auto w-[100vw]  h-[100vh]"
        // onClick={() => onClose(false)}
      >
        {children}
      </div>
    </div>
  );
}

const FilterModal = () => {
  const { newFilterView, setNewFilterView } = useContext(StateContext);

  return (
    <Modal
      visible={newFilterView}
      setNewFilterView={() => setNewFilterView(false)}
    >
      <Filter />
    </Modal>
  );
};

export default FilterModal;
