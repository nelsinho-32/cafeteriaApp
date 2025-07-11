# **cafeteriaApp**

Bem-vindo ao **cafeteriaApp**, um projeto de loja virtual para cafeterias, que oferece uma experiência moderna e interativa para os amantes de café. Este projeto foi desenvolvido com HTML, CSS, JavaScript e Bootstrap, utilizando uma estrutura modular para facilitar a manutenção e escalabilidade.

---

## **Funcionalidades**

- **Carrossel de Produtos**: Exibe os produtos em destaque com imagens dinâmicas.
- **Lanches Mais Vendidos**: Apresenta os lanches mais populares em formato de cards na página inicial.
- **Cardápio Completo**: Exibe lanches adicionais na página de cardápio.
- **Carrinho de Compras**: Permite adicionar, diminuir a quantidade e deletar produtos do carrinho.
- **Página de Login e Cadastro**: Interface para autenticação e registro de usuários.
- **Configurações de Perfil**: Gerencie informações pessoais, endereços e formas de pagamento.
- **Pedidos**: Visualize o histórico de pedidos e seus status.
- **Header e Footer Dinâmicos**: Componentes reutilizáveis para cabeçalho e rodapé.
- **Tooltip nos Cards**: Exibe descrições completas ao passar o mouse sobre os textos truncados.
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela usando Bootstrap.

---

## **Estrutura do Projeto**

A estrutura do projeto foi organizada para facilitar a separação de responsabilidades e o reaproveitamento de código:

```
cafeteriaApp/
├── assets/                # Arquivos estáticos (imagens)
│   ├── brownie.webp
│   ├── capuccino1.jpg
│   ├── combo1.jpg
│   ├── coxi1.webp
│   ├── crois.webp
│   ├── lancheIlus.jpg
│   ├── logoCafeteria.webp
│   ├── prod1.avif
│   ├── prod2.jpg
│   ├── prod3.jpeg
│   ├── prod4.jpeg
│   ├── prodIni.webp
│   ├── sandu1.jpg
│   ├── sobremesa1.webp
├── src/                   # Código JavaScript e páginas
│   ├── index.js           # Arquivo principal para inicialização
│   ├── cadastro/          # Página de cadastro
│   │   ├── register.css
│   │   ├── register.html
│   ├── cardapio/          # Página de cardápio
│   │   ├── cadapio.html
│   │   ├── cardapio.css
│   ├── cart/              # Página do carrinho
│   │   ├── shoppingCart.css
│   │   ├── shoppingCart.html
│   ├── components/        # Componentes reutilizáveis
│   │   ├── CardLanche.js  # Componente para os cards de lanches
│   │   ├── Footer.js      # Componente do rodapé
│   │   ├── Header.js      # Componente do cabeçalho
│   ├── login/             # Página de login
│   │   ├── login.css
│   │   ├── login.html
│   ├── pedidos/           # Página de pedidos
│   │   ├── orders.css
│   │   ├── orders.html
│   ├── perfilConfigs/     # Página de configurações de perfil
│   │   ├── perfilConfigs.css
│   │   ├── perfilConfigs.html
│   ├── profile/           # Página de perfil
│   │   ├── profile.css
│   │   ├── profile.html
├── index.html             # Estrutura principal da página inicial
├── index.css              # Estilização personalizada
├── package.json           # Configuração do projeto (dependências)
├── README.md              # Documentação do projeto
```

---

## **Tecnologias Utilizadas**

- **HTML**: Estrutura básica da aplicação.
- **CSS**: Estilização personalizada e responsiva.
- **Bootstrap**: Framework CSS para design responsivo e componentes prontos.
- **Bootstrap Icons**: Ícones utilizados nos botões e menus.
- **JavaScript**: Lógica para renderização dinâmica e interatividade.

---

## **Como Executar o Projeto**

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. **Instale as dependências**:
   Certifique-se de que o `node_modules` está configurado corretamente. Caso contrário, instale o Bootstrap e Bootstrap Icons:
   ```bash
   npm install bootstrap bootstrap-icons
   ```

3. **Abra o arquivo `index.html`**:
   Você pode abrir diretamente no navegador ou usar uma extensão como o Live Server no VS Code para visualizar o projeto.

---

## **Componentes**

### **Header**
O cabeçalho é renderizado dinamicamente pelo arquivo `Header.js`. Ele inclui:
- Logo da cafeteria.
- Links de navegação.
- Dropdown com opções de perfil, configurações e logout.

### **Footer**
O rodapé é gerado pelo arquivo `Footer.js`. Ele inclui:
- Informações sobre a cafeteria.
- Links úteis (políticas, blog, etc.).
- Redes sociais.

### **Cards de Lanches**
Os cards são criados dinamicamente pelo arquivo `CardLanche.js`. Cada card exibe:
- Imagem do lanche.
- Nome e descrição (com tooltip).
- Preço.
- Botões de compra, adicionar ao carrinho, diminuir quantidade e deletar.

---

## **Personalização**

### **Estilização**
Os arquivos CSS específicos para cada página contêm estilos personalizados, como:
- Ajustes para o carrossel.
- Estilização dos cards.
- Cores e espaçamentos.

### **JavaScript**
O arquivo `index.js` gerencia:
- Renderização dos componentes dinâmicos.
- Inicialização do carrossel e tooltips.
- Lógica para exibir lanches exclusivos no `cadapio.html`.
- Controle de quantidade e remoção de produtos no carrinho.

---

## **Contribuição**

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso:
1. Faça um fork do repositório.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie um pull request.

---

## **Licença**

Este projeto é de uso livre e pode ser modificado conforme necessário.