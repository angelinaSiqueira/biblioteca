# 🔧 Aquecimento - Sistema de Biblioteca Simples

Desenvolver uma aplicação simples de gerenciamento de uma **biblioteca**. O foco aqui é praticar os conceitos fundamentais de **Programação Orientada a Objetos (POO)** com **TypeScript**.

## 🎯 Objetivo

Modelar uma biblioteca com funcionalidades básicas de cadastro e empréstimo de livros. Você deverá utilizar classes, interfaces e métodos para representar livros, leitores e a biblioteca em si.

---

## 📚 Regras do Desafio

### 1. Leitor

Cada leitor deve possuir:

- Nome completo
- ID único
- Telefone
- Quantidade máxima de livros que pode pegar emprestado (por padrão: 3)

### 2. Livro

Cada livro deve conter:

- Título
- Autor
- ISBN
- Status (Disponível ou Emprestado)

### 3. Biblioteca

A biblioteca deverá:

- Cadastrar leitores
- Cadastrar livros
- Permitir empréstimos (se o livro estiver disponível e o leitor não tiver atingido o limite)
- Permitir devoluções de livros

---

## 🧠 Conceitos que você deve aplicar

- Classes com atributos e métodos
- Interfaces para abstração (`ILeitor`, `ILivro`)
- Listas para armazenar leitores e livros
- Validações (ex: não emprestar um livro que já está emprestado)
- Métodos como:
  - `emprestarLivro(leitorId: number, isbn: string)`
  - `devolverLivro(leitorId: number, isbn: string)`
  - `listarLivrosDisponiveis()`

---

## ✅ Entrega

- Código em TypeScript, com estrutura organizada
- Classes e interfaces separadas
- Testes mostrando as funcionalidades

