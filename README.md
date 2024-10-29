# Projeto de Checkout

Veja o projeto publicado aqui => (https://checkout-nu.vercel.app/)

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

## Uso

1. Inicie o servidor de desenvolvimento:

    ```
    npm run dev
    ```

2. Abra o navegador e acesse http://localhost:3000.

## Configuração

1. Crie um arquivo .env na raiz do projeto e adicione as seguintes
    ```
    NEXT_PUBLIC_API_URL= http://localhost:3000/api
    NEXT_PUBLIC_ENCRYPTION_KEY= [sua chave de crypto]
    ```
   Para gerar uma chave de criptografia basta acessar a seguinte rota (http://localhost:3000/api)

   Copie o conteudo da message e coloque na variável


3. Certifique-se de que o arquivo .env está listado no .gitignore para que não seja versionado:
    ```
    env
    ```

## Testes

Para executar os testes, utilize o comando:
```bash
npm test
```

## Capturas de tela
![image](https://github.com/user-attachments/assets/7424140b-8e9c-4058-9a4f-7fef8976dfb4)


