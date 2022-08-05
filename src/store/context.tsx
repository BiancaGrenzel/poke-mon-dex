import { useState, createContext, useContext } from "react";

// Context
export const DataContext = createContext({});

// Provider
interface IContext {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: IContext) => {
  const [oldOffsetHeight, setOldOffsetHeight] = useState(
    document.documentElement.offsetHeight
  );

  return (
    <DataContext.Provider
      value={{
        oldOffsetHeight,
        setOldOffsetHeight,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Context Hook
interface IDataContext {
  oldOffsetHeight: number;
  setOldOffsetHeight: (value: number) => void;
}

export const useDataContext = () => useContext(DataContext) as IDataContext;
