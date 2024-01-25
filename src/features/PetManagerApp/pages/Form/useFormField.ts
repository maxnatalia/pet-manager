import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { isDateOfBirthValid, isNotEmpty } from "../../utils";
import { PetCategory } from "../../types";
import usePetsContext from "../../usePetsContext";
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
  } = useField({ validateValue: isNotEmpty });

  const {
    value: breed,
    isValid: breedIsValid,
    hasError: breedHasError,
    valueChangeHandler: breedChangedHandler,
    inputBlurHandler: breedBlurHandler,
    setEnteredValue: breedSetValue,
    setIsTouched: breedSetIsTouched,
  } = useField({ validateValue: isNotEmpty });

  const {
    value: dateOfBirth,
    isValid: dateOfBirthIsValid,
    hasError: dateOfBirthHasError,
    valueChangeHandler: dateOfBirthChangedHandler,
    inputBlurHandler: dateOfBirthBlurHandler,
    setEnteredValue: dateOfBirthSetValue,
    setIsTouched: dateOfBirthSetIsTouched,
  } = useField({ validateValue: isDateOfBirthValid });

  const {
    value: category,
    valueChangeHandler: categoryChangedHandler,
    setEnteredValue: categorySetValue,
  } = useField({ initialValue: "unspecified" });

  const {
    value: gender,
    valueChangeHandler: genderChangedHandler,
    setEnteredValue: genderSetValue,
  } = useField({ initialValue: "unspecified" });

  const {
    value: description,
    valueChangeHandler: descriptionChangedHandler,
    setEnteredValue: descriptionSetValue,
  } = useField();

  useEffect(() => {
    if (editableId) {
      const editablePet = getPetById(editableId);
      if (editablePet) {
        petNameSetValue(editablePet.petName);
        breedSetValue(editablePet.breed);
        categorySetValue(editablePet.category);
        genderSetValue(editablePet.gender);
        descriptionSetValue(editablePet.description);
        dateOfBirthSetValue(editablePet.dateOfBirth);
      }
    }
  }, [
    editableId,
    navigate,
    getPetById,
    petNameSetValue,
    breedSetValue,
    categorySetValue,
    genderSetValue,
    descriptionSetValue,
    dateOfBirthSetValue,
  ]);

  const formIsValid = petNameIsValid && breedIsValid && dateOfBirthIsValid;

  const addOrUpdatePet = () => {
    const updatedPetList = editableId
      ? petsList.map(item =>
          item.id === editableId
            ? {
                ...item,
                id: editableId,
                petName,
                breed,
                category: category as PetCategory,
                gender,
                description,
                dateOfBirth,
              }
            : item
        )
      : [
          ...petsList,
          {
            id: nanoid(),
            petName,
            breed,
            category: category as PetCategory,
            gender,
            description,
            dateOfBirth,
            events: [],
          },
        ];

    setPetsList(updatedPetList);
    setEditableId("");
  };

  const handleCancelForm = () => {
    navigate("/");
    setEditableId("");
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      petNameSetIsTouched(true);
      breedSetIsTouched(true);
      dateOfBirthSetIsTouched(true);
      return;
    }
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
    gender,
    genderChangedHandler,
    description,
    descriptionChangedHandler,
    dateOfBirth,
    dateOfBirthBlurHandler,
    dateOfBirthChangedHandler,
    dateOfBirthHasError,
    handleCancelForm,
  };
};

export default useFormField;
