import { FormEvent, useEffect } from "react";
import useField from "../Form/useField";
import usePetsContext from "../../usePetsContext";
import { isDateOfEventValid, isNotEmpty } from "../../utils";
import { nanoid } from "nanoid";
import { EventCategory } from "../../types";

const useFormEvent = (petId: string | undefined) => {
  const { setPetsList, petsList, editableEventId, setEditableEventId } =
    usePetsContext();

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

  useEffect(() => {
    if (petId) {
      const editablePet = petsList.find(pet => pet.id === petId);
      if (editablePet) {
        const editableEvent = editablePet.events.find(
          event => event.eventId === editableEventId
        );
        if (editableEvent) {
          eventNameSetValue(editableEvent.eventName);
          eventDateSetValue(editableEvent.eventDate);
          eventCategorySetValue(editableEvent.eventCategory);
        }
      }
    }
  }, [
    petId,
    petsList,
    eventNameSetValue,
    eventDateSetValue,
    eventCategorySetValue,
    editableEventId,
  ]);

  const formIsValid = eventNameIsValid && eventDateIsValid;

  const addPetEvent = () => {
    const updatedEvent = petsList.map(pet =>
      pet.id === petId
        ? {
            ...pet,
            events: [
              ...pet.events,
              {
                eventId: nanoid(),
                eventName,
                eventDate,
                eventCategory: eventCategory as EventCategory,
              },
            ],
          }
        : pet
    );

    setPetsList(updatedEvent);
  };

  const updatePetEvent = () => {
    const updatedEvent = petsList.map(pet =>
      pet.id === petId
        ? {
            ...pet,
            events: pet.events.map(event =>
              event.eventId === editableEventId
                ? {
                    eventId: editableEventId,
                    eventName,
                    eventDate,
                    eventCategory: eventCategory as EventCategory,
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
    eventNameSetIsTouched(false);
    eventDateSetIsTouched(false);
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
  };
};

export default useFormEvent;
