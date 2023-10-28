import CreatableSelect from 'react-select/creatable';

export default function Task(){


    const taskOptions = ["press release", "blog post", "event recap"]

const options = taskOptions.map(each => {
 return { value: each, label: each }
})

    return (
        <div className='w-56'>
            <CreatableSelect options={options} className='text-left' placeholder="select..." />
        </div>
        
    )
}