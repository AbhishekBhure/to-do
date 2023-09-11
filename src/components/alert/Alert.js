import React, { useEffect, useState } from "react";
import cross from "../../svg/cross.svg";
import { useAlert } from "../Context/AlertContext";

const Alert = (props) => {
  const { alert, hideAlert } = useAlert();

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (alert) {
      const alertTimer = setTimeout(() => {
        hideAlert();
      }, 5000);

      setTimer(alertTimer);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [alert, timer, hideAlert]);

  const handleCancle = () => {
    console.log("cancle");
    hideAlert();
  };

  if (!alert) {
    return null;
  }

  return (
    <div
      className={`absolute top-28 right-28 ${alert.type}  bg-[#ffe100]  py-4 rounded flex items-center justify-center`}
    >
      <div className="mx-4">{alert.message}</div>
      <span className="ml-3 mr-3 cursor-pointer" onClick={handleCancle}>
        <img src={cross} alt="cross" className="w-6" />
      </span>
    </div>
  );
};

export default Alert;
