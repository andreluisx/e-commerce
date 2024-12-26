import imagem from '../images/iphone.jpg';

export default function CartItem(){
    return <div className='flex flex-col lg:flex-row lg:justify-between items-center border-solid border-2 p-5 border-slate-100 rounded-xl'>
    <div className='flex flex-row'>
        <img src={imagem} alt='produto' className='w-20'/>
        <div className='flex flex-col pl-4'>
            <p className='text-lg font-bold'>Nome do Produto</p>
            <p className='text-lg text-slate-600'>Descrição do produto</p>
            <p className='text-lg font-bold'>R$ 1.357,00</p>
        </div>
    </div>
    <div className='py-6'>
        <p className='text-slate-600'>chega em 12 dias úteis</p>
    </div>
    <div className='flex flex-col'>
        <p className='text-lg font-bold pb-2'>Quantidade</p>
        <div className='flex flex-row justify-between items-center'>
            <button className='bg-slate-300 text-slate-800 font-bold w-8 h-8 rounded-md'>-</button>
            <p className='text-lg font-bold'>1</p>
            <button className='bg-slate-300 text-slate-800 font-bold w-8 h-8 rounded-md'>+</button>
        </div>
    </div>
</div>
}