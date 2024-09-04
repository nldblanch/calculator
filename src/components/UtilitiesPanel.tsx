import { useEffect } from "react";

type MemoryStateType = {
  num1: string;
  num2: string;
  index: number;
};
type SetPropsType = {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  setMemory: React.Dispatch<React.SetStateAction<MemoryStateType>>;
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
  setOperationActive: React.Dispatch<React.SetStateAction<boolean>>;
  memory: MemoryStateType;
};

export const UtilitiesPanel = ({
  setOutput,
  setMemory,
  setOverwrite,
  setOperationActive,
  memory,
}: SetPropsType): React.JSX.Element => {
  const onKeyDown = (e: any) => {
    e.preventDefault();
    const utilitiesKeys = ["c", "%"];
    if (utilitiesKeys.includes(e.key)) {
      if (e.key === "c") clear()
      if (e.key === "%") divideBy100()
    }
  };
  const clear = () => {
    setOutput("0");
    setMemory({ num1: "0", num2: "NaN", index: 1 });
    setOverwrite(true);
    setOperationActive(false);
  };
  const divideBy100 = () => {
    const {num1, num2, index} = memory
    if (index === 1) {
      setMemory((prev) => {
        return { ...prev, num1: String(Number(num1) / 100) };
      });
    } else {
      setMemory((prev) => {
        return { ...prev, num2: String(Number(num2) / 100) };
      });
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <section className="grid-in-utilities outline outline-1 grid grid-flow-row grid-rows-1 grid-cols-3">
      <button
        className="bg-stone-400 active:bg-stone-300 m-1 rounded-full aspect-square text-black text-2xl"
        type="button"
        value={"C"}
        onClick={clear}
      >
        C
      </button>
      <button
        className="bg-stone-400 active:bg-stone-300 m-1 rounded-full aspect-square text-black text-2xl"
        type="button"
        value={"+/-"}
      >
        +/-
      </button>
      <button
        className="bg-stone-400 active:bg-stone-300 m-1 rounded-full aspect-square text-black text-2xl"
        type="button"
        value={"%"}
        onClick={divideBy100}
      >
        %
      </button>
    </section>
  );
};
