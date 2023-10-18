import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-50">
      <div className="p-10 flex flex-col items-center">
        <h1 className=" text-8xl font-semibold text-rose-500">404</h1>
        <p className="text-center text-2xl">page not found</p>
        <Link to={"/"}>
          <button className="p-2 px-5 bg-slate-800 text-white rounded-lg mt-10">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
