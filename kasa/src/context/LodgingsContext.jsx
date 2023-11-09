/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

// Import your lodgings data
import lodgingsData from "../data/logements.json";

// Define the context
const LodgingsContext = createContext();

// Create a custom hook to access the context
export const useLodgings = () => {
  const context = useContext(LodgingsContext);
  if (context === undefined) {
    throw new Error("useLodgings must be used within a LodgingsProvider");
  }
  return context;
};

// Create a provider component
export const LodgingsProvider = ({ children }) => {
  return (
    <LodgingsContext.Provider value={{ lodgings: lodgingsData }}>
      {children}
    </LodgingsContext.Provider>
  );
};

export default LodgingsProvider;
