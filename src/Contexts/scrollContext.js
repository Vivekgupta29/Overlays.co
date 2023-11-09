import { createContext, useContext } from "react";

export const ScrollContext = createContext({
  scrolled: 0,
  ChangeScrolledValue: (value) => {},
});

export const useScrollValue = () => {
  return useContext(ScrollContext);
};

export const ScrollContextProvider = ScrollContext.Provider;

