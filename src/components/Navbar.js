import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-xl w-full flex justify-between px-7 py-5">
      <div className="flex align-middle justify-center">
        <h1>Agenda!!</h1>
      </div>
      <div className="flex align-middle justify-center">
        <a href="" className="flex align-middle justify-center">
          {" "}
          <button>Login </button>{" "}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
