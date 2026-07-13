export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background">
            <div className="mx-auto grid min-h-70 max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 md:grid-cols-[1fr_520px] md:px-8 md:py-12">
                <div className="relative z-10 max-w-xl">
                    <p className="mb-2 text-xs font-extrabold uppercase text-primary-red">
                        Acervo de
                    </p>
                    <h1 className="text-4xl font-black uppercase leading-[0.95] text-[#303036] md:text-5xl">
                        Relatórios <br /> Periciais
                    </h1>
                    <p className="mt-5 max-w-md text-sm leading-6 text-[#74747c]">
                        Consulte relatórios digitais produzidos pela DEDIT com agilidade,
                        segurança e confiabilidade.
                    </p>

                    {/*formulario de pesquisa*/}
                    <div className="mt-7 h-12 max-w-xl rounded-md border border-[#e6dedb] bg-white shadow-sm" />
                </div>

                {/* Visual */}
                <div className="relative hidden min-h-60 items-center justify-center md:flex">
                    <div className="absolute h-90 w-90 rounded-full border border-primary-red/10" />
                    <div className="absolute h-70 w-70 rounded-full border border-primary-red/20" />
                    <div className="absolute h-50 w-50 rounded-full border border-primary-red/35" />

                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-primary-red/30 bg-white shadow-sm">
                        <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-primary-red text-4xl font-bold text-primary-red">
                            ID
                        </div>
                    </div>

                    <div className="absolute left-8 top-8 h-11 w-11 rounded-full border border-[#eee7e4] bg-white shadow-sm" />
                    <div className="absolute right-10 top-5 h-11 w-11 rounded-full border border-[#eee7e4] bg-white shadow-sm" />
                    <div className="absolute bottom-8 left-24 h-2 w-2 rounded-full bg-primary-red" />
                    <div className="absolute right-24 top-20 h-1.5 w-1.5 rounded-full bg-primary-red" />
                </div>
                {/* Background Blobs */}

            </div>
        </section>
    );
}