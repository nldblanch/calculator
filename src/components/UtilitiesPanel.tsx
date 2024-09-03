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
  output: string;
};

export const UtilitiesPanel = ({
  setOutput,
  setMemory,
  setOverwrite,
  setOperationActive,
  memory,
  output,
}: SetPropsType): React.JSX.Element => {
  return (
    <section className="grid-in-utilities outline outline-1 grid grid-flow-row grid-rows-1 grid-cols-3">
      <button
        className="bg-stone-400 active:bg-stone-300 m-1 rounded-full aspect-square text-black text-2xl"
        type="button"
        value={"C"}
        onClick={() => {
          setOutput("0");
          setMemory({ num1: "0", num2: "NaN", index: 1 });
          setOverwrite(true);
          setOperationActive(false);
        }}
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
        onClick={() => {
          if (output === String(memory.num1)) {
            setMemory((prev) => {
              return {...prev, num1: String(Number(memory.num1) / 100)}
            })
          } else {
            setMemory((prev) => {
              return {...prev, num2: String(Number(memory.num2) / 100)}
            })
          }
        }}
      >
        %
      </button>
    </section>
  );
};
