import CarrouselProduct from '../components/CarrouselProducts';
import imagem from '../images/fidelizacao-relacionamento.png';
import { useState, useEffect } from 'react';

export default function Home() {
    const [time, setTime] = useState({
        hours: 12,
        minutes: 0,
        seconds: 32
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                const newSeconds = prevTime.seconds - 1;
                const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
                const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

                return {
                    hours: newHours >= 0 ? newHours : 0,
                    minutes: newMinutes < 0 ? 59 : newMinutes,
                    seconds: newSeconds < 0 ? 59 : newSeconds
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, '0');
    
    return (
        <div className="relative min-h-screen pb-20">
            <div className="flex justify-center items-center w-full md:pt-28 md:pb-0 py-16 px-3 bg-slate-950">
                <div className='flex flex-col-reverse md:flex-row justify-between items-center w-full px-4 md:px-8 lg:px-12'>
                    <div className='flex items-start flex-col justify-center w-full md:w-1/2 lg:max-w-2xl mt-8 md:mt-0'>
                        <h1 className="text-slate-100 font-bold text-2xl md:text-3xl lg:text-4xl pb-4 md:pb-8 text-center md:text-left">
                            Aproveite as <span className="text-yellow-300">Promoções </span>
                            <span className="text-blue-300">cadastre seu e-mail</span> para não perder nada!
                        </h1>
                        <p className="text-slate-100 text-center md:text-left w-full">
                            cadastre um <span className="text-blue-300 font-semibold">e-mail válido</span> no campo abaixo
                        </p>
                        <div className='bg-white w-full md:w-5/6 mt-4 py-3 md:py-4 px-4 md:px-6 rounded-md flex justify-between'>
                            <input
                                type="text"
                                className='w-full md:w-5/6 text-base md:text-lg text-slate-600 focus:outline-none'
                                placeholder="Digite seu e-mail"
                            />
                            <button className='font-bold text-slate-700 hover:text-blue-950 transition-colors whitespace-nowrap ml-2'>
                                Enviar
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center md:justify-end w-full md:w-1/2 pt-16 md:pt-0'>
                        <img
                            src={imagem}
                            alt="mulher fazendo compras"
                            className='w-2/3 md:w-10/12 h-auto object-contain'
                        />
                    </div>

                </div>
            </div>
            <div>
                <h3 className='text-center pt-10 pb-8 text-5xl font-bold text-blue-950'>Mais Vendidos</h3>
            </div>
            <div>
                <CarrouselProduct/>
            </div>
            <div className='bg-slate-950 flex flex-row justify-center items-center mt-10 mb-7 flex-wrap py-2'>
                <h3 className='text-center text-4xl font-bold text-slate-100'>Promoção Relâmpago</h3>
                <div className='bg-white rounded-md flex justify-center items-center mx-6 px-5 py-2 my-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <div>
                            <p className='text-3xl font-bold text-blue-950'>
                                {`${formatNumber(time.hours)}:${formatNumber(time.minutes)}:${formatNumber(time.seconds)}`}
                            </p>
                            <p className='text-blue-950'>horas : min : seg</p>
                        </div>
                        <p className='text-4xl'>⏳</p>
                    </div>
                </div>
            </div>
            <div>

                <CarrouselProduct/>
            </div>
        </div>
    );
}
