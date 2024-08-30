
import './App.css'
import {NumberPanel} from "./components/NumberPanel"
import { OperationsPanel } from './components/OperationsPanel'
import { UtilitiesPanel } from './components/UtilitiesPanel'
function App() {

  return (
   <main className='grid grid-areas-layout grid-cols-layout grid-rows-layout h-full'>
      <p className='text-3xl grid-in-output'>number output</p>
      <NumberPanel />
      <OperationsPanel />
      <UtilitiesPanel />
   </main>
  )
}

export default App
