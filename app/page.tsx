"use client";

import Hero from "@/components/Hero";
import { CategoriesBar } from "@/components/CategoriesBar";
import { ReportList } from "@/components/ReportList";
import { reports, categories } from "@/components/reports.mock";


export default function Home() {
  return (

    <main>
      <Hero />
      <CategoriesBar 
      categories={categories}
      selectedCategory="Todos"
      onCategorySelect={(category) => console.log("Categoria selecionada:", category)}
      />
      <ReportList reports={reports} />
    </main>

  );
}
