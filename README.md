# Anticipation Calculator (calculadora de antecipação)

Olá, seja bem vindo ao read.me deste projeto!

## Case (História)

Hoje nossos clientes precisam saber quanto custa antecipar uma transação, e para isso, precisamos desenvolver uma calculadora de antecipação para que os mesmos consigam saber quais valores receberão caso optem por antecipar o recebimento.

Você deverá desenvolver o teste seguindo os requisitos abaixo.

## Requisitos

- Use componentização.
- Os períodos de recebimento devem ser configuráveis já que a API pode receber uma lista de periódos para realizar os cálculos.

## Front

O layout proposto para essa calculadora pode ser visto no link abaixo.

[Link para o layout](https://www.figma.com/file/ipV80xJ29T7rdz0Aoo7xWv/Antecipation?node-id=0%3A1) - **Lembrando que a sua aplicação deve seguir o layout pixel by pixel**

## API

Você consumirá uma API já existente no endereço abaixo. Em seguida há uma especificação simplificada dela.

`https://frontend-challenge-7bu3nxh76a-uc.a.run.app`

### Post

| Parâmetro      | Obrigatório? | Tipo            | Descrição                                                                              |
| -------------- | ------------ | --------------- | -------------------------------------------------------------------------------------- |
| `amount`       | Sim          | `number`        | Valor total da transação em centavos                                                   |
| `installments` | Sim          | `number`        | Número de parcelas                                                                     |
| `mdr`          | Sim          | `number`        | É a taxa cobrada pelas adquirentes sobre cada transação de cartão de crédito ou débito |
| `days`         | Não          | `Array<number>` | Uma lista com os dias a serem calculadas as antecipações                               |

### Exemplo

```bash
$ curl --request POST \
  --url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
  --header 'content-type: application/json' \
  --data '{
	"amount": 15000,
	"installments": 3,
	"mdr": 4
}'

{"1":13267,"15":13536,"30":13824,"90":14400}
```

### Exemplo informando períodos

```bash
$ curl --request POST \
  --url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
  --header 'content-type: application/json' \
  --data '{
	"amount": 15000,
	"installments": 3,
	"mdr": 4,
	"days": [30, 60, 90]
}'

{"30":13824,"60":14208,"90":14400}
```

### Colocando em execução

1° - Faça o clone deste repositório.

2° - Ao iniciar o no seu Vscode (ou outro que tenha familiaridade), execute o comando - "yarn" para fazer o download de todas as dependências.

3° - Execute o comando yarn start para inicializar o projeto!

;)
