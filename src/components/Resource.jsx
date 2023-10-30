import { useState } from "react"

export default function Resource({ index, updateResourceData }){
    const [resource, setResource] = useState({resource: '', text: '', use_for: ''});

    function handleInputChange(e){
         const {name, value } = e.target;
         setResource({ ...resource, [name]: value});
         updateResourceData(index, {...resource, [name]: value});
    }

    return (
        <div className='w-56 mb-6 border-b-4'>
          <input
            type='text'
            className='border rounded-md h-10 indent-2 w-56 mb-3'
            name='resource'
            placeholder='resource name'
            value={resource.name}
            onChange={handleInputChange}
          />
          <textarea
            className='border rounded-md h-24 indent-2 w-56 mb-1'
            name='text'
            placeholder='paste text'
            value={resource.text}
            onChange={handleInputChange}
          />
          <input
            type='text'
            className='border rounded-md h-10 indent-2 w-56 mb-2'
            name='use_for'
            placeholder='use for'
            value={resource.use}
            onChange={handleInputChange}
          />
        </div>
      );
    }