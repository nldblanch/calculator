import { CalculatorProvider } from "./components/CalculatorContext";
import "./App.css";
import { DisplayPanel } from "./components/DisplayPanel";
import { UtilitiesPanel } from "./components/UtilitiesPanel";
import { NumberPanel } from "./components/NumberPanel";
import { OperationsPanel } from "./components/OperationsPanel";

function App() {
  return (
    <CalculatorProvider>
      <main className="w-dvw h-dvh max-h-screen flex flex-col lg:border-solid lg:border-2 lg:border-white lg:overflow-hidden sm:max-w-md sm:max-h-[90dvh]">
        <section className="grow w-full">
          <DisplayPanel />
        </section>
        <div className="flex flex-row">
          <div className="w-3/4 h-fit">
            <UtilitiesPanel />
            <NumberPanel />
          </div>
          <OperationsPanel />
        </div>
      </main>
    </CalculatorProvider>
  );
}

export default App;
