import fundo_certo from '../images/fundo_certo.jpg'
import icone from '../images/semfundo.png'

export default function Fake(){
    return (
        <div className="relative min-h-screen">
            
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1]"
                style={{
                    backgroundImage: `url(${fundo_certo})`
                }}
            />
            
            
            <div className="relative z-10">
                <div className='h-screen w-6/12 backdrop-blur-md flex flex-col items-center justify-center' > 
                    <div className='flex flex-col items-center w-9/12 mb-20'>
                        <div className='flex flex-col items-center justify-center mb-14'>
                            <img src={icone} className='size-28 mb-3'></img>
                            <h1 className='text-4xl text-center font-bold text-slate-200'>Dev Company</h1>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full'>
                            
                            <input type="e-mail" placeholder='E-mail' className='text-white placeholder-white border-b-4 bg-transparent py-2 px-4 w-full focus:outline-none'/>
                            <input type="password" placeholder='Senha' className='text-white placeholder-white border-b-4 bg-transparent py-2 px-4 w-full mt-8 focus:outline-none'/>

                            
                        </div>
                        <button className='bg-white rounded-md w-full p-3 font-bold text-blue-800 mt-10 hover:bg-slate-300'>Entrar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}