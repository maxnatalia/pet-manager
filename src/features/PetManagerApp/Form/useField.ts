import { useState, ChangeEvent } from "react";
import { ValidationFunction } from "../utils";

const useField = (validateValue?: ValidationFunction, initialValue = "") => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue ? validateValue(enteredValue) : true;
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    setIsTouched,
    setEnteredValue,
  };
};
export default useField;
