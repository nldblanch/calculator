type Output = {
    output: string
}
export const OutputPanel = ({output}:Output): React.JSX.Element => {    
    return (
      <section className="grid-in-output relative outline outline-1 grid grid-flow-col grid-rows-5 grid-cols-1">
          <p className="text-right absolute w-full bottom-0 right-0 text-7xl">{output}</p>
      </section>
  );
};