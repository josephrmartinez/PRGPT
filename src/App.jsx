import React, { useState } from 'react'
import './App.css'
import Resource from './components/Resource'
import SelectTask from './components/SelectTask'
import getStyleFromRef from './utils/aiprompt'
import StyleSelect from './components/StyleSelect'

function App() {
  const [resources, setResources] = useState([])
  const [styleRef, setStyleRef] = useState("")
  const [projectBrief, setProjectBrief] = useState("")
  const [response, setResponse] = useState("")
  const [selectedTask, setSelectedTask] = useState('')
  const [resourceData, setResourceData] = useState([]);


  
  function addResource() {
    setResourceData([...resourceData, { name: '', text: '', use: '' }]); // Add an empty resource object
    const resourceKey = resourceData.length; // Use the index as a key
    setResources([...resources, <Resource key={resourceKey} index={resourceKey} updateResourceData={updateResourceData} />]);
  }

  function updateResourceData(index, data) {
    // Update the corresponding resource object in the array
    setResourceData((prevResourceData) => {
      const updatedResourceData = [...prevResourceData];
      updatedResourceData[index] = data;
      return updatedResourceData;
    });
  }

  function handleStyleInputChange(e){
    const newValue = e.target.value;
    setStyleRef(newValue)
  }

  function handleTaskSelect(selectedValue){
    setSelectedTask(selectedValue)
  }

  async function handleSubmit(){

    const mappedResourceData = resourceData.map((item, index) => {
      const keyValuePairs = Object.entries(item).map(([key, value]) => `${key}: '${value}'`);
      return `(${index + 1}) {${keyValuePairs.join(', ')}}`;
    });
    
    const resourceDataString = mappedResourceData.join('\n');
    

    const stylePrompt = await getStyleFromRef(styleRef)
    // const stylePrompt = "style prompt"
    
    const prompt = 
      `TASK: Create a ${selectedTask.task}.
      PROJECT BRIEF: ${projectBrief} 
      
      Use the following STRUCTURE: 
      ${selectedTask.structure}
      ///

      Follow these guidelines for the STYLE of the ${selectedTask.task}:
      ${stylePrompt}
      ///

      Use the following RESOURCES:
      ${resourceDataString}
      ///
      
      Return your response as a complete ${selectedTask.task} 
      taking into account the STRUCTURE, STYLE, and RESOURCES noted above.`


    console.log("prompt:", prompt)
    // send prompt to gpt4

    // console.log("style ref:", styleRef)
    // console.log("selected task:", selectedTask)
    // console.log("resource data:", resourceData)

  }

  return (
    <div className='h-full'>
      <div className='font-bold text-xl mb-10'>
        PRGPT
      </div>
      <div className='grid grid-cols-4 gap-2'>
        
        <div className='col-span-1 flex flex-col'>
          <div className='flex flex-col items-start mb-6'>
            <div className='text-md font-semibold tracking-wide mb-2'>GENERATE</div> 
            <SelectTask onSelect={handleTaskSelect} />
          </div>

          <div className='flex flex-col items-start mb-6'>
            <div className='text-md font-semibold tracking-wide mb-2'>IN THIS STYLE</div>
            <textarea 
            type='text' 
            className='w-56 h-24 border rounded-md indent-2' 
            placeholder='paste text' 
            value={styleRef} 
            onChange={handleStyleInputChange}
            ></textarea>
          </div>

          
        </div>

        <div className='col-span-1 flex flex-col items-start mb-6'>
          <div className='mb-2 text-md font-semibold tracking-wide'>USE THESE RESOURCES</div>
          {resources}
          <button className="ml-2 py-2 text-sm  text-neutral-500 tracking-wide" onClick={addResource}> + add resource</button>
        </div>


        <div className='col-span-2 border rounded-md h-[32rem]'>
        {response ? 
        <div className='mt-7'>
          {response}
          </div> :
          <button 
            className='shadow-md rounded-lg mx-auto mt-24 px-3 py-2 font-semibold bg-green-700 active:bg-green-800 text-neutral-100 tracking-wider'
            onClick={handleSubmit}
            >
              CREATE DRAFT</button>
          }
        </div>
        
        

      </div>
        
    </div>
  )
}

export default App
