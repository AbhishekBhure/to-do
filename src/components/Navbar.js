import React, { useState, useEffect } from "react";
import Switcher from "../Switcher";
import todo from "../svg/to-do.svg";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handelLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="shadow-xl w-full flex justify-between px-7 py-5 bg-white dark:bg-black fixed z-10">
      <div className="flex justify-center items-center gap-2">
        <img src={todo} alt="todo" className="w-[30px] h-[30px]" />
        <h1 className="text-black font-bold dark:text-white">
          {" "}
          <Link to="/">Agenda!!</Link>{" "}
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        {authUser ? (
          <button
            onClick={handelLogout}
            type="button"
            className="rounded  dark:text-black transition-all ease-linear  px-5 font-bold py-2  bg-[#ffe100] text-black tracking-normal"
          >
            <Link to="/">Logout</Link>
          </button>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className="rounded transition-all ease-linear  px-5 font-bold py-2  bg-[#ffe100] text-black tracking-normal"
            >
              Login
            </button>
          </Link>
        )}

        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
