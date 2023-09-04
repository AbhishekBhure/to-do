import React, { useState } from "react";
import { signupFields } from "../contants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);

  const handleSubmit = (e) => {
    e.preventDefault();

    let userInput = {};
    fields.forEach((field) => {
      userInput[field.id] = signupState[field.id];
    });

    createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(userInput.password);
  };

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center w-full h-[100vh] dark:bg-black">
      <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
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
        <FormAction handelSubmit={handleSubmit} text="Signup" />
      </form>
    </div>
  );
};

export default Signup;
