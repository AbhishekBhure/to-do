import React, { useState } from "react";
import { loginFields } from "../contants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateuser();
    navigate("/");
  };

  const authenticateuser = () => {
    let userInput = {};
    fields.forEach((field) => {
      userInput[field.id] = loginState[field.id];
    });
    signInWithEmailAndPassword(auth, userInput.email, userInput.password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((error) => console.log(error));
    console.log(userInput);
  };

  return (
    <div className="flex justify-center w-full h-[100vh] bg-white dark:bg-black">
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
      </form>
    </div>
  );
}
