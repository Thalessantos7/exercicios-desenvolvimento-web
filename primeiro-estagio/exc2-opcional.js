const livros = [

    {

        titulo: "O Hobbit",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        ano: 1937,
        preco: 45.90,
        disponivel: true

    },

    {

        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ficção",
        ano: 1949,
        preco: 39.90,
        disponivel: false

    },

    {

        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        categoria: "Romance",
        ano: 1899,
        preco: 29.90,
        disponivel: true

    },

    {

        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        categoria: "Fantasia",
        ano: 2001,
        preco: 54.90,
        disponivel: false

    },

    {

        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Romance",
        ano: 1943,
        preco: 25.00,
        disponivel: false

    },

    {

        titulo: "Duna",
        autor: "Frank Herbert",
        categoria: "Ficção",
        ano: 1965,
        preco: 59.90,
        disponivel: true

    }

];

// Etapa 1 — Listando os títulos dos livros.
console.log("=== Etapa 1 ===");
livros.forEach(livro => console.log(livro.titulo));

// Etapa 2 — Mostrando informações detalhadas com template strings.
console.log("\n=== Etapa 2 ===");

livros.forEach(livro => {
    console.log(`${livro.titulo} - ${livro.autor} - ${livro.categoria}`);
});

// Etapa 3 — Criando uma lista de títulos com map.
console.log("\n=== Etapa 3 ===");
const titulos = livros.map(livro => livro.titulo);
console.log(titulos);


// Etapa 4 — Criando uma lista de informações/descrições com map.
console.log("\n=== Etapa 4 ===");
const descricoes = livros.map(livro => `${livro.titulo} - ${livro.autor}`);
console.log(descricoes);


// Etapa 5 — Encontrando livros disponíveis com filter e forEach.
console.log("\n=== Etapa 5 ===");
console.log("Livros disponíveis:");

livros
    .filter(livro => livro.disponivel === true)
    .forEach(livro => console.log(livro.titulo));

// Etapa 6 — Filtrando por categoria específica.
console.log("\n=== Etapa 6 ===");

const categoriaSelecionada = "Fantasia";

console.log(`Livros de ${categoriaSelecionada}:`);

livros
    .filter(livro => livro.categoria === categoriaSelecionada)
    .forEach(livro => console.log(livro.titulo));


// Etapa 7 — Encontrando livros recentes (a partir de 2000).
console.log("\n=== Etapa 7 ===");
console.log("Livros publicados a partir de 2000:");

livros
    .filter(livro => livro.ano >= 2000)
    .forEach(livro => console.log(livro.titulo));

// Etapa 8 — Calculando o valor total do acervo com reduce.
console.log("\n=== Etapa 8 ===");

const valorTotal = livros.reduce((acc, livro) => acc + livro.preco, 0);

console.log(`Valor total dos livros: R$ ${valorTotal.toFixed(2)}`);


// Etapa 9 — Calculando o preço médio dos livros.
console.log("\n=== Etapa 9 ===");

const precoMedio = valorTotal / livros.length;

console.log(`Preço médio dos livros: R$ ${precoMedio.toFixed(2)}`);


// Etapa 10 — Combinando filter e map (Títulos dos disponíveis).
console.log("\n=== Etapa 10 ===");

const titulosDisponiveis = livros
    .filter(livro => livro.disponivel)
    .map(livro => livro.titulo);

console.log(titulosDisponiveis);

// Etapa 11 — Combinando filter e reduce (Valor total dos disponíveis).
console.log("\n=== Etapa 11 ===");

const valorDisponiveis = livros
    .filter(livro => livro.disponivel)
    .reduce((acc, livro) => acc + livro.preco, 0);

console.log(`Valor dos livros disponíveis: R$ ${valorDisponiveis.toFixed(2)}`);


// Etapa 12 — Criando um relatório completo.
console.log("\n=== Etapa 12 ===");
function gerarRelatorio(listaLivros) {

    const totalLivros = listaLivros.length;
    const disponiveisCount = listaLivros.filter(l => l.disponivel).length;
    const totalAcervo = listaLivros.reduce((acc, l) => acc + l.preco, 0);
    const mediaPreco = totalAcervo / totalLivros;

    console.log("===== RELATÓRIO DA BIBLIOTECA =====");
    console.log(`Total de livros: ${totalLivros}`);
    console.log(`Livros disponíveis: ${disponiveisCount}`);
    console.log(`Preço médio: R$ ${mediaPreco.toFixed(2)}`);
    console.log(`Valor total do acervo: R$ ${totalAcervo.toFixed(2)}`);
    console.log("\n--- LIVROS ---");
    listaLivros.forEach(l => console.log(`${l.titulo} - ${l.autor}`));

}

gerarRelatorio(livros);


// Desafio final — Contar livros por categoria usando filter.
console.log("\n=== Desafio Final ===");
function contarPorCategoria(listaLivros, categoria) {
    return listaLivros.filter(l => l.categoria === categoria).length;
}

const totalFantasia = contarPorCategoria(livros, "Fantasia");
console.log(`Livros de fantasia: ${totalFantasia}`);


// Desafio extra — Obter livros caros acima de um valor.
console.log("\n=== Desafio Extra ===");
function obterLivrosCaros(listaLivros, valor) {
    return listaLivros.filter(l => l.preco > valor);
}

const livrosCaros = obterLivrosCaros(livros, 50);
console.log("Livros acima de R$ 50:");
livrosCaros.forEach(l => console.log(`${l.titulo} - R$ ${l.preco.toFixed(2)}`));