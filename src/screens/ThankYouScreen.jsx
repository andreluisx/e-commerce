import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ThankYouScreen() {
    const navigate = useNavigate();
    const orderNumber = "12345"; // Mock order number
    const trackingCode = "BR123456789"; // Mock tracking code

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* Success Icon */}
                <FontAwesomeIcon 
                    icon={faCircleCheck} 
                    className="text-green-500 text-7xl mb-1"
                />

                {/* Thank You Message */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Obrigado pela sua compra!
                    </h1>
                    <p className="text-xl text-slate-600">
                        Seu pedido #{orderNumber} foi confirmado e está sendo processado
                    </p>
                </div>

                {/* Order Status */}
                <div className="bg-slate-50 p-8 rounded-xl space-y-4 mt-8">
                    <div className="flex items-center justify-center gap-3">
                        <FontAwesomeIcon icon={faTruck} className="text-blue-950"/>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Acompanhe seu pedido
                        </h2>
                    </div>
                    <p className="text-slate-600">
                        Seu código de rastreio pode ser acessado em conta / pedidos
                    </p>
                    <p className="text-lg font-mono font-semibold text-blue-950">
                        {trackingCode}
                    </p>
                    <p className="text-sm text-slate-500">
                        Você receberá atualizações sobre seu pedido por email
                    </p>
                </div>

                {/* Return Button */}
                <button
                    onClick={() => navigate('/')}
                    className="mt-8 bg-blue-950 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors"
                >
                    Voltar à Loja
                </button>

                {/* Additional Info */}
                <p className="text-sm text-slate-500 mt-6">
                    Em caso de dúvidas, entre em contato com nosso suporte
                </p>
            </div>
        </div>
    );
}