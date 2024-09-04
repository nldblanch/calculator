import { formatDisplay } from "../utils/displayFormatter";

type SetPropsType = {
  output: string;
};
export const DisplayPanel = ({ output }: SetPropsType): React.JSX.Element => {
  const displayValue: string =
    output === "Error" ? output : formatDisplay(output);
  let style: string =
    "text-right w-full font-extralight text-white pr-6 overflow-x-scroll";
  if (output.length <= 6) style += " text-6xl";
  else if (output.length === 7) style += " text-5xl";
  else if (output.length === 8) style += " text-4xl";
  else if (output.length === 9) style += " text-3xl";
  else style += " text-3xl"
  return (
    <section className="w-full h-full flex flex-col justify-end">
      <p className={style}>{displayValue}</p>
    </section>
  );
};
