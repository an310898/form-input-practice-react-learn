import { useState } from "react";

const useInput = (type = "text", inputName) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  let inputIsValid = input.trim().length > 0;
  let error;
  if (type === "email") {
    inputIsValid = input.includes("@");
    error = "Email must contain @";
  } else if (type === "text") {
    inputIsValid = input.trim().length > 0;
    error = `${inputName} must not be empty`;
  }

  const valid = !inputIsValid && inputTouched;

  const onSetInput = value => {
    setInput(value);
  };

  const onSetInputTouched = () => {
    setInputTouched(true);
  };

  return {
    inputName: inputName,
    value: input,
    touched: inputTouched,
    inputValid: inputIsValid,
    valid: valid,
    error: error,
    setInput: onSetInput,
    setTouched: onSetInputTouched,
  };
};

export default useInput;
