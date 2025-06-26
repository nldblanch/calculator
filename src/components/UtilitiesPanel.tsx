import { useEffect } from "react";
import { useCalculator } from "./CalculatorContext";

export const UtilitiesPanel = (): React.JSX.Element => {
  const { setOutput, setMemory, setOverwrite, setOperationActive, memory } = useCalculator();

  const onKeyDown = (e: any) => {
    e.preventDefault();
    const utilitiesKeys = ["c", "%"];
    if (utilitiesKeys.includes(e.key)) {
      if (e.key === "c") clear();
      if (e.key === "%") divideBy100();
    }
  };
  const clear = () => {
    setOutput("0");
    setMemory({ num1: "0", num2: "NaN", index: 1 });
    setOverwrite(true);
    setOperationActive(false);
  };
  const divideBy100 = () => {
    const { num1, num2, index } = memory;
    if (index === 1) {
      setMemory((prev) => {
        return { ...prev, num1: String(Number(num1) / 100) };
      });
    } else {
      setMemory((prev) => {
        return { ...prev, num2: String(Number(num2) / 100) };
      });
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <section className="flex flex-row w-full gap-x-3 p-3 pb-0">
      <button
        className="bg-stone-400 active:bg-stone-300 rounded-full aspect-square text-black text-xl w-1/3"
        type="button"
        value={"C"}
        onClick={clear}
      >
        C
      </button>
      <button
        className="bg-stone-400 active:bg-stone-300 rounded-full aspect-square text-black text-xl w-1/3"
        type="button"
        value={"+/-"}
      >
        +/-
      </button>
      <button
        className="bg-stone-400 active:bg-stone-300 rounded-full aspect-square text-black text-xl w-1/3"
        type="button"
        value={"%"}
        onClick={divideBy100}
      >
        %
      </button>
    </section>
  );
};
