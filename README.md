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
![Screenshot from 2023-09-18 11-20-49](https://github.com/Victormaldines/laPizza/assets/62166234/da1b1c37-bd25-4c9b-a4d8-60b36b778882)
_Diagrama criado no site https://dbdiagram.io/_

## Telas
### Home
![tela_home](https://github.com/Victormaldines/laPizza/assets/62166234/ef2e31e4-fe64-433d-bc2e-a0f041ab7876)
_Tela inicial com nenhum usuário logado. É possível acessar o cardápio livremente apenas com a possibilidade de leitura_

### Login
![tela_login](https://github.com/Victormaldines/laPizza/assets/62166234/25cd1420-c7c4-40be-9d2d-b39d8cf55dc7)
_Tela de login com opção direta para o registro do cliente_

### Registro
![tela_register](https://github.com/Victormaldines/laPizza/assets/62166234/97e5188d-c6ff-4a99-ba5e-00a825f4010d)
_Tela de registro exclusivo para clientes_

### Home (cliente)
![tela_customer_home_logged](https://github.com/Victormaldines/laPizza/assets/62166234/0be76830-7b2a-4f2d-b5f8-1b23ea78c365)
_Tela inicial com cliente logado_


### Minhas informações (cliente)
![tela_customer_info](https://github.com/Victormaldines/laPizza/assets/62166234/920c50b4-814d-4e90-b768-43aa0940148c)
_Tela de informações do cliente com possibilidade de alteração de cada informação_

### Cardápio (cliente)
![tela_customer_menu](https://github.com/Victormaldines/laPizza/assets/62166234/61521d60-996f-46f4-bd3a-21def177697b)
_Tela do cadápio com opção de adição e remoção de cada produto ao carrinho_

### Carrinho (cliente)
![tela_customer_cart](https://github.com/Victormaldines/laPizza/assets/62166234/9dc58e38-3901-4730-b6be-2e54120f97ec)
_Tela do carrinho com revisão das pizzas adicionadas pelo cliente e criação do pedido_

### Pedidos (cliente)
![tela_customer_orders](https://github.com/Victormaldines/laPizza/assets/62166234/e468de3d-c3be-4add-9407-83f1defe355e)
_Tela de pedidos com revisão dos pedidos criados pelo cliente incluindo quantidade de itens, data, status e preço final do pedido_

### Cardápio (administrador)
![tela_admin_menu](https://github.com/Victormaldines/laPizza/assets/62166234/8ebd8e96-69e1-4f8a-b8b5-ba1965afeb69)
_Tela do cardápio com opção de criação, edição e remoção de produtos_

### Produto - Criação (administrador)
![tela_admin_product_create](https://github.com/Victormaldines/laPizza/assets/62166234/42e7b430-2fd7-4b89-98a3-8d5d743cf1d7)
_Tela de criação de produto com possibilidade de adição da foto diretamente no formulário (caso não seja adicionada nenhuma, um placeholder é mantido)_ 

#### Produto - Criação - Foto (administrador)
![tela_admin_product_create2](https://github.com/Victormaldines/laPizza/assets/62166234/31a35006-a737-4590-abd6-5537c8498541)
_Feature de adição de foto suportando arquivos .png e .jpg_

### Produto - Atualização (administrador)
![tela_admin_product_update](https://github.com/Victormaldines/laPizza/assets/62166234/7130bc44-8987-45f6-b9b4-1bcb1143ffc2)
_Tela de atualização de informações sobre o produto, tais como nome, ingredientes, descrição, preço e foto_



