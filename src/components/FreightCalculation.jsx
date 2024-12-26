import fretes from '../dados/fretes';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function FreightCalculation({freteSelected, setFreteSelected}){

    const [freteBool, setFrete] = useState(false)

    const handleFrete = (frete) => {
        setFreteSelected(frete)
    }

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#B2BAC2',
            },
            '&:hover fieldset': {
                borderColor: '#6F7E8C',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#A0AAB4',
            },
        },
    });
    return (
        <div className='w-full'>
            <p className='pt-8 font-bold text-left'>Calcular frete e prazo:</p>
            <div className='flex flex-row items-center justify-start mt-4'>
                <CssTextField id="standard-basic" label="CEP" variant="standard" />
                <button
                    onClick={() => setFrete(!freteBool)}
                    className='bg-slate-950 text-slate-50 px-4 py-2 ml-3'
                >
                    Calcular
                </button>
                <div className='px-4'>
                    <a href='https://buscacepinter.correios.com.br/app/endereco/index.php'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer">
                        <p className='pt-2 underline pb-3'>Não sei meu cep</p>
                    </a>
                </div>
            </div>
            <div className='mt-1 flex-col w-full flex items-center justify-center'>
               
                
                    {freteBool && 
                    <div className="w-full">
                    <p className='py-4 font-bold'>Jiquiriçá - Centro</p>
                    <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="py-2 px-4 text-left border-b">Método</th>
                            <th className="py-2 px-4 text-center border-b">Prazo</th>
                            <th className="py-2 px-4 text-right border-b">Valor</th>
                            <th className="py-2 px-4 text-right border-b">Selecionado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fretes.map((frete) => (
                            <tr 
                                key={frete.id} 
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-2 px-4 border-b">{frete.name}</td>
                                <td className="py-2 px-4 text-center border-b">{frete.days} dias</td>
                                <td className="py-2 px-4 text-right border-b">{frete.price || 'Grátis'}</td>
                                <td className="py-1 px-3 text-right border-b">
                                   <div className='w-full flex justify-end'>
                                        <button onClick={()=>handleFrete(frete)}>
                                        <div className='h-6 w-6 bg-slate-100 border-2 border-slate-300 rounded-full flex justify-center items-center'>
                                            {freteSelected === frete && <div className='h-3 w-3 bg-slate-600 rounded-full'></div>}
                                        </div>
                                        </button>
                                   </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>            
                }
                
            </div>
        </div>
    )
}