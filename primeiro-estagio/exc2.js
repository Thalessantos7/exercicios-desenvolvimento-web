const alunos = [

    {

        nome: "Rafael",
        idade: 22,
        curso: "ADS",
        notas: [7.0, 8.0, 10.0]

    },

    {

        nome: "Lucas",
        idade: 20,
        curso: "Engenharia",
        notas: [6.0, 8.2, 9.0]

    },

    {

        nome: "Fernanda",
        idade: 23,
        curso: "ADS",
        notas: [7.0, 8.5, 7.0]

    }

]

// 1. Mostrar nomes dos alunos do curso de ADS.
alunos.forEach(aluno => {

    if (aluno.curso == "ADS") {

        console.log(aluno.nome)

    }

})

// 2. Mostrar nomes dos alunos e suas médias do curso de ADS.
alunos.forEach(aluno => {

    console.log(`Aluno: ${aluno.nome}`)

    let soma = 0
    aluno.notas.forEach(nota => soma += nota)

    console.log(`Média: ${(soma / aluno.notas.length).toFixed(1)} \n`)

})

// 3. Mostrar nome do aluno com maior media.

let nomeEMediaAlunos = []

alunos.forEach(aluno => {

    let soma = 0
    aluno.notas.forEach(nota => soma += nota)

    let media = soma / aluno.notas.length

    nomeEMediaAlunos.push([aluno.nome, media.toFixed(1)])

})

let nomeMaiorMedia = nomeEMediaAlunos.reduce(function (ac, at) {

    if (at[1] > ac[1]) return at
    else return ac

})

console.log(nomeMaiorMedia[0])

// 4. Mostrar nome do aluno com maior media de ADS.
let alunosADS = alunos.filter(aluno => aluno.curso == "ADS")
let mediaENomeAlunosADS = []

alunosADS.forEach((aluno) => {

    let soma = 0
    aluno.notas.forEach(nota => soma += nota)

    let media = soma / aluno.notas.length
    mediaENomeAlunosADS.push([aluno.nome, media])

})

let nomeMaiorMediaADS = mediaENomeAlunosADS.reduce((ac, at) => {

    if (at[1] > ac[1]) return at
    else return ac

})

console.log(nomeMaiorMediaADS[0])

// 5. Mostrar nome do aluno mais jovem de Engenharia.
let alunosEngenharia = alunos.filter(aluno => aluno.curso == "Engenharia")
let idadeENomeAlunosEng = []

alunosEngenharia.forEach((aluno) => {

    idadeENomeAlunosEng.push([aluno.nome, aluno.idade])

})

let alunoMaisJovemEng = idadeENomeAlunosEng.reduce((ac, at) => {

    if (at[1] < ac[1]) return at
    else return ac

})

console.log(alunoMaisJovemEng[0])

// 6. Mostrar a média da turma do curso de ADS.
let mediasAlunosADS = []

alunosADS.forEach((aluno) => {
    
    let soma = 0
    aluno.notas.forEach(nota => soma += nota)

    let media = soma / aluno.notas.length
    mediasAlunosADS.push(media)

})

let somaTotalMedias = mediasAlunosADS.reduce((ac, at) => ac + at, 0)
let mediaTurmaADS = somaTotalMedias / mediasAlunosADS.length

console.log(mediaTurmaADS.toFixed(1))

// 7. Mostrar nomes dos alunos e status (APROVADO, FINAL, REPROVADO).
alunos.forEach(aluno => {

    console.log(`Aluno: ${aluno.nome}`)

    let soma = 0
    aluno.notas.forEach(nota => soma += nota)

    let media = soma / aluno.notas.length
    console.log(`Média: ${media.toFixed(1)}`)

    if (media >= 7.0) console.log("Status: APROVADO")
    else if (media >= 5.0) console.log("Status: FINAL")
    else console.log("Status: REPROVADO")

})