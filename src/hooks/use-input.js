import { useReducer } from "react";

const initialInputState = { input: "", inputTouched: false };

const inputReducer = (state, action) => {
	if (action.type === "INPUT") {
		return {
			input: action.value,
			inputTouched: state.inputTouched,
		};
	} else if (action.type === "TOUCHED") {
		return {
			input: state.input,
			inputTouched: true,
		};
	} else if (action.type === "RESET") {
		return initialInputState;
	}

	return initialInputState;
};

const useInput = (validateValue) => {
	const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

	let inputIsValid = validateValue(inputState.input);

	const valid = !inputIsValid && inputState.inputTouched;

	const onSetInput = (event) => {
		dispatch({ type: "INPUT", value: event.target.value });
	};

	const onSetInputTouched = () => {
		dispatch({ type: "TOUCHED" });
	};

	const reset = () => {
		dispatch({ type: "RESET" });
	};

	return {
		value: inputState.input,
		inputValid: inputIsValid,
		valid: valid,
		reset: reset,
		setInput: onSetInput,
		setTouched: onSetInputTouched,
	};
};

export default useInput;
