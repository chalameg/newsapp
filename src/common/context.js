import {createContext} from "react";

export const AppContext = createContext({
  news: [],
  setNews: val => {},

  country: "",
  setCountry: val => {}
});