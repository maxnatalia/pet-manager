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
        eventDate: "2024-03-20",
        eventCategory: "groomer",
        eventPetName: "Rio",
        eventPetId: "2Rio",
      },
      {
        eventId: "2RioEvent",
        eventName: "wizyta22222",
        eventDate: "2024-03-30",
        eventCategory: "vet",
        eventPetName: "Rio",
        eventPetId: "2Rio",
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
        eventDate: "2024-03-18",
        eventCategory: "show",
        eventPetName: "Lily",
        eventPetId: "3Lily",
      },
      {
        eventId: "2LilyEvent",
        eventName: "wizyta wet",
        eventDate: "2023-05-06",
        eventCategory: "training",
        eventPetName: "Lily",
        eventPetId: "3Lily",
      },
    ],
  },
];
