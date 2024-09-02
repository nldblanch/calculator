import { useState } from "react";
import { add, divide, multiply, subtract } from "../utils/basicOperations";

type SetPropsType = {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  setMemory: React.Dispatch<React.SetStateAction<string>>;
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
  memory: string;
  output: string;
};
export const OperationsPanel = ({
  setOutput,
  setMemory,
  setOverwrite,
  memory,
  output,
}: SetPropsType): React.JSX.Element => {
  const [operation, setOperation] = useState<string>("");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setOverwrite(true)
    setOperation(target.value);
    setMemory(output);
  };
  const handleEquals = () => {
    setOverwrite(true)
    switch (operation) {
      case "+":
        setOutput(add(memory, output));
        break;
      case "-":
        setOutput(subtract(memory, output));
        break;
      case "/":
        if (output === "0") setOutput("Error");
        else setOutput(divide(memory, output));
        break;
      case "*":
        setOutput(multiply(memory, output));
        break;
    }
  };
  return (
    <section className="grid-in-operations outline outline-1 grid grid-flow-col grid-rows-5 grid-cols-1">
      <button
        className="bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center"
        type="button"
        value={"/"}
        onClick={handleClick}
        onFocus={() => console.log("focus")}
      >
        /
      </button>
      <button
        className="bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center"
        type="button"
        value={"*"}
        onClick={handleClick}
      >
        x
      </button>
      <button
        className="bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center"
        type="button"
        value={"-"}
        onClick={handleClick}
      >
        -
      </button>
      <button
        className="bg-orange-500 active:bg-orange-400 m-1 rounded-full aspect-square text-white text-2xl flex justify-center"
        type="button"
        value={"+"}
        onClick={handleClick}
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
