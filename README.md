

[TOC]



# JavaScript para Back-end

## Variáveis

Quando um programa precisa reter um valor para uso futuro, ele atribui o valor a (ou “armazena” o dado em) uma variável. As variáveis têm **nomes** e permitem o uso desses nomes em nossos programas para se referir a valores. A maneira como as variáveis funcionam é outra característica fundamental de qualquer linguagem de programação.

Os tipos de JavaScript podem ser divididos em duas categorias: tipos **primitivos** e tipos de **objetos**. Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como **strings**) e valores booleanos (conhecidos como **booleanos**).

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

`camelCase`: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: `minhaVar` ou `senhaDoUsuario`. **Esta é a convenção utilizada pelo JavaScript para variáveis e funções.**

`snake_case`: Os espaços são substituídos pelo caractere `_` (underline), com todas as palavras em letra minúscula. Por exemplo: `minha_variavel` ou `senha_do_usuario`.

`kebab-case`: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: `minha-var` ou `senha-do-usuario`. **Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.**

`PascalCase`: Similar ao `CamelCase`, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: `MinhaVar` ou `SenhaDoCliente`.

### Hoisting

``````javascript
var exibeMensagem = function() { 
    var mensagemForaDoIf = 'Caelum'; 
    if(true) { 
        var mensagemDentroDoIf = 'Alura'; 
        console.log(mensagemDentroDoIf)// Alura ;
    } 
    console.log(mensagemForaDoIf); // Caelum 

    console.log(mensagemDentroDoIf); // Alura 
}

var exibeMensagem = function() { 
    mensagem = 'Alura'; 
    console.log(mensagem); 
    var mensagem;
}
``````

Em JavaScript, toda variável é **“elevada/içada” (hoisting)** até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

No nosso exemplo acima, como a variável `mensagemDentroDoIf` está dentro de uma *function*, a declaração da mesma é elevada (*hoisting*) para o topo do seu contexto, ou seja, para o topo da *function*.

É por esse mesmo motivo que “é possível usar uma variável antes dela ter sido declarada”: em tempo de execução a variável será elevada (*hoisting*) e tudo funcionará corretamente.

### Var  |  Let  |  Const

**VAR**

No caso da palavra-chave `var`, além da variável ser içada (*hoisting*) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor).

Às vezes, queremos declarar variáveis que serão utilizadas apenas dentro de um pequeno trecho do nosso código. Ter que lidar com o escopo de função das variáveis declaradas com `var` (escopo abrangente) pode confundir a cabeça até de programadores mais experientes.

**LET**

Foi pensando em trazer o escopo de bloco (tão conhecido em outras linguagens) que o ECMAScript 6 destinou-se a disponibilizar essa mesma flexibilidade (e uniformidade) para a linguagem.

Através da palavra-chave `let` podemos declarar variáveis com escopo de bloco.

`````javascript
var exibeMensagem = function() {
     if(true) { 
         var escopoFuncao = 'Caelum'; 
         let escopoBloco = 'Alura';

        console.log(escopoBloco); // Alura 
    } 
    console.log(escopoFuncao); // Caelum 
    console.log(escopoBloco); // erro
}

exibeMensagem(); // Imprime 'Alura', 'Caelum' e dá um erro
`````

Veja que quando tentamos acessar uma variável que foi declarada através da palavra-chave `let` fora do seu escopo, o erro *Uncaught ReferenceError: escopoBloco is not defined* foi apresentado.

**CONST**

Supondo que temos uma variável que queremos garantir sua inicialização com um determinado valor, como podemos fazer isso no JavaScript sem causar uma inicialização *default* com *undefined*?

Para termos esse tipo de comportamento em uma variável no JavaScript, podemos declarar constantes por meio da palavra-chave `const`. 

`````javascript
void function(){ 
    const mensagem = 'Alura'; 
    console.log(mensagem); // Alura
    mensagem = 'Caelum'; 
}();
`````

O código acima gera um *Uncaught TypeError: Assignment to constant variable*, pois o comportamento fundamental de uma constante é que uma vez atribuído um valor a ela, este não pode ser alterado.

Assim como as variáveis declaradas com a palavra-chave `let`, constantes também tem escopo de bloco.

Além disso, constantes devem ser inicializadas obrigatoriamente no momento de sua declaração.

### Conclusão

![](http://www.constletvar.com/const-vs-let-vs-var.png)

## Tipos de dados

### Tipos primitivos

#### Number

``````java
// tipo Number
const meuNumero = 3;

const num1 = 1;
const num2 = 2;

// const operacaoMatematica = num1 + num2;
// const operacaoMatematica = num1 * num2;
// const operacaoMatematica = num1 - num2;
const operacaoMatematica = num1 / num2;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = num1 / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN → Not A Number (não é um número)

const alura = "Alura";

console.log(alura * num1)
``````

#### String

O JavaScript traz em sua biblioteca-base vários métodos que usamos para manipular strings de texto: alterar de maiúsculas para minúsculas, contar quantas letras tem uma palavra, retirar espaços, juntar duas strings, etc.

Vamos pensar em alguns exemplos práticos para fazer esse tipo de alteração. Por exemplo, para padronizar uma comparação entre strings:

``````javascript
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
``````

Nós, como pessoas, conseguimos perceber o valor das variáveis `cidade` e `input` como sendo da mesma cidade, Belo Horizonte. Porém, para o JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, **o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos**.

Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.

```````javascript
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
```````

Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade `length` pode ser utilizada para sabermos quantos caracteres uma string contém:

```````javascript
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
```````

#### Booleano

No JavaScript, assim como na maioria das linguagens de programação, é possível armazenar dados na memória do computador através de variáveis.

Esses dados podem ser palavras, números ou valores lógicos como “verdadeiro” ou “falso” (chamados de tipos booleanos)

### Null e Undefined

#### Null

O `null` é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

``````javascript
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}
``````

#### Undefined

O `undefined`  também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto `null` é um valor atribuído a uma variável que existe e foi iniciada, `undefined` se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

```````javascript
let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined
```````

No cotidiano é comum considerar `undefined` como uma ausência de valor “inesperada” (causada por um *bug* ou erro no código) e `null` como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor `null`.



## Operadores

### "==" e "==="

O operador "==" faz uma conversão implícita antes de fazer a comparação. Já o operador "===" faz as comparações sem fazer nenhum tipo de conversão, ou seja, ele compara o tipo das variáveis também.

A lista de operadores é extensa e há muitas formas de utilizá-los. Além das operações matemáticas básicas, do `=` para atribuição de valor em uma variável e das comparações com `==` e `===`, utilizamos operadores para diversas outras tarefas de código, por exemplo:

- `||`: Operador “ou”, retorna `true` caso uma condição seja válida;
- `&&`: Operador “e”, retorna `true` somente se todas as condições forem válidas;
- `!=` e `!==`: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que `==` e `===` retornam `true` ou `false`.

### Operador ternário

```javascript
//Condição ? true : false
const idadeMinima = 18;
const idadeCliente = 16;

console.log(idadeCliente >= idadeMinima?"cerveja":"suco")
```



## Funções

As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível.

`````javascript
// 1) declara a função

function imprime(texto) {
    console.log(texto);
}

// 2) executa a função

imprime("Olá");
imprime('outro texto');
`````

### Funções matemáticas

O JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

- `Math.round()`: Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
  - `Math.round(4.3)` retorna 4
  - `Math.round(3.85)` retorna 4
  - `Math.round(2.5)` retorna 3, quando o número termina com 0.5 a função arredonda para cima
- `Math.ceil()`: Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
  - `Math.ceil(5.2)` retorna 6
- `Math.floor()`: Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
  - `Math.floor(5.2)` retorna 5
- `Math.trunc()` : Desconsidera os números decimais, o que é conhecido como truncamento.
  - `Math.trunc(4.3)` retorna 4
  - `Math.trunc(4.8)` retorna 4
- `Math.pow()` : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
  - `Math.pow(4 , 2)` retorna 4^2 = 16
  - `Math.pow(2.5 , 1.5)` retorna 2.5^(3/2) = 3.9528 ...
- `Math.sqrt()` : Retorna a raiz quadrada de um número.
  - `Math.sqrt(64)` retorna 8
- `Math.min()`: Retorna o menor valor entre os argumentos.
  - `Math.min(0, 150, 30, 20, -8, -200)` retorna -200
- `Math.max()`: Retorna o maior valor entre os argumentos.
  - `Math.max(0, 150, 30, 20, -8, -200)` retorna 150
- `Math.random()`: Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
  - `Math.random()` retorna 0.7456916270759015
  - `Math.random()` retorna 0.15449802102729304
  - `Math.random()` retorna 0.4214269561951203

### Console

Embora seja o mais utilizado, `.log()` é um dos vários métodos que podemos utilizar para exibir informações na chamada “saída padrão” - o terminal - enquanto estamos desenvolvendo uma aplicação. A palavra *log* significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.

Entre os outros métodos, existem:

- `console.error()` para exibir mensagens de erro;
- `console.table()` para visualizar de forma mais organizada informações tabulares;
- `console.time()` e `console.timeEnd()` para temporizar período que uma operação de código leva para ser iniciada e concluída;
- `console.trace()` para exibir a *stacktrace* de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
