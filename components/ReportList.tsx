import type { Report } from "./types";

type ReportListProps = {
    reports: Report[];
    limit?: number;
}

export function ReportList({ reports, limit = 4 }: ReportListProps) {
    const visibleReports = reports.slice(0, limit);
    return (
        <div>
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {visibleReports.map((report) => (
                    <article
                        key={report.id}
                        className="rounded-md border border-[#ebe6e3] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-red/40 hover:shadow-md"
                    >
                        {/* Report Icon */}
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

                        <p className="mt-3 text-xs text-[#8a8a92]">
                            {report.location} - {report.date}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    )
}