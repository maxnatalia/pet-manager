import { createContext, useState } from "react";
import { initialPetsList } from "./initialPetsList";
import { EventType, Pet } from "./types";

type PetsContextType = {
  petsList: Pet[];
  setPetsList: React.Dispatch<React.SetStateAction<Pet[]>>;
  editableId: string;
  setEditableId: React.Dispatch<React.SetStateAction<string>>;
  editableEventId: string;
  setEditableEventId: React.Dispatch<React.SetStateAction<string>>;
  getPetById: (selectedPetId: Pet["id"] | undefined) => Pet | undefined;
  handleRemovePet: (id: Pet["id"]) => void;
  handleEditPet: (id: Pet["id"]) => void;
  handleEditPetEvent: (petId: Pet["id"], eventId: EventType["id"]) => void;
};

type PetsProviderProps = {
  children: React.ReactNode;
};

export const PetsContext = createContext<PetsContextType | null>(null);

export const PetsProvider = ({ children }: PetsProviderProps) => {
  const [petsList, setPetsList] = useState<Pet[]>(initialPetsList);
  const [editableId, setEditableId] = useState("");
  const [editableEventId, setEditableEventId] = useState("");

  const getPetById = (selectedPetId: Pet["id"] | undefined) =>
    petsList.find(pet => pet.id === selectedPetId);

  const handleRemovePet = (id: Pet["id"]) =>
    setPetsList(prevList => prevList.filter(pet => pet.id !== id));

  const handleEditPet = (id: Pet["id"]) => {
    petsList.find(editablePet => editablePet.id === id);
    setEditableId(id);
  };

  const handleEditPetEvent = (petId: Pet["id"], eventId: EventType["id"]) => {
    const editableEvent = petsList
      .find(pet => pet.id === petId)
      ?.events.find(event => event.id === eventId);

    if (editableEvent) {
      setEditableEventId(eventId);
    }
  };

  return (
    <PetsContext.Provider
      value={{
        petsList,
        setPetsList,
        getPetById,
        handleRemovePet,
        handleEditPet,
        editableId,
        setEditableId,
        editableEventId,
        setEditableEventId,
        handleEditPetEvent,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
