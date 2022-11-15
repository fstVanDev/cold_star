import React from "react";
import Select from "react-select";

const Dropdown = ({ name, mainArray, val, funct, boo }) => {
  const styles = {
    control: (base, state) => ({
      ...base,
      background: "#212833",
      borderColor: "#212833",
      borderRadius: "6px",
      color: "#F5F5F5",
      "&:hover": {
        borderColor: "#212833",
      },
      "&:focus": {
        borderColor: "#0c9aed",
      },
    }),
    singleValue: (base, state) => ({
      ...base,
      padding: "2px 8px",
      width: "120px",
      margin: "auto",
      borderRadius: "4px",
      color: "#0c9aed",
      "&:hover": {
        color: state.isFocused ? "#F5F5F5" : "#F5F5F5",
      },
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? null : null,

      "&:hover": {
        backgroundColor: "#802020",
        border: null,
      },
    }),
    multiValueLabel: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? null : null,

      margin: "0px",
      color: "#F5F5F5",
    }),
    IndicatorsContainer: (base, state) => ({
      backgroundColor: "#0c9aed",
    }),
    menuList: (base, state) => ({
      ...base,
      backgroundColor: "#212833",
      color: "#0c9aed",
      borderRadius: "6px",
    }),
    menu: (base, state) => ({
      ...base,
      borderRadius: "8px",
    }),
    valueContainer: () => ({
      height: "32px",
      display: "flex",
      width: "100px",
    }),
    input: () => ({
      width: "100px",
      display: "flex",
      marginRight: "auto",
      height: "32px",
    }),
    placeholder: () => ({
      color: "#808080",
      padding: "2px 8px",
      width: "100px",
      margin: "auto",
      borderRadius: "4px",
    }),
  };

  const styles1 = {
    control: () => ({
      display: "flex",
      height: "38px",
      padding: "auto 0px",
      width: "max",
      maxWidth: "max",
      backgroundColor: "#212833",
      borderRadius: "6px",
    }),
    multiValueContainer: () => ({
      display: "flex",
      padding: "5px 5px",
      margingRight: "10px",

      height: "38px",
    }),
    multiValue: () => ({
      minWidth: "100px",
      width: "max",
      height: "max",
      display: "flex",
      justifyContent: "space-between",
      color: "#0c9aed",
      border: "1px solid #0c9aed",
      borderRadius: "4px",
      padding: "2px 0px 2px 3px",
    }),

    multiValueLabel: () => ({
      color: "#F5F5F5",
      fontSize: "14px",
      marginRight: "2px",
      minWidth: "80px",
      width: "max",
      height: "28px",
      padding: "auto",
      wordBreak: "break-word",
    }),
    input: () => ({
      display: "hidden",
    }),
  };

  return (
    <div className="grid h-max w-max">
      <p className="text-black w-max h-max 2xl:mb-[8px] 2xl:text-16 font-normalplus">
        {name}
      </p>
      {boo === false ? (
        <div className="flex">
          <Select
            value={val}
            styles={styles}
            onChange={funct}
            hideSelectedOptions={false}
            className="min-w-[120px] h-[38px] cursor-pointer my-auto
          react-select__menu-option:hover:bg-secondary
          "
            placeholder={`${name}..`}
            options={mainArray !== null ? mainArray : ""}
          />
        </div>
      ) : (
        <div className="flex">
          <Select
            styles={styles1}
            value={val}
            onChange={funct}
            // className="w-max h-[58px] cursor-pointer react-select__menu-option:hover:bg-secondary"
            isSearchable={false}
            isMulti
            placeholder={`${name}..`}
            options={mainArray !== null ? mainArray : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
