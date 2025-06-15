# **cafeteriaApp**

Bem-vindo ao **cafeteriaApp**, um projeto de loja virtual para cafeterias, que oferece uma experiência moderna e interativa para os amantes de café. Este projeto foi desenvolvido com HTML, CSS, JavaScript e Bootstrap, utilizando uma estrutura modular para facilitar a manutenção e escalabilidade.

---

## **Funcionalidades**

- **Carrossel de Produtos**: Exibe os produtos em destaque com imagens dinâmicas.
- **Lanches Mais Vendidos**: Apresenta os lanches mais populares em formato de cards.
- **Header e Footer Dinâmicos**: Componentes reutilizáveis para cabeçalho e rodapé.
- **Tooltip nos Cards**: Exibe descrições completas ao passar o mouse sobre os textos truncados.
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela usando Bootstrap.

---

## **Estrutura do Projeto**

A estrutura do projeto foi organizada para facilitar a separação de responsabilidades e o reaproveitamento de código:

```
cafeteriaApp/
├── assets/                # Arquivos estáticos (imagens)
│   ├── capuccino1.jpg
│   ├── combo1.jpg
│   ├── lancheIlus.jpg
│   ├── logoCafeteria.webp
│   ├── prod1.avif
│   ├── prod2.jpg
│   ├── prod3.jpeg
│   ├── prod4.jpeg
│   ├── prodIni.webp
│   ├── sandu1.jpg
│   ├── sobremesa1.webp
├── src/                   # Código JavaScript
│   ├── index.js           # Arquivo principal para inicialização
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.js      # Componente do cabeçalho
│   │   ├── Footer.js      # Componente do rodapé
│   │   ├── CardLanche.js  # Componente para os cards de lanches
├── index.html             # Estrutura principal do HTML
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
- Botões de compra e adicionar ao carrinho.

---

## **Personalização**

### **Estilização**
O arquivo `index.css` contém estilos personalizados, como:
- Ajustes para o carrossel.
- Estilização dos cards.
- Cores e espaçamentos.

### **JavaScript**
O arquivo `index.js` gerencia:
- Renderização dos componentes dinâmicos.
- Inicialização do carrossel e tooltips.

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