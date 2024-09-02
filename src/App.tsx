
import { useState } from 'react'
import './App.css'
import { DisplayPanel } from './components/DisplayPanel'
import { UtilitiesPanel } from './components/UtilitiesPanel'
import { NumberPanel } from './components/NumberPanel'
import { OperationsPanel } from './components/OperationsPanel'
function App() {
  const [output, setOutput] = useState<string>("0")
  const [memory, setMemory] = useState<string>("0")
  return (
   <main className='bg-zinc-950 grid grid-areas-layout grid-cols-layout grid-rows-layout h-dvh w-dvw p-4'>
      <DisplayPanel output={output} />
      <NumberPanel setOutput={setOutput} memory={memory} />
      <OperationsPanel output={output} setOutput={setOutput} memory={memory} setMemory={setMemory} />
      <UtilitiesPanel />
   </main>
  )
}

export default App
