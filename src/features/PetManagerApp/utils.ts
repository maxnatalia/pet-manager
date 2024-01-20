export type ValidationFunction = (value: string) => boolean;
export type PetCategory =
  | "unspecified"
  | "dog"
  | "cat"
  | "rabbit"
  | "parrot"
  | "rodent";

export type EventType = {
  id: string;
  eventName: string;
  eventDate: string;
};

export const isNotEmpty = (value: string): boolean => value.trim() !== "";

export const isDateOfBirthValid = (dateOfBirth: string): boolean => {
  if (!isNotEmpty(dateOfBirth)) {
    return false;
  }
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  return birthDate <= today;
};

export const isAllowedCategory = (category: PetCategory) => {
  const allowedCategories: PetCategory[] = [
    "dog",
    "cat",
    "rabbit",
    "parrot",
    "rodent",
  ];
  return allowedCategories.includes(category);
};

export const petCategory = [
  { label: "❔ Unspecified", value: "unspecified" },
  { label: "🐶 Dog", value: "dog" },
  { label: "😺 Cat", value: "cat" },
  { label: "🐰 Rabbit", value: "rabbit" },
  { label: "🦜 Parrot", value: "parrot" },
  { label: "🐭 Rodent", value: "rodent" },
];

export const getAnimalEmoji = (animal: string) => {
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
