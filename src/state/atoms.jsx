import { atom } from "recoil";

export const todosList = atom({
  key: "todosList",
  default: [],
});

export const todoFilter = atom({
  key: "todoFilter",
  default: false,
});
