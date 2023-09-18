import React, { useState } from "react";
import { signupFields } from "../contants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { useAlert } from "./Context/AlertContext";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);
  const [error, setError] = useState("");

  const { signUp } = useAuth();
  const { showAlert } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    let userInput = {};
    fields.forEach((field) => {
      userInput[field.id] = signupState[field.id];
    });

    try {
      await signUp(userInput.email, userInput.password);
      navigate("/login");
      showAlert("Successfully SignedUp", "success");
    } catch (error) {
      setError(error.message);
    }

    // createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log(userInput.password);
  };

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center w-full ">
      {error && <p>{error}</p>}
      <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
        <div>
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
