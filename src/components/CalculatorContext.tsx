import React, { createContext, useContext, useState, useEffect } from "react";

export type MemoryStateType = {
  num1: string;
  num2: string | null;
  index: number;
};

interface CalculatorContextType {
  output: string;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  memory: MemoryStateType;
  setMemory: React.Dispatch<React.SetStateAction<MemoryStateType>>;
  overwrite: boolean;
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
  operationActive: boolean;
  setOperationActive: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [output, setOutput] = useState<string>("0");
  const [memory, setMemory] = useState<MemoryStateType>({
    num1: "0",
    num2: null,
    index: 1,
  });
  const [overwrite, setOverwrite] = useState<boolean>(true);
  const [operationActive, setOperationActive] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (error) return;
    const organiseInput = (index: number) => {
      switch (index) {
        case 1:
          setOutput(() => String(memory.num1));
          break;
        case 2:
          setOutput(() => String(memory.num2 ?? "0"));
          break;
      }
    };

    if (operationActive && (memory.num2 === null || memory.num2 === "0")) {
      organiseInput(2);
    } else if (operationActive && memory.num2 === null) {
      organiseInput(1);
    } else if (operationActive) {
      if (memory.index === 2) {
        overwrite ? organiseInput(1) : organiseInput(2);
      } else {
        overwrite ? organiseInput(2) : organiseInput(1);
      }
    } else {
      organiseInput(1);
    }
  }, [memory, operationActive, overwrite, error]);

  return (
    <CalculatorContext.Provider
      value={{
        output,
        setOutput,
        memory,
        setMemory,
        overwrite,
        setOverwrite,
        operationActive,
        setOperationActive,
        error,
        setError,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
}; 