import { Biblioteca } from "./Biblioteca";
import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

const biblioteca = new Biblioteca();

const leitor1 = new Leitor(1, 'João Silva', '9999-9999');
biblioteca.cadastrarLeitor(leitor1);

const livro1 = new Livro('1984', 'George Orwell', '123');
const livro2 = new Livro('Dom Casmurro', 'Machado de Assis', '456');
biblioteca.cadastrarLivro(livro1);
biblioteca.cadastrarLivro(livro2);

console.log(biblioteca.emprestarLivro(1, '123')); 
console.log(biblioteca.emprestarLivro(1, '123')); 
console.log(biblioteca.emprestarLivro(1, '456'));
console.log(biblioteca.listarLivrosDisponiveis());
console.log(biblioteca.devolverLivro(1, '123'));
console.log(biblioteca.listarLivrosDisponiveis());

// Configuração do git

//$ git config --global user.email "meuemail@gmail.com"

// Listar todas as configurações

//$ git config --list

// Criar um repositório local

//$ git init

// Verificar arquivos

//$ git status

// Adicionar um arquivo

//$ git add arquivo.txt

// variações do git add

//$ git add-all

//$ git add-a

//$ git add.

// Salvar e rastrear uma alteração

//$ git commit -m "Frase curta explicando a modificação realizada"

// Verificar históricos de alterações

//$ git log

// Clonar repositório

//$ git clone

//https://github.com/angelinaSiqueira/atividade-sistema-de-gerenciamento-de-produtos-ecologicos.git

// Verificar status dos arquivos

//$ git status

// Verificar modificações

//$ git diff

// Adicionar arquivos

//$ git add arquivo.txt

// Fazer commit

//$ git commit -m "primeiro commit"

// Enviar para repositório remoto

//$ git push origin nome-branche

// Enviar para repositório remoto

//Atenção: se na seu repositório local a branch principal é master, atualize para

//main para que

//o push no repositório que você criou e clonou funcione

//$ git checkout-b main

//$ git branch -M main

//$ git push-u origin main