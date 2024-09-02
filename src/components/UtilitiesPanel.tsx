type SetPropsType = {
  setOutput: React.Dispatch<React.SetStateAction<string>>,
  setMemory: React.Dispatch<React.SetStateAction<string>>;
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UtilitiesPanel = ({setOutput, setMemory, setOverwrite}: SetPropsType): React.JSX.Element => {
  return (
    <section className="grid-in-utilities outline outline-1 grid grid-flow-row grid-rows-1 grid-cols-3">
      <button
        className="bg-stone-400 active:bg-stone-300 m-1 rounded-full aspect-square text-black text-2xl"
        type="button"
        value={"C"}
        onClick={() => {
          setOutput("0")
          setMemory("0")
          setOverwrite(true)
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
      >
        %
      </button>
    </section>
  );
};
