export const UtilitiesPanel = (): React.JSX.Element => {
    return (
      <section className="grid-in-utilities outline outline-1 grid grid-flow-row grid-rows-1 grid-cols-3">
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"C"}>C</button>
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"+/-"}>+/-</button>
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"%"}>%</button>

      </section>
  );
  };