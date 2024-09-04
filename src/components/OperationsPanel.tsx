import { useEffect, useState } from "react";
import { add, divide, multiply, subtract } from "../utils/basicOperations";
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
  const handleOperationKeys = (key: string):void => {
    setOverwrite(true);
    setOperation(key);
    setMemory((prev) => {
      return { ...prev, index: 2 };
    });
  };

  const onKeyDown = (e: any) => {
    setOperationActive(true)
    e.preventDefault();
    const operationKeys = ["*", "/", "+", "-"];
    if (e.key === "Enter" || e.key === "=") handleEquals()
    else if (operationKeys.includes(e.key)) handleOperationKeys(e.key);
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    handleOperationKeys(target.value)
  };
  const handleEquals = () => {
    setOverwrite(true);
    setOperationActive(false);
    const { num1, num2 } = memory;
    switch (operation) {
      case "+":
        setMemory((prev) => {
          if (memory.num2 === "NaN") return { ...prev };
          return {
            ...prev,
            num1: String(add(Number(num1), Number(num2))),
            index: 1,
          };
        });
        break;
      case "-":
        setMemory((prev) => {
          if (memory.num2 === "NaN") return { ...prev };
          return {
            ...prev,
            num1: String(subtract(Number(num1), Number(num2))),
            index: 1,
          };
        });
        break;
      case "/":
        if (num2 === "0") setOutput("Error");
        else {
          setMemory((prev) => {
            if (memory.num2 === "NaN") return { ...prev };
            return {
              ...prev,
              num1: String(divide(Number(num1), Number(num2))),
              index: 1,
            };
          });
        }
        break;
      case "*":
        setMemory((prev) => {
          if (memory.num2 === "NaN") return { ...prev };
          return {
            ...prev,
            num1: String(multiply(Number(num1), Number(num2))),
            index: 1,
          };
        });
        break;
    }
  };
  return (
    <section className="grid-in-operations outline outline-1 grid grid-flow-col grid-rows-5 grid-cols-1">
      <button
        className={
          "bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-2xl flex justify-center transition-colors duration-300" +
          (operationActive && operation === "/"
            ? " bg-white text-orange-500"
            : " text-white")
        }
        type="button"
        value={"/"}
        onClick={handleClick}
        onFocus={() => setOperationActive(true)}
      >
        /
      </button>
      <button
        className={
          "bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-2xl flex justify-center transition-colors duration-300" +
          (operationActive && operation === "*"
            ? " bg-white text-orange-500"
            : " text-white ")
        }
        type="button"
        value={"*"}
        onClick={handleClick}
        onFocus={() => setOperationActive(true)}
      >
        x
      </button>
      <button
        className={
          "bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-2xl flex justify-center transition-colors duration-300" +
          (operationActive && operation === "-"
            ? " bg-white text-orange-500"
            : " text-white")
        }
        type="button"
        value={"-"}
        onClick={handleClick}
        onFocus={() => setOperationActive(true)}
      >
        -
      </button>
      <button
        className={
          "bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-2xl flex justify-center transition-colors duration-300" +
          (operationActive && operation === "+"
            ? " bg-white text-orange-500"
            : " text-white")
        }
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
