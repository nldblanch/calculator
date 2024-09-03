import { useEffect, useState } from "react";
import "./App.css";
import { DisplayPanel } from "./components/DisplayPanel";
import { UtilitiesPanel } from "./components/UtilitiesPanel";
import { NumberPanel } from "./components/NumberPanel";
import { OperationsPanel } from "./components/OperationsPanel";
type MemoryStateType = {
  num1: number;
  num2: number;
};
function App() {
  const [output, setOutput] = useState<string>("0");
  const [memory, setMemory] = useState<MemoryStateType>({ num1: 0, num2: NaN });
  const [overwrite, setOverwrite] = useState<boolean>(true);
  const [operationActive, setOperationActive] = useState<boolean>(false);
  useEffect(() => {
    console.log(memory, operationActive);
    if (operationActive && memory.num2 === 0) {
      setOutput(String(memory.num2));      
    } else if (operationActive && !memory.num2) {
      setOutput(String(memory.num1));      
    } else if (operationActive) {
      setOutput(String(memory.num2));      
    } else {
      setOutput(String(memory.num1));      
    }
  }, [memory]);

  const displayPanelProps = {
    output,
  };
  const numberPanelProps = {
    setOutput,
    overwrite,
    setOverwrite,
    setMemory,
    operationActive,
  };
  const operationsPanelProps = {
    setOutput,
    memory,
    setMemory,
    setOverwrite,
    setOperationActive,
    operationActive
  };
  const utilitiesPanelProps = {
    setOutput,
    setMemory,
    setOverwrite,
    setOperationActive,
    memory,
    output
  };

  return (
    <main className="bg-zinc-950 grid grid-areas-layout grid-cols-layout grid-rows-layout grid-flow-row h-dvh w-dvw p-4 pb-8">
      <DisplayPanel {...displayPanelProps} />
      <NumberPanel {...numberPanelProps} />
      <OperationsPanel {...operationsPanelProps} />
      <UtilitiesPanel {...utilitiesPanelProps} />
    </main>
  );
}

export default App;
