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
  const handleOperationKeys = (key: string): void => {
    setOverwrite(true);
    setOperation(key);
    setMemory((prev) => {
      return { ...prev, index: 2 };
    });
  };

  const onKeyDown = (e: any) => {
    e.preventDefault();
    const operationKeys = ["*", "/", "+", "-"];
    if (e.key === "Enter" || e.key === "=") {
      handleEquals();
    } else if (operationKeys.includes(e.key)) {
      setOperationActive(true);
      handleOperationKeys(e.key);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOperationActive(true)
    const target = e.target as HTMLButtonElement;
    handleOperationKeys(target.value);
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
    <section className="w-1/4 flex flex-col justify-center flex-wrap py-3 pr-3">
      <div className="h-1/5 w-full block">
      <button
        className={
          "bg-orange-500 active:bg-orange-400 w-full rounded-full aspect-square text-xl transition-colors duration-300" +
          (operationActive && operation === "/"
            ? " bg-white text-orange-500"
            : " text-white")
        }
        type="button"
        value={"/"}
        onClick={handleClick}
      >
        /
      </button>
      </div>
      <div className="h-1/5 w-full block">
      <button
        className={
          "bg-orange-500 active:bg-orange-400 w-full rounded-full aspect-square text-xl transition-colors duration-300" +
          (operationActive && operation === "*"
            ? " bg-white text-orange-500"
            : " text-white ")
        }
        type="button"
        value={"*"}
        onClick={handleClick}
      >
        x
      </button>
      </div>
      <div className="h-1/5 w-full block">
      <button
        className={
          "bg-orange-500 active:bg-orange-400 w-full rounded-full aspect-square text-xl flex justify-center transition-colors duration-300" +
          (operationActive && operation === "-"
            ? " bg-white text-orange-500"
            : " text-white")
        }
        type="button"
        value={"-"}
        onClick={handleClick}
      >
        -
      </button>
      </div>
      <div className="h-1/5 w-full block">
      <button
        className={
          "bg-orange-500 active:bg-orange-400 w-full rounded-full aspect-square text-xl flex justify-center transition-colors duration-300" +
          (operationActive && operation === "+"
            ? " bg-white text-orange-500"
            : " text-white")
        }
        type="button"
        value={"+"}
        onClick={handleClick}
      >
        +
      </button>
      </div>
      <div className="h-1/5 w-full block">
      <button
        className="bg-orange-500 active:bg-orange-400 w-full rounded-full aspect-square text-white text-xl flex justify-center"
        type="button"
        value={"="}
        onClick={handleEquals}
      >
        =
      </button>
      </div>
    </section>
  );
};
