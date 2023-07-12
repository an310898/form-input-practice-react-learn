import { useState } from "react";
import classes from "./validate.module.css";
const SimpleInput = props => {
  const [inputName, setInputName] = useState("");
  const [enterNameTouched, setEnterNameTouched] = useState(false);
  const isValidInputName = inputName.trim().length > 0;
  const invalidInputName = !isValidInputName && enterNameTouched;

  let formIsValid = false;

  if (isValidInputName) {
    formIsValid = true;
  }

  const inputNameBlurHandler = e => {
    setEnterNameTouched(true);
    setInputName(e.target.value);
  };

  const inputNameChangeHandler = e => {
    setEnterNameTouched(true);
    setInputName(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    setEnterNameTouched(true);
    if (!isValidInputName) {
      console.log("input not valid");
      return;
    }
    console.log(inputName);
    setInputName("");
    setEnterNameTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={invalidInputName ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          className={invalidInputName ? classes.invalid : ""}
          value={inputName}
          onBlur={inputNameBlurHandler}
          onChange={inputNameChangeHandler}
        />
        {invalidInputName ? (
          <p className="error-text">Name must not be empty</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
