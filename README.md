# laPizza

## Sobre
Parte do projeto website de pizzaria feito para fins de estudo.<br>
O projeto completo possui:
- API
  - Feita em NodeJS, gerencia as requisições feitas pelo usuário a fim de manipular o banco de dados. cria o banco de dados (caso não exista - a partir das migrations) e o manipula : criação, leitura, atualização, e deleção de informações persistidas. Sistema de segurança a partir de middlewares como helmet e CORS para validação de IP's. Também possui proteção interna do sistema com utilização de rotas protegidas por _tokens_ para acesso de usuários autorizados.
- Banco de dados
  - Foi feito em Mariadb dentro de um container via Docker. Permitindo alterações rigorosas de forma mais simples na estrutura do banco. Modelagem do banco feita por mim com auxílio visual do site https://dbdiagram.io/.
- Front-end
  - Feito em React permitindo a utilização de componentes, viabilizando a retulização de diversas estruturas, evitando a repetição de código. Gera dinamicidade do sistema por meio das variáveis de estado para transitar informações entre as páginas e uso do React Redux para realizar requisições à API de forma segura e tratar erros de forma mais contida.
- Back-end
  - Orquestrado pelo NodeJS possibilitando a manipulação dos dados serverside.

## Banco de Dados
![Banco de dados](https://i.ibb.co/YQ5srWh/Screenshot-from-2023-09-18-11-20-49.png)<br/>
_Diagrama criado no site https://dbdiagram.io/_

## Telas
### Home
![tela_home](https://i.ibb.co/bW4L1sf/tela-home.png)
_Tela inicial com nenhum usuário logado. É possível acessar o cardápio livremente apenas com a possibilidade de leitura_

### Login
![tela_login](https://i.ibb.co/tx7Xv9K/tela-login.png)
_Tela de login com opção direta para o registro do cliente_

### Registro
![tela_register](https://i.ibb.co/T2LDDNv/tela-register.png)
_Tela de registro exclusivo para clientes_

### Home (cliente)
![tela_customer_home_logged](https://i.ibb.co/J29YbW1/tela-customer-home-logged.png)
_Tela inicial com cliente logado_


### Minhas informações (cliente)
![tela_customer_info](https://i.ibb.co/jv5xztx/tela-customer-info.png)
_Tela de informações do cliente com possibilidade de alteração de cada informação_

### Cardápio (cliente)
![tela_customer_menu](https://i.ibb.co/xhdFWCS/tela-customer-menu.png)
_Tela do cadápio com opção de adição e remoção de cada produto ao carrinho_

### Carrinho (cliente)
![tela_customer_cart](https://i.ibb.co/MkkkN9d/tela-customer-cart.png)
_Tela do carrinho com revisão das pizzas adicionadas pelo cliente e criação do pedido_

### Pedidos (cliente)
![tela_customer_orders](https://i.ibb.co/t4nbYNZ/tela-customer-orders.png)
_Tela de pedidos com revisão dos pedidos criados pelo cliente incluindo quantidade de itens, data, status e preço final do pedido_

### Cardápio (administrador)
![tela_admin_menu](https://i.ibb.co/r6gdqfJ/tela-admin-menu.png)
_Tela do cardápio com opção de criação, edição e remoção de produtos_

### Produto - Criação (administrador)
![tela_admin_product_create](https://i.ibb.co/LZSjTdL/tela-admin-product-create.png)
_Tela de criação de produto com possibilidade de adição da foto diretamente no formulário (caso não seja adicionada nenhuma, um placeholder é mantido)_ 

#### Produto - Criação - Foto (administrador)
![tela_admin_product_create2](https://i.ibb.co/MGSm2nX/tela-admin-product-create2.png)
_Feature de adição de foto suportando arquivos .png e .jpg_

### Produto - Atualização (administrador)
![tela_admin_product_update](https://i.ibb.co/wsgZQhp/tela-admin-product-update.png)
_Tela de atualização de informações sobre o produto, tais como nome, ingredientes, descrição, preço e foto_



