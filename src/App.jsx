import { useState } from 'react'
import './App.css'
import Resource from './components/Resource'

function App() {
  const [resources, setResources] = useState([])
  
  function addResource(){
    setResources([...resources, <Resource key={resources.length} />])

  }

  return (
    <div className='h-full'>
      <div className='font-bold text-xl mb-10'>
        PRGPT
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col'>
          <div className='mb-8'>RESOURCES</div>

          {resources}

          <button className="border w-28 py-2 mx-auto text-sm rounded-full" onClick={addResource}> + resource</button>

          <div className='py-8'></div>

          

        </div>
        
        <div>
          <div className='mb-8'>TASK</div>
          <textarea className='h-96 w-full border'></textarea>
        </div>

      </div>
        
    </div>
  )
}

export default App
