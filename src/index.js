import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { criarCardLanche } from './components/CardLanche.js';

const basePath = window.location.pathname.includes('/src/cardapio/')
    ? '../../'
    : './';

// Dados dos lanches para o index.html
const lanchesIndex = [
    {
        imagem: `${basePath}assets/images/combo1.jpg`,
        nome: 'Combo entrada',
        descricaoCurta: 'Café + Biscoito artesanal + Chocolate',
        descricaoCompleta: 'Um café coado especial, acompanhado de um biscoito artesanal de baunilha e um pequeno chocolate 70% cacau.',
        preco: 'R$ 19,99'
    },
    {
        imagem: `${basePath}assets/images/sandu1.jpg`,
        nome: 'Sanduíche Artesanal',
        descricaoCurta: 'Pão integral + Presunto + Salada + Molho da casa',
        descricaoCompleta: 'Sanduíche em pão integral de fermentação natural, com presunto de parma, mix de folhas verdes, tomate fresco e nosso exclusivo molho da casa.',
        preco: 'R$ 9,99'
    },
    {
        imagem: `${basePath}assets/images/sobremesa1.webp`,
        nome: 'Torta de Chocolate',
        descricaoCurta: 'Torta de chocolate + Chantilly + Nutella',
        descricaoCompleta: 'Fatia generosa de torta de chocolate meio amargo, coberta com chantilly fresco e um toque de Nutella.',
        preco: 'R$ 12,99'
    }
];

// Dados dos lanches exclusivos para o cadapio.html
const lanchesCardapio = [
    {
        imagem: `${basePath}assets/images/prod2.jpg`,
        nome: 'Café Gourmet',
        descricaoCurta: 'Café especial com grãos selecionados.',
        descricaoCompleta: 'Café gourmet feito com grãos selecionados, torrados artesanalmente para um sabor único.',
        preco: 'R$ 9,99'
    },
    {
        imagem: `${basePath}assets/images/prod1.avif`,
        nome: 'Café Tradicional',
        descricaoCurta: 'Café Tradicional 3 corações.',
        descricaoCompleta: 'Café Tradicional feito com grãos da 3 corações.',
        preco: 'R$ 4,99'
    },
    {
        imagem: `${basePath}assets/images/crois.webp`,
        nome: 'Croissant Recheado',
        descricaoCurta: 'Croissant com recheio peito de frango e ricota.',
        descricaoCompleta: 'Croissant artesanal recheado com peito de frango em fatias mais ricota.',
        preco: 'R$ 8,99'
    },
    {
        imagem: `${basePath}assets/images/brownie.webp`,
        nome: 'Brownie de Chocolate',
        descricaoCurta: 'Brownie com pedaços de chocolate.',
        descricaoCompleta: 'Brownie de chocolate meio amargo com pedaços de chocolate ao leite e nozes.',
        preco: 'R$ 6,99'
    },
    {
        imagem: `${basePath}assets/images/prod4.jpeg`,
        nome: 'Milkshake de Chocolate',
        descricaoCurta: 'Milkshake cremoso com chocolate, Chantilly e Nutela.',
        descricaoCompleta: 'Milkshake cremoso feito chocolate, com cobertura de nutela e coberto de chantilly.',
        preco: 'R$ 12,99'
    },
    {
        imagem: `${basePath}assets/images/coxi1.webp`,
        nome: 'Coxinha de Bacalhau',
        descricaoCurta: 'Coxinhas com recheio de bacalhau deliciosos (3 unidades).',
        descricaoCompleta: 'Coxinhas com recheio de bacalhau da Noruega (3 unidades).',
        preco: 'R$ 14,99'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderFooter();

    const lanchesContainer = document.getElementById('lanches-container');
    if (lanchesContainer) {
        lanchesContainer.innerHTML = lanchesIndex.map(lanche => criarCardLanche(lanche)).join('');
    }

    // cards no cadapio.html
    const cardapioContainer = document.getElementById('cardapio-container');
    if (cardapioContainer) {
        // Recupera produtos cadastrados do localStorage e adiciona ao array
        const produtosSalvos = JSON.parse(localStorage.getItem('produtosCardapio')) || [];
        lanchesCardapio.push(...produtosSalvos);

        cardapioContainer.innerHTML = lanchesCardapio.map(lanche => criarCardLanche(lanche)).join('');
    }

    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    //adicionar itens ao carrinho
    const addButtons = document.querySelectorAll('.add-item');
    addButtons.forEach(button => {
        button.addEventListener('click', function () { // UTILIZAR ONCLICK
            const quantityBadge = this.closest('.d-flex').querySelector('.quantity');
            let quantity = parseInt(quantityBadge.textContent);
            quantity += 1;
            quantityBadge.textContent = quantity;
        });
    });

    //diminuir itens do carrinho
    const decreaseButtons = document.querySelectorAll('.decrease-item');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function () { // UTILIZAR ONCLICK
            const quantityBadge = this.closest('.d-flex').querySelector('.quantity');
            let quantity = parseInt(quantityBadge.textContent);
            if (quantity > 1) {
                quantity -= 1;
                quantityBadge.textContent = quantity;
            }
        });
    });

    //deletar itens do carrinho
    const deleteButtons = document.querySelectorAll('.delete-item');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.col');
            card.remove();
        });
    });

    // Modal
    const modalTrigger = document.querySelector('.modal-trigger');
    const modalElement = document.getElementById('myModal');
    if (modalTrigger && modalElement) {
        modalTrigger.addEventListener('click', function () {
            const myModal = new bootstrap.Modal(modalElement);
            myModal.show();
        });
    }

    // Adicionar itens ao carrinho
    const shoppingCartButtons = document.querySelectorAll('.btn-shopping-cart, .add-item');
    shoppingCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const card = this.closest('.card');
            const itemName = card.querySelector('.card-title').textContent;
            const itemPrice = parseFloat(card.querySelector('.fs-6, .fs-3').textContent.replace('R$', '').replace(',', '.'));
            const itemImgSrc = card.querySelector('img').getAttribute('src');
            const itemImg = itemImgSrc.split('/').pop(); // pega só o nome do arquivo, ex: 'combo1.jpg'
            // Salve o caminho relativo ao projeto, não o caminho absoluto do navegador
            const itemDesc = card.querySelector('.card-text')?.textContent || '';
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            // Verifica se já existe o item no carrinho
            const existing = cartItems.find(item => item.name === itemName);
            if (existing) {
                existing.quantity += 1;
            } else {
                cartItems.push({
                    name: itemName,
                    price: itemPrice,
                    quantity: 1,
                    img: itemImg, // Caminho relativo
                    desc: itemDesc
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert(`${itemName} foi adicionado ao carrinho!`);
        });
    });

    // Cadastrar produto no cardápio
    const cadastrarButton = document.getElementById('cadastrar-button');
    if (cadastrarButton) {
        cadastrarButton.addEventListener('click', function () {
            const productName = document.getElementById('recipient-name').value;
            const productDesc = document.getElementById('message-text').value;
            const productPrice = parseFloat(document.getElementById('product-price').value);
            const productImage = document.getElementById('product-image').files[0];
            if (!productName || !productDesc || isNaN(productPrice) || !productImage) {
                alert('Por favor, preencha todos os campos corretamente.');
                return;
            }   
            const reader = new FileReader();
            reader.onload = function (e) {
                const newProduct = {
                    imagem: e.target.result, // Caminho da imagem
                    nome: productName,
                    descricaoCurta: productDesc,
                    descricaoCompleta: productDesc, // Pode ser ajustado conforme necessário
                    preco: `R$ ${productPrice.toFixed(2)}`
                };
                lanchesCardapio.push(newProduct);
                let produtosSalvos = JSON.parse(localStorage.getItem('produtosCardapio')) || [];
                produtosSalvos.push(newProduct);
                localStorage.setItem('produtosCardapio', JSON.stringify(produtosSalvos));
                const cardapioContainer = document.getElementById('cardapio-container');
                cardapioContainer.innerHTML = lanchesCardapio.map(lanche => criarCardLanche(lanche)).join('');
                alert('Produto cadastrado com sucesso!');
            };
            reader.readAsDataURL(productImage); // Lê a imagem como URL
        });
    }
});