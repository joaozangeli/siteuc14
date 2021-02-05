var idadeLuiz = 24;
var idadeCarlos = 24;
var idadeJose = 10;



console.log(idadeLuiz + idadeCarlos - idadeJose)

for (var i = 0; i <= idadeLuiz; i++) {
    console.log(i)
}

/*
OPERACOES SIMPLES
*/

var primeiroNumero = 2;
var segundoNumero = 4;

var resultado;


resultado = primeiroNumero + segundoNumero;

console.log("soma: " + resultado)

resultado = segundoNumero - primeiroNumero;

console.log("subtracao: " + resultado)

resultado = segundoNumero / primeiroNumero;

console.log("divisao: " + resultado)

resultado = primeiroNumero * segundoNumero;

console.log("multiplicacao: " + resultado);

var media = (primeiroNumero + segundoNumero) / 2;
console.log("media: " + media)


/*
ARRAYS
*/


var listaDeNomes = ["joao", 100, "matheus"];
console.log(listaDeNomes)

listaDeNomes[1] = 10;
console.log(listaDeNomes)

listaDeNomes[0] = "lucas";
console.log(listaDeNomes)



var solicitacao = {
    data: "04/05/2021",
    nome: "joao",
    status: "aberto"
}
console.log(solicitacao)

var computador = {
    cor: "preto",
    modelo: "lenovo",
    processador: "amd"
}
console.log(computador)

console.log(computador.processador)
console.log(computador.cor)
console.log(computador.modelo)

var idadePai = 40;
var idadeFilho = 14;
var idadeMae = 39;

if (idadeFilho >= 14) {
    console.log("A idade do filho é maior ou igual que 14 anos")
} else {
    console.log("a idade do filho é menor que 14 anos")
}


if (idadeFilho != 14) {
    console.log("A idade do filho é diferente que 14 anos")
} else {
    console.log("a idade do filho é 14 anos")
}





/*
UMA EMPRESA DE TRANSPORTE DE PESSOAS POR APLICATIVO DESEJA CRIAR UM CADASTRO DE MOTORISTA.
NESTE CADASTRO, O MOTORISTA PRECISA ENVIAR ALGUNS DOCUMENTOS/INFORMAÇÕES, TAIS COMO: NOME, ATESTADO ANTECEDENTES, IDADE E NACIONALIDADE
ATRAVES DO JS, CRIE UM CODIGO QUE RETORNE AO USUARIO SE ELE PODE OU NAO SE CADASTRAR, SABENDO QUE O MOTORISTA :
1 - NAO PODE TER ATESTADO DE ANTECEDENTES (SEM FIXA CRIMINAL)
2 - PRECISA SER MAIOR QUE 18 ANOS
3 - PRECISA SER BRASILEIRO OU ARGENTINO

OBS: O CODIGO DEVE MOSTRAR AO USUARIO O MOTIVO PELO QUAL NAO PODE SER CADASTRADO
*/

var cadastro = {
    nome: "carlos",
    antecedentes: false,
    idade: 25,
    nacionalidade: "brasileiro"
}

//1a forma


if (cadastro.antecedentes == false) {
    console.log("Antecedentes aprovados")
} else {
    console.log("Antecedentes nao aprovados.")
}

if (cadastro.idade >= 18) {
    console.log("Sua idade foi aprovada!")
} else {
    console.log("Sua idade não foi aprovada.")
}

if (cadastro.nacionalidade == "brasileiro") {
    console.log("nacionalidade aprovada")
} else {
    console.log("nacionalidade nao aprovada.")
}

//2a forma


if (cadastro.antecedentes == false) {
    if (cadastro.idade >= 18) {
        if (cadastro.nacionalidade == "brasileiro") {
            console.log("Seu cadastro foi aprovado.")

        } else {
            console.log("nacionalidade nao aprovada")
        }
    } else {
        console.log("idade nao aprovada")
    }
} else {
    console.log("antecedentes negados")
}

//3a forma


if (cadastro.antecedentes == false && cadastro.idade >= 18 && cadastro.nacionalidade == "brasileiro") {
    console.log("Seu cadastro foi aprovado")
} else {
    console.log("Cadastro nao aprovado")
}




































/*


var primeiro = document.getElementById('primeiro');

primeiro.onclick = function() {
    alert('OPS')
}


*/