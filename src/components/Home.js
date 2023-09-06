import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <button
          type="button"
          className="rounded bg-[#ffe100]  px-5 font-bold py-2 tracking-normal
      "
        >
          <Link to="/todo">Let's Go</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
