import { Link } from "react-router";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function OrderResume({ frete, disabled, nextPage }) {
    const navigate = useNavigate();

    // Função para formatar valores em BRL
    function convertReal(valor) {
        if (typeof valor !== "number") return "Calcule o frete";
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
    }

    // Valor do frete tratado
    const freteDisplay = frete ? convertReal(frete.price) : "Calcule o frete";

    return (
        <div className="flex flex-col w-full bg-slate-100 px-5 py-6 rounded-xl">
            <p className="font-bold text-xl">Resumo do pedido</p>
            <div className="pt-6 pb-2 border-b-2 text-slate-600 border-slate-200">
                <div className="flex justify-between items-center">
                    <p>2 Produtos</p>
                    <p>R$ 1.357,00</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Frete</p>
                    <p className="font-bold">{freteDisplay}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between align-top pb-5 mb-4 border-b-2 border-slate-200">
                <p className="font-bold text-lg">Total</p>
                <div className="flex-col text-right pt-2">
                    <p className="font-bold text-lg">R$ 1402,00</p>
                    <p className="text-slate-600 text-sm">no pix</p>
                    <p className="text-slate-600 text-sm">ou R$ 1503,00 em até 8x</p>
                </div>
            </div>
            <Button
                placeholder={"Continuar"}
                disable={!disabled}
                onPress={() => navigate(nextPage)}
            />
            <Link to={"/"} className="flex pt-2 items-center justify-center">
                <p className="underline text-slate-600">adicionar mais produtos</p>
            </Link>
        </div>
    );
}
