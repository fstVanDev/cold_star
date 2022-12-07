import { useRouteError, useNavigate } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div id="error-page" className="w-[100wh] h-[100vh] p-auto flex">
      <div className="w-max h-max m-auto">
        <h1 className="text-42 font-bold text-black text-center">Oops!</h1>
        <p className="text-gray text-22 leading-17 font-normal mt-[20px] text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className=" text-18 font-normal text-gray text-center mt-[20px]">
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          type="button"
          className="w-max h-max rounded-6 border border-1 border-gray text-gray bg-white px-[16px] py-[8px]"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
