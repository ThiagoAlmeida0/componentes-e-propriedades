"use client";

import Catalog from "@/components/Catalog";
import CatalogFilter from "@/components/CatalogFilter";
import { useState } from "react";

export default function Home() {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");

  const extrairPreco = (str: string) => {
    const num = parseFloat(str.replace("R$", "").replace(",", "."));
    return isNaN(num) ? 0 : num;
  };

  const produtos = [
    {
      nome: "Banana Prata",
      descricao: "Fruta tropical rica em potássio.",
      preco: "R$ 4,50 / kg",
      imagem: "https://placehold.co/600x400",
      categoria: "Fruta",
    },
    {
      nome: "Tomate Italiano",
      descricao: "Ideal para molhos e saladas.",
      preco: "R$ 6,20 / kg",
      imagem: "https://placehold.co/600x400",
      categoria: "Fruta",
    },
    {
      nome: "Alface Crespa",
      descricao: "Hortaliça fresca e crocante.",
      preco: "R$ 2,00 / unidade",
      imagem: "https://placehold.co/600x400",
      categoria: "Legume",
    },
    {
      nome: "Milho Verde",
      descricao: "Produto da safra atual.",
      preco: "R$ 1,30 / espiga",
      imagem: "https://placehold.co/600x400",
      categoria: "Legume",
    },
    {
      nome: "Mamão Formosa",
      descricao: "Doce e suculento, ideal para café da manhã.",
      preco: "R$ 3,80 / kg",
      imagem: "https://placehold.co/600x400",
      categoria: "Fruta",
    },
    {
      nome: "Batata Doce",
      descricao: "Fonte de energia e fibras.",
      preco: "R$ 3,20 / kg",
      imagem: "https://placehold.co/600x400",
      categoria: "Legume",
    },
    {
      nome: "Cenoura",
      descricao: "Rica em vitamina A, ótima para saladas.",
      preco: "R$ 2,90 / kg",
      imagem: "https://placehold.co/600x400",
      categoria: "Legume",
    },
    {
      nome: "Laranja Pera",
      descricao: "Excelente para sucos naturais.",
      preco: "R$ 2,70 / kg",
      imagem: "https://placehold.co/600x400",
      categoria: "Fruta",
    },
    {
      nome: "Abacate",
      descricao: "Fruta versátil e nutritiva.",
      preco: "R$ 5,50 / kg",
      imagem: "https://placehold.co/600x400",
      categoria: "Fruta",
    },
    {
      nome: "Repolho Roxo",
      descricao: "Rico em antioxidantes, ideal para saladas.",
      preco: "R$ 3,10 / unidade",
      imagem: "https://placehold.co/600x400",
      categoria: "Legume",
    },
  ];

  const produtosFiltrados = produtos.filter((produto) => {
    const categoriaMatch =
      filtroCategoria === "Todos" || produto.categoria === filtroCategoria;

    const preco = extrairPreco(produto.preco);
    const precoMinMatch = !precoMin || preco >= parseFloat(precoMin);
    const precoMaxMatch = !precoMax || preco <= parseFloat(precoMax);

    return categoriaMatch && precoMinMatch && precoMaxMatch;
  });

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Catálogo de Produtos
        </h1>

        <CatalogFilter
          filtroCategoria={filtroCategoria}
          setFiltroCategoria={setFiltroCategoria}
          precoMin={precoMin}
          setPrecoMin={setPrecoMin}
          precoMax={precoMax}
          setPrecoMax={setPrecoMax}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {produtosFiltrados.map((item, index) => (
            <Catalog key={index} produto={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
