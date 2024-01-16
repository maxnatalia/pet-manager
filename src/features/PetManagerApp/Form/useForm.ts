import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import usePetsContext from "../usePetsContext";

const initialState = {
  petName: "",
};

const useForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { setPetsList, petsList, getPetById, editableId, setEditableId } =
    usePetsContext();

  useEffect(() => {
    if (editableId) {
      const editablePet = getPetById(editableId);
      editablePet && setValues(editablePet);
    }
  }, [editableId, getPetById]);

  const isValidValue = (value: string) => value.trim() !== "";

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });

    hasError ? setHasError(false) : setIsTouched(true);
  };

  const handleInputBlur = () => {
    setHasError(!isValidValue(values.petName));
  };

  const updatePet = () => {
    if (editableId) {
      const updatedPet = petsList.map(item =>
        item.id === editableId
          ? {
              id: editableId,
              ...values,
            }
          : item
      );
      setPetsList(updatedPet);
      setEditableId("");
    }
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

    if (!isValidValue(values.petName)) return setHasError(true);

    editableId ? updatePet() : addPet();

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
