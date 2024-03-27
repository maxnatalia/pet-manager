export type Pet = {
  id: string;
  petName: string;
  breed: string;
  category: PetCategory;
  gender: PetGender;
  description: string;
  dateOfBirth: string;
  events: EventType[];
};

export type PetCategory =
  | "unspecified"
  | "dog"
  | "cat"
  | "rabbit"
  | "parrot"
  | "rodent";

export type PetGender = "unspecified" | "male" | "female";

export type EventCategory =
  | "unspecified"
  | "vet"
  | "groomer"
  | "show"
  | "training";

export type EventType = {
  eventId: string;
  eventName: string;
  eventDate: string;
  eventCategory: EventCategory;
  eventPetName: string;
  eventPetId: string;
};

export type AllEvents = {
  petId: string;
  petName: string;
  petCategory: PetCategory;
} & EventType;

export type ValidationFunction = (value: string) => boolean;

export type CardDataEvent = {
  events: AllEvents[];
  countByCategory: { category: EventCategory; count: number }[];
  tabName: string;
};
