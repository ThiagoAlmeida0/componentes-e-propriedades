interface CatalogFilter {
  filtroCategoria: string;
  setFiltroCategoria: (val: string) => void;
  precoMin: string;
  setPrecoMin: (val: string) => void;
  precoMax: string;
  setPrecoMax: (val: string) => void;
}

export default function CatalogFilter({
  filtroCategoria,
  setFiltroCategoria,
  precoMin,
  setPrecoMin,
  precoMax,
  setPrecoMax,
}: CatalogFilter) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <select
        value={filtroCategoria}
        onChange={(e) => setFiltroCategoria(e.target.value)}
        className="px-4 py-2 border rounded-md w-full md:w-1/3"
      >
        <option value="Todos">Todas as categorias</option>
        <option value="Fruta">Frutas</option>
        <option value="Legume">Legumes</option>
      </select>

      <div className="flex gap-2 w-full md:w-1/3">
        <input
          type="number"
          placeholder="Preço mín"
          value={precoMin}
          onChange={(e) => setPrecoMin(e.target.value)}
          className="px-4 py-2 border rounded-md w-1/2"
        />
        <input
          type="number"
          placeholder="Preço máx"
          value={precoMax}
          onChange={(e) => setPrecoMax(e.target.value)}
          className="px-4 py-2 border rounded-md w-1/2"
        />
      </div>
    </div>
  );
}
