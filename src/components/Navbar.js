import React from "react";
import Switcher from "../Switcher";
import todo from "../svg/to-do.svg";

const Navbar = () => {
  return (
    <nav className="shadow-xl w-full flex justify-between px-7 py-5 bg-[#8758ff] dark:bg-black">
      <div className="flex justify-center items-center gap-2">
        <img src={todo} alt="todo" className="w-[30px] h-[30px]" />
        <h1>Agenda!!</h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          className="rounded  dark:text-black transition-all ease-linear  px-5 font-bold py-2  bg-[#ffe100] text-black tracking-normal"
        >
          <a href="/">Login</a>
        </button>
        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
