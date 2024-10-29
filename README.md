# Projeto de Checkout

Este projeto é um sistema de checkout que permite aos usuários realizar pagamentos com cartão de crédito. Ele inclui funcionalidades como criptografia de dados sensíveis, validação de formulários e exibição de informações de pagamento.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS para estilização.
- **CryptoJS**: Biblioteca para criptografia e descriptografia de dados.
- **React Hook Form**: Biblioteca para gerenciamento de formulários.
- **Zod**: Biblioteca para validação de esquemas.
- **Jest**: Framework de testes em JavaScript.
- **React Testing Library**: Biblioteca para testes de componentes React.

## Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:LPeligrineli/checkout.git
   cd checkout
   ```
2. Instale as depêndencias
   
    ```
    npm install
    ```

## Configuração

1. Crie um arquivo .env na raiz do projeto e adicione as seguintes
    ```
    NEXT_PUBLIC_API_URL= http://localhost:3000/api
    NEXT_PUBLIC_ENCRYPTION_KEY= [sua chave de crypto]
    ```
2. Certifique-se de que o arquivo .env está listado no .gitignore para que não seja versionado:
    ```
    env
    ```

## Uso

1. Inicie o servidor de desenvolvimento:

    ```
    npm run dev
    ```

2. Abra o navegador e acesse http://localhost:3000.

