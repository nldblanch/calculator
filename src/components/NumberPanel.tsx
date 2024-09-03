
type MemoryStateType = {
  num1: number;
  num2: number;
};

type SetPropsType = {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
  setMemory: React.Dispatch<React.SetStateAction<MemoryStateType>>;
  overwrite: boolean;
  operationActive: boolean;
  memory: MemoryStateType;
};

export const NumberPanel = ({
  overwrite,
  setOverwrite,
  setMemory,
  memory,
  operationActive
}: SetPropsType): React.JSX.Element => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const value = Number(target.value) || 0;
    setMemory((prev) => {
      if (operationActive && !memory.num2) return {...prev, num2: value}
      else if (operationActive && memory.num2) return { ...prev, num2: Number(String(prev.num2) + String(value)) }
      else if (overwrite) return { ...prev, num1: value }
      else return { ...prev, num1: Number(String(prev.num1) + String(value)) };
      });
      setOverwrite(false)
  };
  return (
    <section className="grid-in-numbers outline outline-1 grid grid-cols-3 grid-rows-4">
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl "
        type="button"
        value={7}
        onClick={handleClick}
      >
        7
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl "
        type="button"
        value={8}
        onClick={handleClick}
      >
        8
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl "
        type="button"
        value={9}
        onClick={handleClick}
      >
        9
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl "
        type="button"
        value={4}
        onClick={handleClick}
      >
        4
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl "
        type="button"
        value={5}
        onClick={handleClick}
      >
        5
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl "
        type="button"
        value={6}
        onClick={handleClick}
      >
        6
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl "
        type="button"
        value={1}
        onClick={handleClick}
      >
        1
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl"
        type="button"
        value={2}
        onClick={handleClick}
      >
        2
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl"
        type="button"
        value={3}
        onClick={handleClick}
      >
        3
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full col-span-2 aspect-2/1 text-white text-2xl"
        type="button"
        value={0}
        onClick={handleClick}
      >
        <p className="w-1/2">0</p>
      </button>
      <button
        className="bg-zinc-700 active:bg-zinc-600 m-1 rounded-full aspect-square text-white text-2xl flex justify-center"
        type="button"
        value={"."}
      >
        .
      </button>
    </section>
  );
};
