import { useState } from "react";
import BuyingSteps from "../components/BuyingSteps";
import OrderResume from "../components/OrderResume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faLocationDot, faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function ReviewScreen() {
    const initialState = {id: 2, name: 'Sedex', days: 6, price: 59.49}
    const [payment, setPayment] = useState(true)
    
    const mockProducts = [
        { id: 1, name: "Smartphone XYZ", price: 999.99, quantity: 1 },
        { id: 2, name: "Case Protetora", price: 59.99, quantity: 2 }
    ]
    
    return (
        <div className="flex-1 flex w-full flex-col h-screen py-10 justify-start items-center">
            <BuyingSteps ActiveStep={2}/>
            <div className="w-11/12 mt-10 gap-5 flex flex-row flex-wrap">
                <div className="md:w-4/6 w-full flex flex-col gap-5">
                    {/* Produtos */}
                    <div className="bg-slate-100 p-7 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faBox} className="text-blue-950 text-xl"/>
                            <h2 className="font-bold text-xl">Produtos</h2>
                        </div>
                        {mockProducts.map(product => (
                            <div key={product.id} className="flex justify-between items-center py-3 border-b">
                                <div>
                                    <p className="font-medium">{product.name}</p>
                                    <p className="text-sm text-slate-600">Quantidade: {product.quantity}</p>
                                </div>
                                <p className="font-bold">R$ {(product.price * product.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    {/* Endereço */}
                    <div className="bg-slate-100 p-7 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faLocationDot} className="text-blue-950 text-xl"/>
                            <h2 className="font-bold text-xl">Endereço de Entrega</h2>
                        </div>
                        <div className="pl-8">
                            <p className="font-medium">João Silva</p>
                            <p>Rua das Flores, 123</p>
                            <p>Jardim Primavera - São Paulo, SP</p>
                            <p>CEP: 01234-567</p>
                        </div>
                    </div>

                    {/* Pagamento */}
                    <div className="bg-slate-100 p-7 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faCreditCard} className="text-blue-950 text-xl"/>
                            <h2 className="font-bold text-xl">Forma de Pagamento</h2>
                        </div>
                        <div className="pl-8">
                            <p className="font-medium">Cartão de Crédito</p>
                            <p>Final 1234</p>
                            <p>12x de R$ 116,83</p>
                        </div>
                    </div>

                    {/* Envio */}
                    <div className="bg-slate-100 p-7 rounded-xl mb-0 md:mb-20">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faTruck} className="text-blue-950 text-xl"/>
                            <h2 className="font-bold text-xl">Informações de Envio</h2>
                        </div>
                        <div className="pl-8">
                            <p className="font-medium">SEDEX</p>
                            <p>Prazo estimado: 6 dias úteis</p>
                            <p>Previsão de entrega: {new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <OrderResume 
                        buttonPlaceholder={'Finalizar Compra'} 
                        frete={initialState} 
                        disabled={payment} 
                        nextPage={'/thankyou'}
                    />
                    <p className="text-slate-700 text-sm pt-2">
                        Ao finalizar a compra, você concorda com nossos termos e condições.
                        Processaremos seu pedido e enviaremos um e-mail de confirmação.
                    </p>
                </div>
            </div>
        </div>
    )
}