import { useEffect } from "react";

type MemoryStateType = {
  num1: string;
  num2: string;
  index: number;
};

type SetPropsType = {
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
  setMemory: React.Dispatch<React.SetStateAction<MemoryStateType>>;
  overwrite: boolean;
  operationActive: boolean;
};

export const NumberPanel = ({
  overwrite,
  setOverwrite,
  setMemory,
  operationActive,
}: SetPropsType): React.JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value || "0";
    handleNumberKeys(value);
    setOverwrite(false);
  };

  const handleNumberKeys = (key: string): void => {
    setMemory((prev) => {
      if (operationActive && overwrite) {
        return { ...prev, num2: key };
      } else if (operationActive) {
        const num2 = prev.num2 + key;
        return { ...prev, num2 };
      } else if (overwrite) {
        return { ...prev, num1: key };
      } else {
        const num1 = prev.num1 + key;
        return { ...prev, num1 };
      }
    });
    setOverwrite(false);
  };
  const onKeyDown = (e: any) => {
    e.preventDefault();
    const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (numberKeys.includes(e.key)) handleNumberKeys(e.key);
    if (e.key === ".") setDecimal();
  };
  const setDecimal = () => {
    setOverwrite(false);
    setMemory((prev) => {
      if (prev.index === 1) {
        if (!prev.num1.includes(".")) {
          return { ...prev, num1: prev.num1 + "." };
        }
      } else {
        if (!prev.num2.includes(".")) {
          return { ...prev, num2: prev.num2 + "." };
        }
      }
      return { ...prev };
    });
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  return (
    <section className="w-full flex flex-wrap p-3">
      <div className="w-full flex flex-row gap-x-3 pb-3">
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={7}
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={8}
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={9}
          onClick={handleClick}
        >
          9
        </button>
      </div>
      <div className="w-full flex flex-row gap-x-3 pb-3">
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={4}
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={5}
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={6}
          onClick={handleClick}
        >
          6
        </button>
      </div>
      <div className="w-full flex flex-row gap-x-3 pb-3">
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={1}
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={2}
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl w-1/3"
          type="button"
          value={3}
          onClick={handleClick}
        >
          3
        </button>
      </div>
      <div className="w-full flex flex-row gap-x-3 pb-3">
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-2/1 text-white text-xl grow w-2/3"
          type="button"
          value={0}
          onClick={handleClick}
        >
          <p className="w-1/2">0</p>
        </button>
        <button
          className="bg-zinc-700 active:bg-zinc-600 rounded-full aspect-square text-white text-xl flex justify-center w-1/3"
          type="button"
          value={"."}
          onClick={setDecimal}
        >
          .
        </button>
      </div>
    </section>
  );
};
