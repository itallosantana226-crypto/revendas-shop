export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="p-6 flex justify-between items-center border-b border-yellow-500">
        <h1 className="text-3xl font-bold text-yellow-500">
          Shop Revendas
        </h1>

        <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold">
          Carrinho
        </button>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Sua loja online de confiança
        </h2>

        <p className="text-gray-300 text-lg">
          Produtos de qualidade, várias marcas e preços especiais.
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full font-bold">
          Ver produtos
        </button>
      </section>

      <section className="p-8 grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-6 rounded-xl border border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-500">
            Produto 1
          </h3>
          <p className="mt-2">
            Descrição do produto
          </p>
          <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">
            Comprar
          </button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-500">
            Produto 2
          </h3>
          <p className="mt-2">
            Descrição do produto
          </p>
          <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">
            Comprar
          </button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-500">
            Produto 3
          </h3>
          <p className="mt-2">
            Descrição do produto
          </p>
          <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">
            Comprar
          </button>
        </div>

      </section>

      <footer className="p-6 text-center border-t border-yellow-500">
        <p>
          WhatsApp: +55 62 99479-7199
        </p>

        <p className="mt-2 text-gray-400">
          © 2026 Shop Revendas
        </p>
      </footer>

    </main>
  );
}
