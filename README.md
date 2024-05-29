# Interplanetary Delivery

Welcome to the Interplanetary Delivery project!

This project's idea was to develop an application for a interplanetary delivery system. The comcept had me placed in 2050 where with SpaceX's expansion and the lowering of costs we began to export eletronic products to Mars.

The first page of the project consists of the list and search page for registered addresses. In this page you can search for a specific address by typing its name in the search input, select the address and use the edit and delete buttons to make changes to your list. By clicking both the add new address button (present at the top right of the page) and the edit current address button, you will be redirected to the second page of the project.

The second page is the page for adding new addresses and editing addresses already registered. Considering that on Mars there are no cities or countries and that their location is classified according to four-digit lots, and that on Earth we have complete addresses, you can select which planet the address is from and complete it accordingly. This is because Interplanetary Delivery will probably not only ship to Mars, but also to Earth.

For this project I chose to save the data in LocalStorage instead of in a database for simplicity. The map on the registration page is for illustration purposes only and was included using the `React Google Maps API`. The project was developed with Next.js using client-side rendering.

Here you can see the base layout I was given to work with:

![<Project's Layout>](<projectLayout.png>)

And here the final result:

![<Project's first page>](<addressPage.png>)
![<Project's second page>](<newAddressPage.png>)

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

A primeira página do projeto consiste na página de listagem e pesquisa de endereços cadastrados. Nela, você pode pesquisar um endereço específico pesquisando pelo seu nome, selecionar o endereço e utilizar os botões de edição e deleção para fazer alterações na sua lista. Clicando tanto no botão de adicionar novo endereço (presente no topo direito da página) quanto no de editar endereço atual, você será redirecionado para a segunda página do projeto.

A segunda página consiste na página de adição de novos endereços, e de edição de endereços já cadastrados. Considerando que, em Marte, não existem cidades nem países e que sua localização é classificada de acordo com lotes de quatro dígitos, e que na Terra temos endereços completos, você pode selecionar de qual planeta é o endereço e completá-lo adequadamente. Isso porque provavelmente a Interplanetary Delivery não fará apenas envios a Marte, mas também na Terra.

Nesse projeto optei por salvar os dados no LocalStorage, ao invés de em um banco de dados, por questões de simplicidade. O mapa presente na página de cadastro é meramente ilustrativo, incluído com a `API React Google Maps`, e o projeto foi desenvolvido com Next.js utilizando renderização client-side.

Você pode ver o layout que me foi fornecido para o projeto aqui:

![<Layout do Projeto>](<projectLayout.png>)

E aqui o resultado final:

![<Primeira página do projeto>](<addressPage.png>)
![<Segunda página do projeto>](<newAddressPage.png>)

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

