import { useState } from "react";
import { add, divide, multiply, subtract } from "../utils/basicOperations";
type MemoryStateType = {
  num1: number;
  num2: number;
};
type SetPropsType = {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  setMemory: React.Dispatch<React.SetStateAction<MemoryStateType>>;
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
  setOperationActive: React.Dispatch<React.SetStateAction<boolean>>;
  memory: MemoryStateType;
  operationActive: boolean;
};
export const OperationsPanel = ({
  setOutput,
  setMemory,
  setOverwrite,
  memory,
  setOperationActive,
  operationActive,
}: SetPropsType): React.JSX.Element => {
  const [operation, setOperation] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setOverwrite(true);
    setOperation(target.value);
  };
  const handleEquals = () => {
    setOverwrite(true);
    setOperationActive(false);
    const { num1, num2 } = memory;
    switch (operation) {
      case "+":
        setMemory((prev) => {
          return { ...prev, num1: add(num1, num2) };
        });
        break;
      case "-":
        setMemory((prev) => {
          return { ...prev, num1: subtract(num1, num2) };
        });
        break;
      case "/":
        if (num2 === 0) setOutput("Error");
        else {
          setMemory((prev) => {
            return { ...prev, num1: divide(num1, num2) };
          });
        }
        break;
      case "*":
        setMemory((prev) => {
          return { ...prev, num1: multiply(num1, num2) };
        });
        break;
    }
  };
  return (
    <section className="grid-in-operations outline outline-1 grid grid-flow-col grid-rows-5 grid-cols-1">
      <button
        className={"bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center transition-colors duration-300" + (operationActive && operation === "/" ? " bg-white text-orange-500" : "")}
        type="button"
        value={"/"}
        onClick={handleClick}
        onFocus={() => setOperationActive(true)}
      >
        /
      </button>
      <button
        className={"bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center transition-colors duration-300" + (operationActive && operation === "*" ? " bg-white text-orange-500" : "")}
        type="button"
        value={"*"}
        onClick={handleClick}
        onFocus={() => setOperationActive(true)}
      >
        x
      </button>
      <button
        className={"bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center transition-colors duration-300" + (operationActive && operation === "-" ? " bg-white text-orange-500" : "")}
        type="button"
        value={"-"}
        onClick={handleClick}
        onFocus={() => setOperationActive(true)}
      >
        -
      </button>
      <button
        className={"bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center transition-colors duration-300" + (operationActive && operation === "+" ? " bg-white text-orange-500" : "")}
        type="button"
        value={"+"}
        onClick={handleClick}
        onFocus={() => setOperationActive(true)}
      >
        +
      </button>
      <button
        className="bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center"
        type="button"
        value={"="}
        onClick={handleEquals}
      >
        =
      </button>
    </section>
  );
};
