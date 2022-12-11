import { useRouteError, useNavigate, Redirect, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div id="error-page" className="w-screen h-screen flex mx-auto my-auto">
      <div className="flexw-max h-max m-auto">
        <h1 className="text-42 font-bold text-black text-center">Oops!</h1>
        <p className="text-gray text-22 leading-17 font-normal mt-[20px] text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className=" text-18 font-normal text-gray text-center mt-[20px]">
          404 Not Found
        </p>
        <div className="w-max h-max mt-[20px] mx-auto">
          <Link
            to={"/"}
            className="w-max h-max rounded-6 border border-1 border-green text-gray bg-white px-[16px] py-[8px] "
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
