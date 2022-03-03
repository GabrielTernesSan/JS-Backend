/*
Declaração de função
function minhaFuncao(param){
    // bloco de código
}

minhaFuncao("param");

*/
//Expressão de função || Função anonima

const soma = function (num1, num2) { return num1 + num2 }
console.log(soma(1, 1))


//Diferença principal


console.log(apresentar()) //**Funciona**

function apresentar(){
    return "Olá!";
}


//console.log(soma(1, 1)) **Erro**
//const soma = function (num1, num2) { return num1 + num2 }

/*
Quando fizemos a declaração de soma com o const, ela se comporta igual uma variável. E como uma variável no JavaScript, nós não podemos usar ela, a não ser que já tenhamos passado por ela, iniciado ela alguma vez.

A exceção disso é o caso das funções que declaramos com um nome ou as var. Nesse caso, o interpretador do JavaScript vai passar pelo nosso código e puxar todas essas declarações para o topo do nosso código. Então, ele vai, primeiro, iniciar todas essas declarações e todas as nossas var, e depois vai executar o nosso código. Então, não temos esse problema, não temos esse perigo.
*/