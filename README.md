<h1 align="center"> MelhorCelular API 📱</h1>

API de gerenciamento de cadastro de celulares.

Com essa API é possível realizar as seguintes operações:
- ```Cadastrar``` um celular.
- ```Listar``` todos os celulares.
- ```Ver``` apenas um celular.
- ```Deletar``` o cadastro do celular.
- ```Atualizar``` informações do cadastro do celular.

#### Tecnologias - ⚙️

Desenvolvida utilizando ```Node``` + ```Express``` e ```PostgreSql``` como base de dados. Usamos a lib ```pg``` para fazer coneção com o baco de dados, ```uuid``` para gerar o code do cadastro e ```Dotenv``` para o controle de váriaveis de ambiente.

|Tech|Versão|
|----|------|
|```Node```|v14.17.0|
|```Express```|v4.17.1|
|```pg```|v8.7.1|
|```uuid```|v8.3.2|
|```Dotenv```|v10.0.0|

#### Consumindo a API ⛓️

A API se encontra hospedada então pode consumir seguindo a seguinte tabela:

|Método| Url |Desrição|
|------|-----|--------|
|GET|```https://melhorcelular-api.herokuapp.com/phones```|Listar todos os celulares|
|GET| ```https://melhorcelular-api.herokuapp.com/phones/:code```|Listar um celular|
|POST|```https://melhorcelular-api.herokuapp.com/phones```|Criar um novo celular|
|PUT|```https://melhorcelular-api.herokuapp.com/phones/:code```|Atualizar um celular|
|DELETE|```https://melhorcelular-api.herokuapp.com/phones/:code```|Deletar um celular|

**Exemplo de body para os metodos de Criação/Atualização**

```
{
  "model": "Samsung A20",
  "price": "1599.99",
  "brand": "Samsung",
  "startDate": "20/10/2021",
  "endDate": "23/12/2021",
  "color": "BLACK",
}
```

**⚠️ Importante:**
O atributo ```code``` será gerado automáticamente pela API no momento de criação do cadastro, logo não é necessário passá-lo no body.
Para saber qual o code de um cadastro especifico faça uma requisição de listagem de todos os cadastros. Cada cadastro será listado com seu atributo ```code``` como no exemplo abaixo:
```
{
  "model": "Samsung A20",
  "price": "1599.99",
  "brand": "Samsung",
  "startDate": "20/10/2021",
  "endDate": "23/12/2021",
  "color": "BLACK",
  "code": "b433aec3"
}
```

## Contatos 📬

- [LinkedIn](https://www.linkedin.com/in/herbert-henrique-b8aaa91a4/)
- [Instagram](https://www.instagram.com/bert.js/)

---
feito por [BertDev](https://github.com/bertdev) 🧙‍♂️
