import { useState } from "react"
import AdressCard from "./AddressCard"

export default function RenderAddressList({addresses, changeScreen, screen, selectedCard, setSelectedCard}){

    
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold">Selecionar endereço</p>
                <button onClick={()=>changeScreen(!screen)} className="bg-indigo-950 rounded-md px-3 py-2">
                    <p className="text-white font-bold">Adicionar endereço</p>
                </button>
            </div>
            <div className="py-4 flex gap-3 flex-col">
            
            {addresses.map(address => {
                    return <AdressCard key={address.id} address={address} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
                })}
                <p className="text-slate-700 text-sm pt-2">Cheque com atenção se o endereço está correto, caso ocorra algum problema entraremos em contato no whatsapp.</p>
            </div> 
        </div>
    )
}