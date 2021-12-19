import { createContext, useState } from "react";
export let DisplayAuth = createContext();
export function AuthProvider({ children }) {
  let [display, setDisplay] = useState("block");
  let [state, setState] = useState(false);
  return (
    <DisplayAuth.Provider value={{ display, setDisplay, state, setState }}>
      {children}
    </DisplayAuth.Provider>
  );
}
