import { Pet } from "./types";

export const initialPetsList: Pet[] = [
  {
    id: "1Frida",
    petName: "Frida",
    breed: "Ara Severa",
    category: "parrot",
    gender: "female",
    description: "Opis Frida",
    dateOfBirth: "2017-09-01",
    events: [],
  },
  {
    id: "2Rio",
    petName: "Rio",
    breed: "King Charles",
    category: "dog",
    gender: "male",
    description: "Opis Rio",
    dateOfBirth: "2020-11-05",
    events: [
      {
        eventId: "1RioEvent",
        eventName: "wizyta",
        eventDate: "2024-01-29",
        eventCategory: "groomer",
      },
      {
        eventId: "2RioEvent",
        eventName: "wizyta22222",
        eventDate: "2024-01-30",
        eventCategory: "vet",
      },
    ],
  },
  {
    id: "3Lily",
    petName: "Lily",
    breed: "Rabbit",
    category: "rabbit",
    gender: "female",
    description: "Opis Lily",
    dateOfBirth: "2023-07-25",
    events: [
      {
        eventId: "1LilyEvent",
        eventName: "wizyta groomer",
        eventDate: "2024-01-29",
        eventCategory: "show",
      },
      {
        eventId: "2LilyEvent",
        eventName: "wizyta wet",
        eventDate: "2024-05-06",
        eventCategory: "training",
      },
    ],
  },
];
