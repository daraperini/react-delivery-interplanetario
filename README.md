# Interplanetary Delivery

Hello! Welcome to my first Front-end project. It consists in an portfolio created during the Alura's degree *From scratch: HTML and CSS for Web Projects*.

To see the final result, click [here](https://portfolio-alura-ecru-two.vercel.app/).

## Used tools:

* Next.js
* Tailwind
* TypeScript
* LocalStorage
* uuid API
* React Google Maps API
* Classnames API


## Initializing the project on your computer

- Clone the repository using the command line:
    - git clone *link of the repository*
    - cd *file of the repository*
 
- Go to the projects main file:
    - cd *name of the file*
 
- Run the code:
    - npm install (to install all project's dependencies)
    - npm run dev (to open the project on your browser)
 
* In case the project does not opend automatically type http://localhost:3000 on your browser


#

# Interplanetary Delivery

Bem-vindo ao projeto Interplanetary Delivery!

A ideia desse projeto era desenvolver uma aplicação para um sistema de delivery interplanetário. A situação proposta me colocou em 2050, onde, com a expansão da SpaceX e o barateamento dos custos, passamos a exportar produtos eletrônicos para Marte.

A primeira página do projeto consiste na página de listagem e pesquisa de endereços cadastrados. Nela, você pode pesquisar um endereço específico pesquisando pelo seu nome, selecionar o endereço e utilizar os botões de edição e deleção para fazer alterações na sua lista. Clicando tanto no botão de adicionar novo endereço (presente no topo esquerdo da página) quanto no de editar endereço atual, você será redirecionado para a segunda página do projeto.

A segunda página consiste na página de adição de novos endereços, e de edição de endereços já cadastrados. Considerando que, em Marte, não existem cidades nem países e que sua localização é classificada de acordo com lotes de quatro dígitos, e que na Terra temos endereços completos, você pode selecionar de qual planeta é o endereço e completá-lo adequadamente. Isso porque provavelmente a Interplanetary Delivery não fará apenas envios a Marte, mas também na Terra.

Nesse projeto optei por salvar os dados no LocalStorage, ao invés de em um banco de dados, por questões de simplicidade. O mapa presente na página de cadastro é meramente ilustrativo, incluído com a `API React Google Maps`, e o projeto foi desenvolvido com Next.js utilizando renderização client-side.

## Ferramentas utilizadas:

* Next.js
* Tailwind
* TypeScript
* LocalStorage
* uuid API
* React Google Maps API
* Classnames API


## Iniciando o projeto na sua máquina

- Clone o repositório através do terminal:
    - git clone *link do repositório*
    - cd *pasta do repositório*
 
- Entre na pasta do projeto:
    - cd *nome da pasta*
 
- Rode o código na sua máquina:
    - npm install (para instalar as dependências do projeto)
    - npm run dev (para abrir o projeto no seu navegador)
 
* Caso o projeto não abra automaticamente, digite http://localhost:3000 no seu navegador

