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
    <div className="grid w-full max-w-xs sm:max-w-[200px] max-h-[600px] h-fit">
      <main className="grid grid-cols-[1fr_minmax(0px,1280px)_1fr] lg:outline lg:outline-1 lg:outline-white bg-zinc-600 content-end sm:content-center">
        <section className="grid grid-cols-12 col-start-2  content-start">
          <DisplayPanel {...displayPanelProps} />
          <div className="col-span-12 grid grid-cols-4 grid-flow-row">
            <div className="col-span-3 grid grid-cols-1">

          <UtilitiesPanel {...utilitiesPanelProps} />
          <NumberPanel {...numberPanelProps} />
            </div>
          <OperationsPanel {...operationsPanelProps} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
