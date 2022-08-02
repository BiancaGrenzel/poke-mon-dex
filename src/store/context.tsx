import { useState, createContext, useContext } from "react";

// Context
export const DataContext = createContext({});

// Provider
interface IContext {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: IContext) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <DataContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Context Hook
interface IDataContext {
  isOpen: boolean;
  setIsOpen: (arg?: boolean) => void;
}

export const useDataContext = () => useContext(DataContext) as IDataContext;
