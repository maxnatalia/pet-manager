import {
  AllEvents,
  EventCategory,
  EventType,
  Pet,
  PetCategory,
  PetGender,
} from "./types";

export const isNotEmpty = (value: string): boolean =>
  value.trim() !== "" && value.trim().length >= 3;

export const isDateOfBirthValid = (dateOfBirth: string): boolean => {
  if (!isNotEmpty(dateOfBirth)) {
    return false;
  }
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  return birthDate <= today;
};

export const isDateOfEventValid = (dateOfEvent: string): boolean => {
  if (!isNotEmpty(dateOfEvent)) {
    return false;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(dateOfEvent);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate >= today;
};

export const petGender = ["unspecified", "male", "female"];
export const petCategories = [
  "dog",
  "cat",
  "rabbit",
  "parrot",
  "rodent",
  "unspecified",
];

export const eventCategories = [
  "vet",
  "groomer",
  "show",
  "training",
  "unspecified",
];

export const mapEventsForCard = (events: AllEvents[]) =>
  events.map(event => ({
    ...event,
    id: event.eventId,
    navPetId: event.petId,
    cardTitle: `${getEventEmoji(event.eventCategory)} ${event.eventCategory}`,
    cardTab: `${getPetEmoji(event.petCategory)} ${event.petName}`,
    cardContent: event.eventDate,
  }));

export const mapPetsForCard = (pets: Pet[]) =>
  pets.map(pet => ({
    ...pet,
    id: pet.id,
    navPetId: pet.id,
    cardTitle: `${getPetEmoji(pet.category)} ${pet.breed}`,
    cardTab: `${getPetEmoji(pet.category)} ${pet.petName}`,
    cardContent: pet.gender,
  }));

export const petCategoryOptions = [
  { label: "❔ Unspecified", value: "unspecified" },
  { label: "🐶 Dog", value: "dog" },
  { label: "😺 Cat", value: "cat" },
  { label: "🐰 Rabbit", value: "rabbit" },
  { label: "🦜 Parrot", value: "parrot" },
  { label: "🐭 Rodent", value: "rodent" },
];

export const getPetEmoji = (animal: PetCategory) => {
  switch (animal) {
    case "dog":
      return "🐶";
    case "cat":
      return "😺";
    case "rabbit":
      return "🐰";
    case "parrot":
      return "🦜";
    case "rodent":
      return "🐭";
    default:
      return "❔";
  }
};

export const getGenderEmoji = (gender: PetGender) => {
  switch (gender) {
    case "unspecified":
      return "❔";
    case "male":
      return "♂️";
    case "female":
      return "♀️";
    default:
      return "❔";
  }
};

export const eventCategoryOptions = [
  { label: "❔ Unspecified", value: "unspecified" },
  { label: "🥼 Vet", value: "vet" },
  { label: "🛁 Groomer", value: "groomer" },
  { label: "🥇 Show", value: "show" },
  { label: "🎓 Training", value: "training" },
];

export const eventPetOptions = (petsList: Pet[]) => {
  return petsList.map(pet => ({
    label: `${getPetEmoji(pet.category)} - ${pet.petName}`,
    value: pet.petName,
    id: pet.id,
  }));
};

export const findEventById = (
  petsList: Pet[],
  eventId: string
): EventType | null => {
  for (const pet of petsList) {
    const foundEvent = pet.events.find(event => event.eventId === eventId);
    if (foundEvent) {
      return foundEvent;
    }
  }
  return null;
};

export const getEventEmoji = (event: EventCategory) => {
  switch (event) {
    case "vet":
      return "🥼";
    case "groomer":
      return "🛁";
    case "show":
      return "🥇";
    case "training":
      return "🎓";
    default:
      return "❔";
  }
};

export const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const countPetsByCategory = (category: PetCategory, list: Pet[]) =>
  list.filter(pet => pet.category === category).length;

export const isDateEventExpired = (date: string): string => {
  const currentDate = new Date();
  const eventDate = new Date(date);

  if (eventDate < currentDate) {
    return "Po realizacji";
  } else {
    return "Przed realizacją";
  }
};
