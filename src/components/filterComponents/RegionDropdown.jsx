import React, { useState, useContext, useEffect } from "react";
import { chevronFilter } from "../../images";

const RegionDropdown = () => {
  const [activeRegion, setActiveRegion] = useState(false);

  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Region
      </h2>
      <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6 my-auto">
        <button
          onClick={() => {
            setActiveRegion(!activeRegion);
          }}
          type="button"
          className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activeRegion && "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activeRegion && "rounded-6"}
               `}
        >
          <p className="w-max h-max text-lightGray text-12 leading-14 font-normal my-auto">
            Comming soon...
          </p>
          {/* <img
            src={chevronFilter}
            alt="chvrn"
            className="w-[16px] h-[16px] my-auto"
          /> */}
        </button>
      </div>
    </div>
  );
};

export default RegionDropdown;
