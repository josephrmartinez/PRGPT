import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

export default function StyleSelect(){

    const options = [{ value: "this", label: "this" }, { value: "that", label: "that" }, { value: "new", label: "new" }]
    return (
        <>
        <Select 
        placeholder="select stored style or create new"
        options={options}/>
    
        <textarea 
            type='text' 
            className='w-56 h-24 border rounded-md indent-2' 
            placeholder='paste text' 
            value={styleRef} 
            onChange={handleStyleInputChange}
        ></textarea>

        </>

        
    )
}