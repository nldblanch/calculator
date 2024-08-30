
import { useState } from 'react'
import './App.css'
import {NumberPanel} from "./components/NumberPanel"
import { OperationsPanel } from './components/OperationsPanel'
import { OutputPanel } from './components/OutputPanel'
import { UtilitiesPanel } from './components/UtilitiesPanel'
function App() {
  const [output, setOutput] = useState<string>("0")
  return (
   <main className='grid grid-areas-layout grid-cols-layout grid-rows-layout h-full'>
      <OutputPanel output={output} />
      <NumberPanel setFunction={setOutput} />
      <OperationsPanel />
      <UtilitiesPanel />
   </main>
  )
}

export default App
