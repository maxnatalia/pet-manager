import React, { createContext, useState } from "react";
import { initialPetsList } from "./initialPetsList";

export type Pet = {
  id: string;
  petName: string;
};

type PetsContextType = {
  petsList: Pet[];
  setPetsList: React.Dispatch<React.SetStateAction<Pet[]>>;
  getPetById: (selectedPetId: string | undefined) => Pet | undefined;
  handleRemovePet: (id: string) => void;
};

type PetsProviderProps = {
  children: React.ReactNode;
};

export const PetsContext = createContext<PetsContextType | null>(null);

export const PetsProvider = ({ children }: PetsProviderProps) => {
  const [petsList, setPetsList] = useState<Pet[]>(initialPetsList);

  const getPetById = (selectedPetId: string | undefined) =>
    petsList.find(pet => pet.id === selectedPetId);

  const handleRemovePet = (id: string) =>
    setPetsList(prevList => prevList.filter(pet => pet.id !== id));

  return (
    <PetsContext.Provider
      value={{
        petsList,
        setPetsList,
        getPetById,
        handleRemovePet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
