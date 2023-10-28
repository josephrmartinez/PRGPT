import { useState } from 'react'
import './App.css'
import Resource from './components/Resource'
import StyleRef from './components/StyleRef'
import TextAreaWithAutoInsert from './components/TextAreaWithAutoInsert'
import Task from './components/Task'

function App() {
  const [resources, setResources] = useState([])
  const [styleRefs, setStyleRefs] = useState([])

  
  function addResource(){
    setResources([...resources, <Resource key={resources.length} />])

  }

  function addStyleRef(){
    setStyleRefs([...styleRefs, <StyleRef key={styleRefs.length} />])
  }

  function checkForInvoke(){

  }

  return (
    <div className='h-full'>
      <div className='font-bold text-xl mb-10'>
        PRGPT
      </div>
      <div className='grid grid-cols-3 gap-2'>
        
        <div className='col-span-1 flex flex-col'>
          <div className='flex flex-col items-start mb-6'>
            <div className='text-md font-semibold tracking-wide mb-2'>GENERATE</div> 
            <Task />
          </div>

          <div className='flex flex-col items-start mb-6'>
            <div className='text-md font-semibold tracking-wide mb-2'>IN THIS STYLE</div>
            <textarea type='text' className='w-56 h-24 border rounded-md indent-2' placeholder='paste text'></textarea>
          </div>

          <div className='flex flex-col items-start mb-6'>
            <div className='mb-2 text-md font-semibold tracking-wide'>USE THESE RESOURCES</div>
            {resources}
            <button className="ml-2 py-2 text-sm  text-neutral-500 tracking-wide" onClick={addResource}> + add resource</button>
          </div>
        </div>

        <div className='col-span-2'>
          <button className=' shadow-md rounded-lg mx-auto mt-7 px-3 py-2 bg-green-700 active:bg-green-800 text-neutral-200 tracking-wider'>CREATE DRAFT</button>
        </div>
        

      </div>
        
    </div>
  )
}

export default App
