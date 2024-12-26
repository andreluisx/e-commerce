import { Rating } from '@mui/material';


function convertReal(valor){
    const resultado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            valor,
        )

    return resultado
}

export default function ProductCard({ product }) {
    const price_total = convertReal(product.price_total);
    const promotional_price = convertReal(product.promotional_price);
  
    return (
        <a href="/details" >
        <div className="p-6 flex flex-col justify-center items-center md:justify-start md:items-start transition-all duration-300 hover:outline hover:outline-1 hover:outline-gray-300 hover:rounded-lg">
            <div className="pb-5 flex justify-center items-center self-center">
                <div >
                    <img src={product.img} alt="produto" className="max-w-44" />
                </div>
            </div>
            <div className="text-center md:text-left">
                <p className="text-slate-500 text-md font-bold">{product.name}</p>
            </div>
            <div className="pt-3 flex gap-2 flex-row justify-center md:justify-start">
                <Rating
                name="half-rating-read"
                defaultValue={product.stars}
                precision={0.5}
                readOnly
                />
                <p className="text-slate-400">({product.reviews})</p>
            </div>
            <div className="pt-4 w-full text-center md:text-left">
                <p className="text-slate-500">
                    <span className="font-bold">{price_total}</span> ou em até{" "}
                    <span className="font-bold">{product.parcel}x</span> de{" "}
                    {promotional_price}
                </p>
                <p className="text-3xl pt-4 font-bold text-blue-950 items-end">
                    {price_total}
                </p>
            </div>
        </div>
      </a>
    );
  }