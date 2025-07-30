interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  categoria: string;
}

export default function Catalog({ produto }: { produto: Produto }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-44 object-cover rounded-t-2xl"
      />

      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-900">{produto.nome}</h2>
        <p className="text-sm text-gray-600">{produto.descricao}</p>
        <span className="text-green-600 font-medium text-base">
          {produto.preco}
        </span>
      </div>
    </div>
  );
}
