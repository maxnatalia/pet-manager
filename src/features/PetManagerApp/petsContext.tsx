import { createContext, useState } from "react";
import { initialPetsList } from "./initialPetsList";
import { AllEvents, EventCategory, EventType, Pet, PetCategory } from "./types";
import { eventCategories, petCategories } from "./utils";

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
  handleEditPetEvent: (petId: Pet["id"], eventId: EventType["eventId"]) => void;
  allEvents: AllEvents[];
  todayEvents: AllEvents[];
  archiveEvents: AllEvents[];
  futureEvents: AllEvents[];
  countPetsByCategory: { category: PetCategory; count: number }[];
  totalEvents: number;
  countEventsByCategory: { category: EventCategory; count: number }[];
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

  const handleEditPetEvent = (
    petId: Pet["id"],
    eventId: EventType["eventId"]
  ) => {
    const editableEvent = petsList
      .find(pet => pet.id === petId)
      ?.events.find(event => event.eventId === eventId);

    if (editableEvent) {
      setEditableEventId(eventId);
    }
  };

  const countPetsByCategory = petCategories.map(category => ({
    category: category as PetCategory,
    count: petsList.filter(pet => pet.category === category).length,
  }));

  const allEvents = petsList.flatMap(pet =>
    pet.events.map(event => ({
      ...event,
      petId: pet.id,
      petName: pet.petName,
      petCategory: pet.category,
    }))
  );

  const totalEvents = petsList.reduce(
    (totalEvents, pet) => totalEvents + pet.events.length,
    0
  );

  const countEventsByCategory = eventCategories.map(category => ({
    category: category as EventCategory,
    count: allEvents.filter(event => event.eventCategory === category).length,
  }));

  const todayEvents = allEvents.filter(event => {
    const today = new Date().toISOString().split("T")[0];
    return event.eventDate === today;
  });

  const createArchiveEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const pastEvents = allEvents.filter(event => {
      const eventDate = new Date(event.eventDate);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate < today;
    });

    return pastEvents;
  };

  const archiveEvents = createArchiveEvents();

  const createFutureEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const futureEvents = allEvents.filter(event => {
      const eventDate = new Date(event.eventDate);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    });

    return futureEvents;
  };

  const futureEvents = createFutureEvents();

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
        allEvents,
        todayEvents,
        archiveEvents,
        futureEvents,
        countPetsByCategory,
        totalEvents,
        countEventsByCategory,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
