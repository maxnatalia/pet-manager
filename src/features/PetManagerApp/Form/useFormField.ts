import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { PetCategory, isNotEmpty } from "../utils";
import usePetsContext from "../usePetsContext";
import useField from "./useField";

const useFormField = () => {
  const navigate = useNavigate();
  const { setPetsList, editableId, petsList, setEditableId, getPetById } =
    usePetsContext();

  const {
    value: petName,
    isValid: petNameIsValid,
    hasError: petNameHasError,
    valueChangeHandler: petNameChangedHandler,
    inputBlurHandler: petNameBlurHandler,
    setEnteredValue: petNameSetValue,
    setIsTouched: petNameSetIsTouched,
  } = useField(isNotEmpty);

  const {
    value: breed,
    isValid: breedIsValid,
    hasError: breedHasError,
    valueChangeHandler: breedChangedHandler,
    inputBlurHandler: breedBlurHandler,
    setEnteredValue: breedSetValue,
    setIsTouched: breedSetIsTouched,
  } = useField(isNotEmpty);

  const {
    value: category,
    valueChangeHandler: categoryChangedHandler,
    setEnteredValue: categorySetValue,
  } = useField(undefined, "unspecified");

  useEffect(() => {
    if (editableId) {
      const editablePet = getPetById(editableId);
      if (editablePet) {
        petNameSetValue(editablePet.petName);
        breedSetValue(editablePet.breed);
        categorySetValue(editablePet.category);
      }
    }
  }, [
    editableId,
    getPetById,
    petNameSetValue,
    breedSetValue,
    categorySetValue,
  ]);

  const formIsValid = petNameIsValid && breedIsValid;

  const addOrUpdatePet = () => {
    const updatedPetList = editableId
      ? petsList.map(item =>
          item.id === editableId
            ? {
                id: editableId,
                petName,
                breed,
                category: category as PetCategory,
              }
            : item
        )
      : [
          ...petsList,
          { id: nanoid(), petName, breed, category: category as PetCategory },
        ];

    setPetsList(updatedPetList);
    setEditableId("");
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      petNameSetIsTouched(true);
      breedSetIsTouched(true);
      return;
    }

    console.log(petsList);
    addOrUpdatePet();
    navigate("/pets");
  };

  return {
    onFormSubmit,
    petNameBlurHandler,
    petNameHasError,
    petNameChangedHandler,
    petName,
    breed,
    breedBlurHandler,
    breedChangedHandler,
    breedHasError,
    category,
    categoryChangedHandler,
  };
};

export default useFormField;
