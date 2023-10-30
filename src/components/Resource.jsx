export default function Resource(){

    return (
        <div className="w-56 mb-6 border-b-4">
            <input type="text" className="border rounded-md h-10 indent-2 w-56 mb-3" name="resource-name" id="" placeholder='resource name' />
            <textarea className='border rounded-md h-24 indent-2 w-56 mb-1' name="resource-text" placeholder='paste text'></textarea>
            <input type="text" className="border rounded-md h-10 indent-2 w-56 mb-2" name="reesource-use" id="" placeholder='use for' />
        </div>
        
    )
}