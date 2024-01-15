import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import usePetsContext from "../Pets/usePetsContext";

const initialState = {
  petName: "",
};

const useForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { setPetsList } = usePetsContext();

  const isValidValue = (value: string) => value.trim() !== "";

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });

    if (hasError) {
      setHasError(false);
    }
    setIsTouched(true);
  };

  const handleInputBlur = () => {
    setHasError(!isValidValue(values.petName));
  };

  const addPet = () => {
    const newPet = {
      id: nanoid(),
      petName: values.petName,
    };
    setPetsList(prevList => [...prevList, newPet]);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isValidValue(values.petName)) {
      setHasError(true);
      return;
    }
    addPet();
    setValues(initialState);
    navigate("/pets");
  };

  return {
    handleOnChange,
    onFormSubmit,
    values,
    handleInputBlur,
    hasError,
    isTouched,
  };
};

export default useForm;
