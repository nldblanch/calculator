export const UtilitiesPanel = (): React.JSX.Element => {
  return (
    <section className="grid-in-utilities outline outline-1 grid grid-flow-row grid-rows-1 grid-cols-3">
      <button
        className="bg-stone-400 active:bg-stone-300 m-1 rounded-full aspect-square text-black text-2xl"
        type="button"
        value={"C"}
      >
        C
      </button>
      <button
        className="bg-stone-400 active:bg-stone-300 m-1 rounded-full aspect-square text-black text-2xl flex justify-center"
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
