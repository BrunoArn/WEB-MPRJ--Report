"use client";

import { useMemo, useState } from "react";

import { CategoriesBar } from "@/components/CategoriesBar";
import { ReportList } from "@/components/ReportList";
import { reports, categories } from "@/components/reports.mock";

export default function ReportSection() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredReports = useMemo(() => {
        if (selectedCategory === "Todos") {
            return reports;
        }
        return reports.filter(
            (report) => report.category === selectedCategory
        );
    }, [selectedCategory]);


    return (
        <section className="bg-background px-5 py-8 md:px-8">
            <div className="mx-auto max-w-7xl space-y-8">
            <CategoriesBar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />
            <ReportList reports={filteredReports} />
            </div>
        </section>
    )
}