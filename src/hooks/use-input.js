import { useState } from "react";

const useInput = validateValue => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  let inputIsValid = validateValue(input);

  const valid = !inputIsValid && inputTouched;

  const onSetInput = event => {
    setInput(event.target.value);
  };

  const onSetInputTouched = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setInput("");
    setInputTouched(false);
  };

  return {
    value: input,
    inputValid: inputIsValid,
    valid: valid,
    reset: reset,
    setInput: onSetInput,
    setTouched: onSetInputTouched,
  };
};

export default useInput;
