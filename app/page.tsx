import Hero from "@/components/Hero";

{/*Place holder for categories */ }
const categories = [
  "Todos",
  "Computadores",
  "Dispositivos móveis",
  "Mídias digitais",
  "Redes sociais",
  "Documentos",
];
{/*Place holder for reports */ }
const reports = [
  {
    id: "5024F - 2078L",
    title: "Análise de dispositivo móvel",
    category: "Dispositivos móveis",
    location: "Rio de Janeiro",
    date: "12/04/2024",
  },
  {
    id: "3378F - 1879L",
    title: "Extração de dados em mídia digital",
    category: "Mídias digitais",
    location: "Niterói",
    date: "18/04/2024",
  },
  {
    id: "5987F - 3114L",
    title: "Perícia em ambiente computacional",
    category: "Computadores",
    location: "Campos dos Goytacazes",
    date: "02/05/2024",
  },
  {
    id: "5587F - 3194L",
    title: "Perícia em ambiente computacional",
    category: "Computadores",
    location: "Campos dos Goytacazes",
    date: "02/05/2024",
  },
  {
    id: "3357F - 1337L",
    title: "Perícia em ambiente computacional",
    category: "Computadores",
    location: "Campos dos Goytacazes",
    date: "02/05/2024",
  }
];

export default function Home() {
  return (

    <main>
      <Hero />
      <Categories />
      <ReportList />
    </main>

  );
}

function ReportList() {
  return (
    <section className="bg-background px-5 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-extrabold text-[#303036]">
            Relatórios Recentes
          </h2>

          <button
            type="button"
            className="text-xs font-bold text-primary-red hover:underline"
          >
            Ver todos &gt;
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reports.map((report) => (
              <article
                key={report.id}
                className="rounded-md border border-[#ebe6e3] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-red/40 hover:shadow-md"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#eadfdd] text-primary-red">
                    📄
                  </div>
                </div>

                <span className="inline-flex rounded bg-primary-red px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">
                  {report.category}
                </span>

                <h3 className="mt-3 text-sm font-bold text-[#303036]">
                  {report.id}
                </h3>

                <p className="mt-1 min-h-8 text-xs leading-4 text-[#5f6067]">
                  {report.title}
                </p>

                <p className="mt-3 text-xs text-[#8a8a92]">{report.date}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Próximos relatórios"
            className="absolute -right-4 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#ebe6e3] bg-white text-primary-red shadow-sm md:flex"
          >
            &gt;
          </button>
        </div>

      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="bg-background px-5 pt-8 md:px-8">
      {/*Upper Text*/}
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase text-primary-red">
              Acervo
            </p>

            <h2 className="mt-1 text-xl font-black text-[#303036]">
              Categorias de relatórios
            </h2>
          </div>
        </div>

        {/*List of categories as buttons*/}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`shrink-0 rounded-md border px-4 py-2 text-sm font-bold transition ${index === 0
                ? "border-primary-red bg-primary-red text-white"
                : "border-[#e6e2df] bg-white text-[#5f6067] hover:border-primary-red/40 hover:text-primary-red"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
