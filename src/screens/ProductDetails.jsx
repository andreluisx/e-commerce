import { Rating } from '@mui/material';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Carousel } from "flowbite-react";
import product from '../dados/productDetails';

import variables from '../dados/variables';
import Comments from '../components/Comments';
import CarrouselProduct from '../components/CarrouselProducts';
import './styles.css';
import { Link } from "react-router-dom";
import FreightCalculation from '../components/FreightCalculation';

function convertReal(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

export default function ProductDetails() {
    const [frete, setFrete] = useState(null)

    const total_price = convertReal(product.price_total);
    const promotional_price = convertReal(product.promotional_price);

    const difference = product.price_total - product.promotional_price;
    const discountPercentage = Math.round((difference / product.price_total) * 100);

    function promotionRender() {
        if(!product.is_avaible){
            return <div className='mt-6 h-14 w-full flex flex-col font-bold text-blue-950'>
            <p className='text-3xl text-blue-950 pb-3'>Produto Indisponível</p>
        </div>
        }
        if (promotional_price) {
            return (
                <div className='mt-4 w-full flex flex-col font-bold text-blue-950'>
                    <div className='flex-row flex gap-2 items-end mb-2'>
                        <p className='line-through text-xl text-slate-500'>{total_price}</p>
                        <p className='text-mg text-slate-500'>em até 10x ou</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-3xl text-blue-950'>{promotional_price}</p>
                        <div className='bg-slate-950 text-slate-100 py-1 px-3 ml-4'>
                            <p>-{discountPercentage}% no PIX</p>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className='mt-6 h-14 w-full flex flex-col font-bold text-blue-950'>
                <p className='text-3xl text-blue-950'>{total_price}</p>
            </div>
        );
    }

    // ESSA VARIAVEL TEM QUE SER UM ESTADO DO PRODUTO
    const productVariebles = product.description.specifications
    const [variable, setVariable] = useState(productVariebles)

    const onPressVariable = (variableName, optionName)=>{
        setVariable({...variable, [variableName]: optionName})
    }

    return (
        <div className="h-full w-screen flex flex-col items-center justify-center pt-20 md:pt-28">
            <div className="w-11/12 wrapper pt-2 md:px-0">
                {/* Carrossel */}
                <div className="w-full flex flex-col justify-start items-center gap-4 mb-6 h-96 md:h-svh">
                    <Carousel className="">
                        {product.img.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product image ${index}`}
                                className="h-full w-full object-contain"
                            />
                        ))}
                    </Carousel>
                        <div className='flex w-full justify-start items-start gap-2 pt-6'>
                            <div className='flex-col items-center justify-center'>
                            {console.log('objeto de variaveis: ', variable)}

                            {variables.map(variableObj => (
                                <div key={variableObj.name} className="flex-1 flex flex-row p-2 gap-2">
                                    <p className='font-bold'>{variableObj.name}:</p>
                                    {variableObj.options.map((option, idx)=>{
                                        return <button onClick={()=>onPressVariable(variableObj.name, option)} key={idx} className={`${variable[variableObj.name] === option ? 'bg-slate-950 text-slate-200' : 'bg-slate-400 text-slate-100'} rounded-3xl px-2 py-1`}>{option}</button>
                                    })}
                                    
                                    </div>
                                ))}
                                </div>
                        </div>
                    </div>

                {/* Informações do produto */}
                <div className="border-slate-200 flex-1 ">
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <div className="pt-5 flex gap-2 flex-row md:justify-start">
                        <Rating
                            name="half-rating-read"
                            defaultValue={product.stars}
                            precision={0.5}
                            readOnly
                        />
                        <button>
                            <p className="text-slate-400 hover:underline">{product.reviews} Avaliações</p>
                        </button>
                    </div>
                    {promotionRender()}
                    <div>
                        <Link to={'/checkout'}>
                            <button disabled={!product.is_avaible} className={`text-xl w-full py-3 px-2 mt-6 rounded-md font-bold text-white ${product.is_avaible ? 'bg-green-600' : 'bg-slate-400'}`}>
                                Comprar Agora
                            </button>
                        </Link>
                        <Link to={'/checkout'}>
                            <button disabled={!product.is_avaible} className={`text-xl w-full py-3 px-2 mt-4 rounded-md font-bold text-white ${product.is_avaible ? 'bg-green-600' : 'bg-slate-400'}`}>
                                Adicionar ao Carrinho
                                <FontAwesomeIcon icon={faCartPlus} className='pl-2' />
                            </button>
                        </Link>
                    </div>

                    {/* Calculo de frete */}
                    <div className='mt-3 w-full flex flex-col justify-start items-start'>
                        <FreightCalculation setFreteSelected={setFrete} freteSelected={frete}/>
                        <div className='py-4'>
                            
                            <p>Este produto é vendido e entregue por <span className='underline'>nome de algo</span>. A Clenus Store garante a sua compra, do pedido à entrega. <span className='underline'>saiba mais</span></p>
                            <p className='pt-3'>• Garantia de entrega</p>
                            <p className='pt-3'>• Equipe de suporte disponível</p>
                        </div>
                        
                    </div>
                </div>

                {/* Descrição */}
                <div className='w-full text-xl font-bold mt-5 border-t-2 border-solid'>
                    <div className='mt-5'>
                        <p className='pb-4'>Descrição do produto:</p>
                        <p className='text-base font-normal'>{product.description.short}</p>
                    </div>
                    <div className='mt-5'>
                        <p className='pb-4'>Configurações:</p>
                        <div className="w-full">
                            <table className="w-full border-collapse">
                                <tbody>
                                    {product.description.features.map((feature) => (
                                        <tr key={feature}>
                                            <td className="py-2 text-base font-normal border-b border-gray-200">
                                                • {feature}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='pb-4'>Especificações:</p>
                        <div className="w-full">
                            <table className="w-full border-collapse text-base">
                                <tbody>
                                    {Object.entries(product.description.specifications).map(([key, value]) => (
                                        <tr key={key}>
                                            <td className="py-2 border-b border-gray-200">{key}</td>
                                            <td className="py-2 font-normal border-b border-gray-200">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Produtos relacionados */}
                <div className='w-full text-xl font-bold mt-5 border-t-2'>
                    <p className='text-xl font-bold mt-5'>Produtos relacionados:</p>
                    <CarrouselProduct />
                </div>
            </div>

            {/* Comentários */}
            <div className='w-full pt-12 px-10'>
                <Comments />
            </div>
        </div>
    );
}
