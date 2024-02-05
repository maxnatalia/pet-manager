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

export type PetCategory =
  | "unspecified"
  | "dog"
  | "cat"
  | "rabbit"
  | "parrot"
  | "rodent";

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
};
export type AllEvents = {
  petId: string;
  petName: string;
  petCategory: PetCategory;
} & EventType;

export type ValidationFunction = (value: string) => boolean;
