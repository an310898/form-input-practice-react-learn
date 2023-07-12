import useInput from "../hooks/use-input";

const BasicForm = props => {
  const firstNameInput = useInput("text", "First Name");
  const lastNameInput = useInput("text", "Last Name");
  const emaiInput = useInput("email", "E-Mail");

  let formValid = false;

  if (
    firstNameInput.inputValid &&
    lastNameInput.inputValid &&
    emaiInput.inputValid
  ) {
    formValid = true;
  }

  const inputChangeHandler = (input, e) => {
    input.setInput(e.target.value);
  };
  const inputBlurHandler = input => {
    input.setTouched();
  };

  const formSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div
          className={
            firstNameInput.valid ? "form-control invalid" : "form-control"
          }>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameInput.value}
            onChange={inputChangeHandler.bind(null, firstNameInput)}
            onBlur={inputBlurHandler.bind(null, firstNameInput)}
          />
          {firstNameInput.valid && (
            <p className="error-text">{firstNameInput.error}</p>
          )}
        </div>
        <div
          className={
            lastNameInput.valid ? "form-control invalid" : "form-control"
          }>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameInput.value}
            onChange={inputChangeHandler.bind(null, lastNameInput)}
            onBlur={inputBlurHandler.bind(null, lastNameInput)}
          />
          {lastNameInput.valid && (
            <p className="error-text">{lastNameInput.error} </p>
          )}
        </div>
      </div>
      <div
        className={emaiInput.valid ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emaiInput.value}
          onChange={inputChangeHandler.bind(null, emaiInput)}
          onBlur={inputBlurHandler.bind(null, emaiInput)}
        />
      </div>
      {emaiInput.valid && <p className="error-text">{emaiInput.error}</p>}

      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
