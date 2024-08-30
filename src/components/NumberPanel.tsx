export const NumberPanel = (): React.JSX.Element => {
  return (
    <section className="grid-in-numbers outline outline-1 grid grid-cols-3 grid-rows-4">
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={7}>7</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={8}>8</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={9}>9</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={4}>4</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={5}>5</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={6}>6</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={1}>1</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={2}>2</button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={3}>3</button>
        <button className="bg-slate-700 rounded-full text-white text-3xl col-span-2" type="button" value={0}><p className="w-1/2">0</p></button>
        <button className="bg-slate-700 rounded-full aspect-square text-white text-3xl" type="button" value={"."}>.</button>
    </section>
);
};
