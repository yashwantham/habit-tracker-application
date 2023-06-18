import { v4 as uuid } from "uuid";

export const habits = [
  {
    _id: uuid(),
    name: "Meditate",
    repeat: "daily",
    goal: "1 time a day",
    timeoftheday: "morning",
    startdate: "today",
  },
  {
    _id: uuid(),
    name: "Set a To-Do List",
    repeat: "daily",
    goal: "1 time a day",
    timeoftheday: "morning",
    startdate: "today",
  },
  {
    _id: uuid(),
    name: "Drink Water",
    repeat: "daily",
    goal: "12 times a day",
    timeoftheday: "anytime",
    startdate: "today",
  },
  {
    _id: uuid(),
    name: "Read Books",
    repeat: "daily",
    goal: "1 time a day",
    timeoftheday: "night",
    startdate: "tommorrow",
  },
  {
    _id: uuid(),
    name: "Running",
    repeat: "daily",
    goal: "1 time a day",
    timeoftheday: "evening",
    startdate: "today",
  },
];
