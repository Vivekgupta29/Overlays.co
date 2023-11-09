import { createContext, useContext } from "react";

export const IsNavOpenContext = createContext({
  IsNavOpen: false,
  ChangeNavIsOpen: () => {},
});

export const useIsNavOpen = () => {
  return useContext(IsNavOpenContext);
};

export const IsNavOpenProvider = IsNavOpenContext.Provider;
