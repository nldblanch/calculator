export const OperationsPanel = (): React.JSX.Element => {
    return (
      <section className="grid-in-operations outline outline-1 grid grid-flow-col grid-rows-5 grid-cols-1">
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"/"}>/</button>
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"*"}>x</button>
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"-"}>-</button>
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"+"}>+</button>
          <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"="}>=</button>
      </section>
  );
  };