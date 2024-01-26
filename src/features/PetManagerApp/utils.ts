import { EventCategory, PetCategory } from "./types";

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

export const eventCategoryOptions = [
  { label: "❔ Unspecified", value: "unspecified" },
  { label: "🥼 Vet", value: "vet" },
  { label: "🛁 Groomer", value: "groomer" },
  { label: "🥇 Show", value: "show" },
  { label: "🎓 Training", value: "training" },
];

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
