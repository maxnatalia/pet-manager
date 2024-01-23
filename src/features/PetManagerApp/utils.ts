import { PetCategory } from "./types";

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

export const petCategory = [
  { label: "❔ Unspecified", value: "unspecified" },
  { label: "🐶 Dog", value: "dog" },
  { label: "😺 Cat", value: "cat" },
  { label: "🐰 Rabbit", value: "rabbit" },
  { label: "🦜 Parrot", value: "parrot" },
  { label: "🐭 Rodent", value: "rodent" },
];

export const getAnimalEmoji = (animal: PetCategory) => {
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
