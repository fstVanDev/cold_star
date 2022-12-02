import React, { useContext, useState } from "react";
// import { StateContext } from "../context/StateProvider";
import { homeData } from "../data/mainData";

const Home = () => {
  // const {} = useContext(StateContext);

  const [initialQuestion, setInititalQuestion] = useState(null);

  return (
    <div className="mt-[70px]">
      {/* first-block */}
      <div
        className="flex flex-start w-full h-[386px] border border-1 border-gray rounded-30 bg-white pt-[60px] px-[60px] 2xl:w-[1290px] mx-auto"
        id="home"
      >
        <div className="grid w-max h-full pb-[60px]">
          <h1 className="max-w-[370px] h-max font-bold text-42 leading-52 text-black">
            {homeData.firstBlock.label}
          </h1>
          <p className="max-w-[473px] h-max font-normal text-gray text-18 leding-24 mt-[20px] mb-[30px]">
            {homeData.firstBlock.text}
          </p>

          <button
            type="button"
            onClick={() => console.log("click on button start")}
            className="w-max h-max rounded-4 bg-green px-[15px] py-[10px] text-white text-14 leading-20"
          >
            {homeData.firstBlock.buttonText}
          </button>
        </div>

        <img
          src={homeData.firstBlock.image}
          alt={homeData.firstBlock.altImage}
        />
      </div>

      {/* second-block */}
      <div
        className="grid w-full h-[474px] py-[60px] 2xl:w-[1290px] mx-auto"
        id="hitwork"
      >
        <h1 className="w-max h-max mb-[30px] text-black font-bold text-32 leading-40">
          {homeData.secondBlock.label}
        </h1>

        <div className="flex justify-between h-max w-full">
          {homeData.secondBlock.blocks.map((item) => (
            <div
              className="h-[284px] w-[410px] p-[30px] border border-1 border-gray bg-white rounded-30"
              key={item.label}
            >
              <div className="flex justify-start h-max">
                <div className="w-max h-max p-[10px] rounded-15 bg-main border border-1 border-gray my-auto">
                  <img
                    src={item.image}
                    alt={item.altImage}
                    className="w-max h-max"
                  />
                </div>
                <h2 className="h-max w-max text-black text-24 leading-30 font-normal ml-[20px] max-w-[200px]">
                  {item.label}
                </h2>
              </div>

              <p className="text-gray text-18 leadin-24 font-normal w-full h-max mt-[20px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* third-block  */}
      <div className="w-full h-max bg-green h-[580px]" id="plans">
        <div className="2xl:w-[1290px] mx-auto py-[60px] flex justify-between">
          <div className="grid h-max w-max">
            <h1 className="text-white font-bold text-32 leading-40">
              {homeData.thirdBlock.label}
            </h1>
            <p className="font-normal text-18 leading-24 text-white max-w-[300px] mt-[30px]">
              {homeData.thirdBlock.text}
            </p>
          </div>

          <div className="flex justify-between w-[960px]">
            {homeData.thirdBlock.plans.map((item) => (
              <div
                className="bg-white rounded-30 w-[300px] h-[460px] p-[10px]"
                key={item.label}
              >
                <div
                  className={`${item.color} rounded-t-20 rounded-b-4 py-[20px] h-max w-full`}
                >
                  <p className="h-max w-max text-24 leading-30 font-bold text-black m-auto">
                    {item.label}
                  </p>
                </div>

                <div className="h-[250px] w-full">
                  {item.blocks.map((obj) => (
                    <div
                      className="grid h-max w-max  mt-[20px] pl-[20px]"
                      key={obj.label}
                    >
                      <div className="flex h-max w-full ">
                        <div
                          className={`${item.color} rounded-[50%] w-[14px] h-[14px] mr-[15px] my-auto`}
                        />
                        <h2 className="text-black text-18 leading-24 font-bold h-max w-max my-auto">
                          {obj.label}
                        </h2>
                      </div>
                      <p className="font-normal text-14 leading-20 text-gray h-max max-w-[240px] mt-[5px]">
                        {obj.text}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => console.log("click on plans")}
                  className="flex w-max mt-[40px] h-max py-[10px] px-[15px] mx-auto bg-green rounded-4 text-white text-14 leading-20 font-bold"
                >
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* fourth-block */}
      <div
        className=" w-full h-[584px] 2xl:w-[1290px] mx-auto py-[60px]"
        id="faqs"
      >
        <h1 className="w-max h-max font-bold text-32 leading-40 text-black">
          {homeData.fourthBlock.label}
        </h1>

        <div className="flex justify-between w-full h-max flex-wrap">
          {homeData.fourthBlock.questions.map((item, index) => (
            <div
              className="w-[630px] h-max bg-white rounded-30 mt-[30px] border border-1 border-gray p-[30px]"
              key={index}
            >
              <div className="flex jsutify-between w-full h-max">
                <button
                  type="button"
                  onClick={() => {
                    index === initialQuestion
                      ? setInititalQuestion(null)
                      : setInititalQuestion(index);
                  }}
                  className="w-max h-max flex my-auto"
                >
                  <img
                    src={
                      index === initialQuestion
                        ? homeData.fourthBlock.minusButton
                        : homeData.fourthBlock.plusButton
                    }
                    alt={
                      index === initialQuestion
                        ? homeData.fourthBlock.altMinus
                        : homeData.fourthBlock.altPlus
                    }
                  />
                </button>
                <h2 className="text-black text-24 leading-30 font-bold ml-[10px] max-w-[520px]">
                  {item.label}
                </h2>
              </div>

              <p
                className={
                  index === initialQuestion
                    ? "mt-[10px] text-18 leading-24 text-gray max-w-[520px]"
                    : "hidden"
                }
              >
                {item.text}
              </p>
            </div>
          ))}
          <a
            className="w-max h-max mt-[60px] mx-auto flex cursor-pointer"
            href={homeData.fourthBlock.linkUrl}
          >
            <p className="text-orange text-18 leading-22 font-normal mr-[5px]">
              {homeData.fourthBlock.linkText}
            </p>
            <img
              className="w-[18px] h-[18px] my-auto"
              src={homeData.fourthBlock.linkImage}
              alt={homeData.fourthBlock.alt}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
