type Output = {
    output: string
}
export const OutputPanel = ({output}:Output): React.JSX.Element => {    
    const displayValue = output.split('').map((number, index) => {        
      return (index % 3 === 0 && index > 1) ? "," + number : number
    }).join('')
    let style:string = "text-right absolute w-full bottom-0 right-0 font-extralight text-white pr-2 pb-4"
    if (output.length <= 6) style += " text-6xl"
    if (output.length === 7) style += " text-5xl"
    if (output.length === 8) style += " text-4xl"
    if (output.length === 9) style += " text-3xl"
    return (
      <section className="grid-in-output relative outline outline-1 grid grid-flow-col grid-rows-5 grid-cols-1">
          <p className={style}>{displayValue}</p>
      </section>
  );
};