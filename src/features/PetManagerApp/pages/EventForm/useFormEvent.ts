import { FormEvent, useEffect } from "react";
import useField from "../Form/useField";
import usePetsContext from "../../usePetsContext";
import { isDateOfEventValid, isNotEmpty } from "../../utils";
import { nanoid } from "nanoid";
import { EventCategory } from "../../types";

const useFormEvent = () => {
  const {
    setPetsList,
    petsList,
    editableEventId,
    setEditableEventId,
    getEventById,
  } = usePetsContext();

  const {
    value: eventName,
    isValid: eventNameIsValid,
    hasError: eventNameHasError,
    valueChangeHandler: eventNameChangedHandler,
    inputBlurHandler: eventNameBlurHandler,
    setEnteredValue: eventNameSetValue,
    setIsTouched: eventNameSetIsTouched,
  } = useField({ validateValue: isNotEmpty });

  const {
    value: eventDate,
    isValid: eventDateIsValid,
    hasError: eventDateHasError,
    valueChangeHandler: eventDateChangedHandler,
    inputBlurHandler: eventDateBlurHandler,
    setEnteredValue: eventDateSetValue,
    setIsTouched: eventDateSetIsTouched,
  } = useField({ validateValue: isDateOfEventValid });

  const {
    value: eventCategory,
    valueChangeHandler: eventCategoryChangedHandler,
    setEnteredValue: eventCategorySetValue,
  } = useField({ initialValue: "unspecified" });

  const {
    value: eventPetName,
    isValid: eventPetNameIsValid,
    hasError: eventPetNameHasError,
    valueChangeHandler: eventPetNameChangedHandler,
    inputBlurHandler: eventPetNameBlurHandler,
    setEnteredValue: eventPetNameSetValue,
    setIsTouched: eventPetNameSetIsTouched,
  } = useField({ validateValue: isNotEmpty });

  useEffect(() => {
    if (editableEventId) {
      const editableEvent = getEventById(editableEventId);
      if (editableEvent) {
        eventNameSetValue(editableEvent.eventName);
        eventDateSetValue(editableEvent.eventDate);
        eventCategorySetValue(editableEvent.eventCategory);
        eventPetNameSetValue(editableEvent.eventPetName);
      }
    }
  }, [
    editableEventId,
    eventNameSetValue,
    eventDateSetValue,
    eventCategorySetValue,
    eventPetNameSetValue,
    getEventById,
  ]);

  const formIsValid =
    eventNameIsValid && eventDateIsValid && eventPetNameIsValid;

  const addPetEvent = () => {
    const petToUpdate = petsList.find(pet => pet.petName === eventPetName);

    if (petToUpdate) {
      const updatedEvent = petsList.map(pet => {
        if (pet.id === petToUpdate.id) {
          return {
            ...pet,
            events: [
              ...pet.events,
              {
                eventId: nanoid(),
                eventName,
                eventDate,
                eventCategory: eventCategory as EventCategory,
                eventPetName,
                eventPetId: pet.id,
              },
            ],
          };
        }
        return pet;
      });

      setPetsList(updatedEvent);
    } else {
      console.error("Nie można znaleźć zwierzaka.");
    }
  };

  const updatePetEvent = () => {
    const findPetToUpdate = petsList.find(pet => pet.petName === eventPetName);
    const updatedEvent = petsList.map(pet =>
      pet.id === findPetToUpdate?.id
        ? {
            ...pet,
            events: pet.events.map(event =>
              event.eventId === editableEventId
                ? {
                    eventId: editableEventId,
                    eventName,
                    eventDate,
                    eventCategory: eventCategory as EventCategory,
                    eventPetName,
                    eventPetId: pet.id,
                  }
                : event
            ),
          }
        : pet
    );

    setPetsList(updatedEvent);
    setEditableEventId("");
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      eventNameSetIsTouched(true);
      eventDateSetIsTouched(true);
      eventPetNameSetIsTouched(true);
      return;
    }

    if (editableEventId) {
      updatePetEvent();
      console.log("Zaktualizowano event");
    } else {
      addPetEvent();
      console.log("Dodano nowy event");
    }
    console.log("i tak sie wykonuje wszytsko");
    eventNameSetValue("");
    eventDateSetValue("");
    eventCategorySetValue("");
    eventPetNameSetValue("");
    eventNameSetIsTouched(false);
    eventDateSetIsTouched(false);
    eventPetNameSetIsTouched(false);
  };

  return {
    onFormSubmit,
    eventName,
    eventNameChangedHandler,
    eventNameHasError,
    eventNameBlurHandler,
    eventDate,
    eventDateHasError,
    eventDateChangedHandler,
    eventDateBlurHandler,
    eventCategory,
    eventCategoryChangedHandler,
    eventPetName,
    eventPetNameChangedHandler,
    eventPetNameBlurHandler,
    eventPetNameHasError,
  };
};

export default useFormEvent;
