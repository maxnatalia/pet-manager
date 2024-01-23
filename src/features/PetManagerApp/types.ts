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

export type EventType = {
  id: string;
  eventName: string;
  eventDate: string;
};

export type ValidationFunction = (value: string) => boolean;
