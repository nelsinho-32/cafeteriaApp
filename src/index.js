import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { criarCardLanche } from './components/CardLanche.js';

// --- DADOS DOS PRODUTOS ---
// No futuro, isso pode vir de um servidor ou API
const lanches = [
    {
        imagem: './assets/combo1.jpg',
        nome: 'Combo entrada',
        descricaoCurta: 'Café + Biscoito artesanal + Chocolate',
        descricaoCompleta: 'Um café coado especial, acompanhado de um biscoito artesanal de baunilha e um pequeno chocolate 70% cacau.',
        preco: 'R$ 19,99'
    },
    {
        imagem: './assets/sandu1.jpg',
        nome: 'Sanduíche Artesanal',
        descricaoCurta: 'Pão integral + Presunto + Salada + Molho da casa',
        descricaoCompleta: 'Sanduíche em pão integral de fermentação natural, com presunto de parma, mix de folhas verdes, tomate fresco e nosso exclusivo molho da casa.',
        preco: 'R$ 9,99'
    },
    {
        imagem: './assets/sobremesa1.webp',
        nome: 'Torta de Chocolate',
        descricaoCurta: 'Torta de chocolate + Chantilly + Nutella',
        descricaoCompleta: 'Fatia generosa de torta de chocolate meio amargo, coberta com chantilly fresco e um toque de Nutella.',
        preco: 'R$ 12,99'
    }
];

// --- RENDERIZAÇÃO DA PÁGINA ---
document.addEventListener('DOMContentLoaded', function () {
    // 1. Renderiza os componentes estáticos (Header e Footer)
    renderHeader();
    renderFooter();

    // 2. Renderiza os componentes dinâmicos (Cards de Lanches)
    const lanchesContainer = document.getElementById('lanches-container');
    if (lanchesContainer) {
        let cardsHTML = '';
        lanches.forEach(lanche => {
            cardsHTML += criarCardLanche(lanche);
        });
        lanchesContainer.innerHTML = cardsHTML;
    }

    // 3. Inicializa os componentes Bootstrap que precisam de JS
    
    // Inicializa o Carrossel
    const carouselElement = document.querySelector('#produtosCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: 'carousel'
        });
    }

    // Inicializa os Tooltips (para as descrições dos cards)
    // É importante fazer isso DEPOIS que os cards foram adicionados ao DOM
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});