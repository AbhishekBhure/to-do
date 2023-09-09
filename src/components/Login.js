import React, { useState } from "react";
import { loginFields } from "../contants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { login, googleSignIn } = useAuth();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateuser();
    navigate("/");
  };

  const authenticateuser = async () => {
    let userInput = {};
    fields.forEach((field) => {
      userInput[field.id] = loginState[field.id];
    });

    try {
      await login(userInput.email, userInput.password);
    } catch (error) {
      setError(error.message);
    }

    // signInWithEmailAndPassword(auth, userInput.email, userInput.password)
    //   .then((userCredentials) => console.log(userCredentials))
    //   .catch((error) => console.log(error));
    // console.log(userInput);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center w-full h-[100vh] bg-white dark:bg-black">
      {error && <p>{error}</p>}
      <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
        <hr />
        <button
          onClick={handleGoogleSignIn}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  rounded-md text-black bg-[#ffe100] font-bold  transition-all ease-in-out tracking-normal hover:bg-[#e6d343] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffe100] mt-10"
        >
          Google
        </button>
      </form>
    </div>
  );
}
