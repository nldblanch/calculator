import { useState } from "react";
import "./App.css";
import { DisplayPanel } from "./components/DisplayPanel";
import { UtilitiesPanel } from "./components/UtilitiesPanel";
import { NumberPanel } from "./components/NumberPanel";
import { OperationsPanel } from "./components/OperationsPanel";
function App() {
  const [output, setOutput] = useState<string>("0");
  const [memory, setMemory] = useState<string>("0");
  const [overwrite, setOverwrite] = useState<boolean>(true);

  const displayPanelProps = {
    output,
  };
  const numberPanelProps = {
    setOutput,
    memory,
    overwrite,
    setOverwrite,
  };
  const operationsPanelProps = {
    output,
    setOutput,
    memory,
    setMemory,
    setOverwrite,
  };
  const utilitiesPanelProps = {
    setOutput,
    setMemory,
    setOverwrite
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
