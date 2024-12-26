import { useEffect } from "react"

export default function Button({placeholder, disable=false, onPress=null}){
   
    return (
        <button 
            className={`w-full text-white font-bold rounded-md px-3 py-2 border-solid ${disable ? 'bg-slate-400' :'bg-blue-950'}`}
            disabled={disable}
            onClick={onPress}
        >
            {placeholder}
        </button> 
    )
}