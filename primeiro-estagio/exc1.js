/*

1. Criar um array de nomes
- Crie um array com 5 nomes.
- Exiba todos os nomes no console usando um for.

*/

let nomes = ["Thales", "Júlio", "Otávio", "Alisson", "Humberto"]

for (let i = 0; i < nomes.length; i++) {

    console.log(`Nome ${i + 1}: ${nomes[i]}`)

}

/*

2. Criar um objeto aluno
- O objeto deve ter pelo menos: `nome`, `idade` e `curso`.
- Exiba no console uma frase como:
    
    "Maria tem 22 anos e faz Engenharia."

*/

let aluno = {

    nome: "Thales",
    idade: 18,
    curso: "ADS"

}

console.log(`${aluno.nome} tem ${aluno.idade} anos e faz ${aluno.curso}`)

/*

3. Trabalhando com um array de alunos

- Crie um array com 3 objetos de alunos.
- Mostre no console apenas os nomes dos alunos usando for.
- Mostre apenas os alunos de um curso específico (ex.: Engenharia).
- (Desafio extra) Crie uma função que receba o array de alunos e calcule a média das idades.

*/

let alunos = [

    {
        nome: "Thales",
        idade: 18,
        curso: "ADS"
    },

    {
        nome: "Júlio",
        idade: 19,
        curso: "Engenharia"
    },

    {
        nome: "Otávio",
        idade: 19,
        curso: "ADS"
    }

]

for (let i = 0; i < alunos.length; i++) {

    console.log(alunos[i].nome)

}

for (let i = 0; i < alunos.length; i++) {

    if (alunos[i].curso === "Engenharia") {

        console.log(alunos[i])

    }

}

function mediaIdades(lista) {

    let soma = 0

    for (let aluno of alunos) {

        soma += aluno.idade

    }

    let media = soma / lista.length

    console.log(`Média das idades: ${media.toFixed(1)}`)

}

mediaIdades(alunos)