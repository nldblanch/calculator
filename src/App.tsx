import { useEffect, useState } from "react";
import "./App.css";
import { DisplayPanel } from "./components/DisplayPanel";
import { UtilitiesPanel } from "./components/UtilitiesPanel";
import { NumberPanel } from "./components/NumberPanel";
import { OperationsPanel } from "./components/OperationsPanel";
type MemoryStateType = {
  num1: string;
  num2: string;
  index: number;
};
function App() {
  const [output, setOutput] = useState<string>("0");
  const [memory, setMemory] = useState<MemoryStateType>({
    num1: "0",
    num2: "NaN",
    index: 1,
  });
  const [overwrite, setOverwrite] = useState<boolean>(true);
  const [operationActive, setOperationActive] = useState<boolean>(false);
  useEffect(() => {
    setOutput((prev) => prev + ".0");
    const organiseInput = (index: number) => {
      switch (index) {
        case 1:
          setOutput(() => {
            return String(memory.num1);
          });
          break;
        case 2:
          setOutput(() => {
            return String(memory.num2);
          });
          break;
      }
    };

    if (operationActive && memory.num2 === "0") {
      organiseInput(2);
    } else if (operationActive && memory.num2 === "NaN") {
      organiseInput(1);
    } else if (operationActive) {
      organiseInput(2);
    } else {
      organiseInput(1);
    }
  }, [memory, overwrite]);

  const displayPanelProps = {
    output,
  };
  const numberPanelProps = {
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
    operationActive,
  };
  const utilitiesPanelProps = {
    setOutput,
    setMemory,
    setOverwrite,
    setOperationActive,
    memory,
  };

  return (
    <main className="w-dvw h-dvh max-h-screen flex flex-col lg:border-solid lg:border-2 lg:border-white lg:overflow-hidden sm:max-w-md sm:max-h-[80dvh]">
      <section className="grow w-full">
        <DisplayPanel {...displayPanelProps} />
      </section>
      <div className="flex flex-row">
        <div className="w-3/4 h-fit">
          <UtilitiesPanel {...utilitiesPanelProps} />
          <NumberPanel {...numberPanelProps} />
        </div>
        <OperationsPanel {...operationsPanelProps} />
      </div>
    </main>
  );
}

export default App;
