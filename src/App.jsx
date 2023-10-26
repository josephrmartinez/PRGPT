import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className='h-full'>
      <div className='font-bold text-xl mb-10'>
        PRGPT
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col'>
          <div className='mb-8'>RESOURCES</div>

          <input type="text" className="border" name="" id="" placeholder='resource:' />
          <textarea className='border' placeholder='paste text here'></textarea>
          <input type="text" className="border" name="" id="" placeholder='use for:' />

          <div className='py-8'></div>

          <input type="text" className="border" name="" id="" placeholder='resource:' />
          <textarea className='border' placeholder='paste text here'></textarea>
          <input type="text" className="border" name="" id="" placeholder='use for:' />

          <div className='py-8'></div>

          <input type="text" className="border" name="" id="" placeholder='resource:' />
          <textarea className='border' placeholder='paste text here'></textarea>
          <input type="text" className="border" name="" id="" placeholder='use for:' />

          <div className='py-8'></div>

          <input type="text" className="border" name="" id="" placeholder='resource:' />
          <textarea className='border' placeholder='paste text here'></textarea>
          <input type="text" className="border" name="" id="" placeholder='use for:' />

          <div className='py-8'></div>

          

        </div>
        
        <div>
          <div className='mb-8'>TASK</div>
          <textarea className='h-96 w-full border'></textarea>
        </div>

      </div>



      {/* <button className='border rounded-full py-2 px-4'>add resource</button> */}
        
    </div>
  )
}

export default App
