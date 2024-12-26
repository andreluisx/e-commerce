import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem.jsx'
import FreightCalculation from '../components/FreightCalculation.jsx'
import OrderResume from '../components/OrderResume.jsx'

export default function Checkout() {
    const [selectedFrete, setSelectedFrete] = useState(null)

    return (
        <div className='container mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='w-full lg:w-8/12'>
                    <p className='text-xl font-bold'>Minha Cesta</p>
                    <div className='pt-8 gap-3 flex flex-col'>
                        <CartItem/>
                        <CartItem/>
                    </div>
                    <div className='items-center justify-start mt-5'>
                        <FreightCalculation 
                            freteSelected={selectedFrete} 
                            setFreteSelected={setSelectedFrete}

                        />
                    </div>
                </div>
                <div className='w-full lg:w-4/12'>
                    <OrderResume frete={selectedFrete} disabled={selectedFrete}  nextPage={'/address'}/>
                </div>
            </div>
        </div>
    )
}