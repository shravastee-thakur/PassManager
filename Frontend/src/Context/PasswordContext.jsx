import { useContext } from "react";
import { createContext } from "react";

const PasswordContext = createContext();

export const usePasswordContext = () => useContext(PasswordContext);

export const PasswordProvider = ({ children }) => {
  return (
    <PasswordContext.Provider value={"This is context data"}>
      {children}
    </PasswordContext.Provider>
  );
};
