import { createContext, useState } from "react";
import { initialPetsList } from "./initialPetsList";
import { EventType, PetCategory } from "./utils";

export type Pet = {
  id: string;
  petName: string;
  breed: string;
  category: PetCategory;
  gender: string;
  description: string;
  dateOfBirth: string;
  events: EventType[];
};

type PetsContextType = {
  petsList: Pet[];
  setPetsList: React.Dispatch<React.SetStateAction<Pet[]>>;
  editableId: string;
  setEditableId: React.Dispatch<React.SetStateAction<string>>;
  getPetById: (selectedPetId: string | undefined) => Pet | undefined;
  handleRemovePet: (id: string) => void;
  handleEditPet: (id: string) => void;
};

type PetsProviderProps = {
  children: React.ReactNode;
};

export const PetsContext = createContext<PetsContextType | null>(null);

export const PetsProvider = ({ children }: PetsProviderProps) => {
  const [petsList, setPetsList] = useState<Pet[]>(initialPetsList);
  const [editableId, setEditableId] = useState("");

  const getPetById = (selectedPetId: string | undefined) =>
    petsList.find(pet => pet.id === selectedPetId);

  const handleRemovePet = (id: string) =>
    setPetsList(prevList => prevList.filter(pet => pet.id !== id));

  const handleEditPet = (id: string) => {
    petsList.find(editablePet => editablePet.id === id);
    setEditableId(id);
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
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
