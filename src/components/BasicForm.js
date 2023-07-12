import useInput from "../hooks/use-input";

const BasicForm = props => {
  const firstNameInput = useInput(value => value.trim().length > 0);
  const lastNameInput = useInput(value => value.trim().length > 0);
  const emaiInput = useInput(value => value.includes("@"));

  let formValid = false;

  if (
    firstNameInput.inputValid &&
    lastNameInput.inputValid &&
    emaiInput.inputValid
  ) {
    formValid = true;
  }

  const clearInput = () => {
    firstNameInput.reset();
    lastNameInput.reset();
    emaiInput.reset();
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    alert(
      JSON.stringify({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emaiInput.value,
      })
    );

    clearInput();
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
            onChange={firstNameInput.setInput}
            onBlur={firstNameInput.setTouched}
          />
          {firstNameInput.valid && (
            <p className="error-text">First name must not be empty</p>
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
            onChange={lastNameInput.setInput}
            onBlur={lastNameInput.setTouched}
          />
          {lastNameInput.valid && (
            <p className="error-text">Last name must not be empty</p>
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
          onChange={emaiInput.setInput}
          onBlur={emaiInput.setTouched}
        />
      </div>
      {emaiInput.valid && <p className="error-text">E-Mail must contain @</p>}

      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
