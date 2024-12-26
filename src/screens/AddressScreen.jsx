import AdressCard from "../components/AddressCard";
import BuyingSteps from "../components/BuyingSteps";
import OrderResume from "../components/OrderResume";
import { useState } from "react";
import RenderAddressList from "../components/RenderAddressList";
import RenderAddressForm from "../components/RenderAddressForm";

const addresses = [{
    id:1,
    street: "Rua das Flores, 1235",
    neighborhood: "Jardim Primavera",
    city: "São Paulo - SP",
    cep: "01234-567"
},
{
    id:2,
    street: "Rua das Flores, 1235",
    neighborhood: "Jardim Primavera",
    city: "São Paulo - SP",
    cep: "01234-567"
},

]

export default function FinalizingPurchase() {
    const initialState = {id: 2, name: 'Sedex', days: 6, price: 59.49}
    const [selectedCard, setSelectedCard] = useState(null)
    const[showForm, setShowForm] = useState(false)
    
    return (
        <div className="flex-1 flex w-full flex-col h-screen py-10 justify-start items-center">
            <BuyingSteps/>
            <div className="w-11/12 mt-10 gap-5 flex flex-row flex-wrap">
            <div className="md:w-4/6 w-full rounded-xl bg-slate-100 p-7">
                {showForm ? <RenderAddressForm changeScreen={setShowForm} screen={showForm}/> : <RenderAddressList addresses={addresses} selectedCard={selectedCard} changeScreen={setShowForm} setSelectedCard={setSelectedCard} screen={showForm}/>  }
                
            </div>
                <div className="flex-1">
                    <OrderResume frete={initialState} disabled={selectedCard} nextPage={'/payment'}/>
                    <p className="text-slate-700 text-sm pt-2">Certifique-se de ter selecionado o CEP correto para esse endereço. Se ocorrer algum problema cancelaremos a compra e devolveremos o dinheiro</p>
                </div>
            </div>
        </div>
    )
}