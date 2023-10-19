import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="h-screen bg-slate-50">
      <div className="h-[50vh] flex justify-center items-center relative bg-orange-100">
        <div className="p-10 w-1/3 absolute top-32 z-20 bg-white flex flex-col border">
          <h1 className="font-semibold text-lg mb-10">Create your new Account</h1>
          <form className="flex flex-col mb-5 gap-5" action="">
            <div className="flex gap-2 flex-col">
              <label htmlFor="">Name</label>
              <input className="p-2 outline-none bg-slate-50" type="text" />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="">Email</label>
              <input className="p-2 outline-none bg-slate-50" type="text" />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="">Password</label>
              <input className="p-2 outline-none bg-slate-50" type="password" />
            </div>
            <input
              className="bg-orange-100 font-medium p-2 w-full"
              type="submit"
            />
          </form>
          <p className="text-[0.9rem] mt-10 text-center">
            existing user ?{" "}
            <Link to={"/login"} className="text-blue-500 underline">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
