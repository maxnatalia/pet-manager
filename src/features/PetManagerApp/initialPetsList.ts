import { Pet } from "./types";

export const initialPetsList: Pet[] = [
  {
    id: "1",
    petName: "Frida",
    breed: "Ara Severa",
    category: "parrot",
    gender: "female",
    description: "Opis Frida",
    dateOfBirth: "2017-09-01",
    events: [],
  },
  {
    id: "2",
    petName: "Rio",
    breed: "King Charles",
    category: "dog",
    gender: "male",
    description: "Opis Rio",
    dateOfBirth: "2020-11-05",
    events: [
      {
        id: "1",
        eventName: "wizyta",
        eventDate: "2024-02-01",
      },
      {
        id: "2",
        eventName: "wizyta22222",
        eventDate: "2024-03-21",
      },
    ],
  },
];
