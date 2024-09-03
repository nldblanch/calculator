import { formatDisplay } from "../utils/displayFormatter";

type SetPropsType = {
  output: string;
};
export const DisplayPanel = ({ output }: SetPropsType): React.JSX.Element => {
  console.log(output, "output in display panel")
  const displayValue: string =
    output === "Error" ? output : formatDisplay(output);
  let style: string =
    "text-right absolute w-full bottom-0 right-0 font-extralight text-white pr-2 pb-4";
  if (output.length <= 6) style += " text-6xl";
  else if (output.length === 7) style += " text-5xl";
  else if (output.length === 8) style += " text-4xl";
  else if (output.length === 9) style += " text-3xl";
  else style += " text-2xl"
  return (
    <section className="grid-in-output relative">
      <p className={style}>{displayValue}</p>
    </section>
  );
};
