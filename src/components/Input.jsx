
export default function Input({placeholder, type}){
    return (
        <input 
        className="w-full rounded-md px-3 py-2 text-slate-600 border-solid border-blue-300 border-2 focus:outline-none"
        placeholder={placeholder || ''} 
        type={type}
        /> 
    )
}