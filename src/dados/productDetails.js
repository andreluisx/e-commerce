import imagem from '../images/iphone.jpg';
import galaxy from '../images/galaxy.jpg';
import xiaomi from '../images/xiaomi.jpg';
import pixel from '../images/pixel.jpg';

export default {
    img: [imagem, galaxy, xiaomi, pixel],
    name: 'Apple Iphone 16 512gb - Azul',
    stars: 3.6,
    reviews: 358,
    price_total: 2700,
    promotional_price: 2456.55,
    is_avaible: true,
    description: {
        short: 'iPhone 16 com 512GB de armazenamento na cor Azul, oferecendo tecnologia de ponta e design premium.',
        features: [
            'Tela Super Retina XDR OLED de 6.7 polegadas',
            'Processador A18 Bionic de última geração',
            'Sistema de câmera tripla de 48MP + 12MP + 12MP',
            'Câmera frontal TrueDepth de 12MP com Face ID',
            'Bateria com duração de até 29 horas de reprodução de vídeo',
            'Resistente à água e poeira (classificação IP68)',
            '512GB de armazenamento interno',
            'Suporte para 5G',
            'iOS mais recente com recursos exclusivos'
        ],
        specifications: {
            armazenamento: '512GB',
            cor: 'Vermelho',
            tela: 'FullHd',
            resolucao: '2796 x 1290 pixels',
            processador: 'A18 Bionic',
            ram: '8GB',
            bateria: '4422mAh',
        },
        warranty: '1 ano de garantia Apple',
        inBox: [
            'iPhone 16',
            'Cabo USB-C para Lightning',
            'Documentação',
            'Pin para ejeção do SIM'
        ]
    }
}