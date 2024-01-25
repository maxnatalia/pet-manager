import { FormEvent, useEffect } from "react";
import useField from "../Form/useField";
import usePetsContext from "../../usePetsContext";
import { isNotEmpty } from "../../utils";
import { nanoid } from "nanoid";

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
  } = useField({ validateValue: isNotEmpty });

  useEffect(() => {
    if (petId) {
      const editablePet = petsList.find(pet => pet.id === petId);
      if (editablePet) {
        const editableEvent = editablePet.events.find(
          event => event.id === editableEventId
        );
        if (editableEvent) {
          eventNameSetValue(editableEvent.eventName);
          eventDateSetValue(editableEvent.eventDate);
        }
      }
    }
  }, [petId, petsList, eventNameSetValue, eventDateSetValue, editableEventId]);

  const formIsValid = eventNameIsValid && eventDateIsValid;

  const addPetEvent = () => {
    const updatedEvent = petsList.map(pet =>
      pet.id === petId
        ? {
            ...pet,
            events: [
              ...pet.events,
              {
                id: nanoid(),
                eventName,
                eventDate,
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
              event.id === editableEventId
                ? {
                    id: editableEventId,
                    eventName,
                    eventDate,
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

    console.log(petsList);
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
  };
};

export default useFormEvent;
