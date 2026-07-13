type CategoriesBarProps = {
    categories: string[];
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
}

export function CategoriesBar({
    categories,
    selectedCategory,
    onCategorySelect,
}: CategoriesBarProps) {
    return (
        <div>
            <p className="text-xs font-extrabold uppercase text-primary-red">
                Acervo
            </p>
            <h2 className="mt-1 text-xl font-black text-[#303036]">
                Categorias de relatórios
            </h2>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => {
                    const isActive = category === selectedCategory;

                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => onCategorySelect(category)}
                            className={`shrink-0 rounded-md border px-4 py-2 text-sm font-bold transition ${isActive
                                ? "border-primary-red bg-primary-red text-white"
                                : "border-[#e6e2df] bg-white text-[#5f6067] hover:border-primary-red/40 hover:text-primary-red"
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}