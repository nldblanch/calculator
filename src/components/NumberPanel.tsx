type SetPropsType = {
  setFunction: React.Dispatch<React.SetStateAction<string>>;
};

export const NumberPanel = ({
  setFunction,
}: SetPropsType): React.JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setFunction((prev) => {
      if (prev === "0") return target.value
      return prev + target.value
      
    });
  };
  return (
    <section className="grid-in-numbers outline outline-1 grid grid-cols-3 grid-rows-4">
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={7}
        onClick={handleClick}
      >
        7
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={8}
        onClick={handleClick}
      >
        8
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={9}
        onClick={handleClick}
      >
        9
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={4}
        onClick={handleClick}
      >
        4
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={5}
        onClick={handleClick}
      >
        5
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={6}
        onClick={handleClick}
      >
        6
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={1}
        onClick={handleClick}
      >
        1
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={2}
        onClick={handleClick}
      >
        2
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={3}
        onClick={handleClick}
      >
        3
      </button>
      <button
        className="bg-slate-700 rounded-full text-white text-3xl col-span-2"
        type="button"
        value={0}
      >
        <p className="w-1/2">0</p>
      </button>
      <button
        className="bg-slate-700 rounded-full aspect-square text-white text-3xl"
        type="button"
        value={"."}
      >
        .
      </button>
    </section>
  );
};
