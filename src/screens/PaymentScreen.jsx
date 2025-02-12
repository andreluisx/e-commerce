import BuyingSteps from "../components/BuyingSteps";
import OrderResume from "../components/OrderResume";
import PaymantsMethods from "../components/PaymantsMethods";
import { useState } from "react";

export default function PaymentScreen() {
    const initialState = {id: 2, name: 'Sedex', days: 6, price: 59.49}
    const [payment, setPayment] = useState(true)
    
    return (
        <div className="flex-1 flex w-full flex-col h-screen py-10 justify-start items-center">
            <BuyingSteps ActiveStep={1}/>
            <div className="w-11/12 mt-10 gap-5 flex flex-row flex-wrap">
            <div className="md:w-4/6 w-full rounded-xl bg-slate-100 p-7">
               
                <PaymantsMethods/>
            </div>
                <div className="flex-1">
                    <OrderResume frete={initialState} disabled={payment} nextPage={'/review'}/>
                    <p className="text-slate-700 text-sm pt-2">Certifique-se de ter selecionado o CEP correto para esse endereço. Se ocorrer algum problema cancelaremos a compra e devolveremos o dinheiro</p>
                </div>
            </div>
        </div>
    )
}