import { useState } from 'react'
import './App.css'
import Resource from './components/Resource'
import StyleRef from './components/StyleRef'
import TextAreaWithAutoInsert from './components/TextAreaWithAutoInsert'

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
        
        
        <div>
          <div className='mb-8'>PERFORM THIS TASK</div>
          <TextAreaWithAutoInsert />
        </div>

        <div>
          <div className='mb-8'>IN THIS STYLE</div>
          {styleRefs}

          <button className="border w-28 py-2 mx-auto text-sm rounded-full" onClick={addStyleRef}> + style reference</button>

          <div className='py-8'></div>
        </div>

        <div className='flex flex-col'>
          <div className='mb-8'>USE THESE RESOURCES</div>

          {resources}

          <button className="border w-28 py-2 mx-auto text-sm rounded-full" onClick={addResource}> + resource</button>

          <div className='py-8'></div>

          

        </div>

      </div>
        
    </div>
  )
}

export default App
