import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function AdressCard({address, selectedCard, setSelectedCard}){

    

    return (
        <div className="w-full flex flex-col bg-white border-2 md:px-10 md:py:12 px-3 py-4 border-slate-300 rounded-xl">
            <div className="w-full flex flex-row">
                <div className="w-full md:w-4/6 flex justify-start items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="h-16 w-16 text-blue-950 flex-shrink-0"/>
                    <div className="pl-4 flex flex-col overflow-hidden">
                        <p className="text-blue-950 font-bold text-xl break-words">{address.street}</p>
                        <p className="text-slate-800 break-words">{address.neighborhood}</p>
                        <p className="text-slate-800 break-words">{address.city}</p>
                        <p className="text-slate-800">{address.cep}</p>
                    </div>
                </div>
                <div className="w-1/5 md:w-2/6 flex justify-center md:justify-end items-center flex-shrink-0">
                    <button onClick={()=>setSelectedCard(address)} className="h-14 w-14 flex justify-center items-center bg-slate-50 border-slate-400 border-solid border-2 rounded-full">
                        {selectedCard === address && <div className="h-9 w-9 bg-slate-800 rounded-full"/>}
                    </button>
                </div>
            </div>
            <div className="flex w-full justify-end px-4 md:px-0 pt-3 mt-2 gap-5 border-t-2">
                <button>
                    <p className="text-slate-950 underline">editar</p>
                </button>
                <button>
                    <p className="text-slate-950 underline">excluir</p>
                </button>
         
            </div>
        </div>
    )
}