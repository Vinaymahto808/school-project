import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, Download, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "All" | "Exam" | "Admission" | "Holiday" | "Circular" | "Results";

interface Notice {
  id: number;
  title: string;
  date: string;
  category: Category;
  desc: string;
  important: boolean;
}

const notices: Notice[] = [
  { id: 1, title: "Board Exam Schedule Released", date: "Feb 20, 2025", category: "Exam", desc: "CBSE Board exams for Class X and XII will begin from March 1st. Download the detailed schedule.", important: true },
  { id: 2, title: "Admission Open for 2025-26", date: "Feb 15, 2025", category: "Admission", desc: "Applications are now being accepted for all classes. Early bird discount available until March 31.", important: true },
  { id: 3, title: "Holi Holiday Notice", date: "Feb 12, 2025", category: "Holiday", desc: "School will remain closed from March 13-15 on account of Holi festival.", important: false },
  { id: 4, title: "Annual Day Preparation Circular", date: "Feb 10, 2025", category: "Circular", desc: "All students participating in Annual Day must attend rehearsals from 3 PM onwards.", important: false },
  { id: 5, title: "Unit Test II Results Declared", date: "Feb 8, 2025", category: "Results", desc: "Results for Unit Test II (Classes VI-XII) are now available on the student portal.", important: false },
  { id: 6, title: "Mid-Term Exam Timetable", date: "Feb 5, 2025", category: "Exam", desc: "Mid-term examinations for all classes will be held from February 25 to March 5.", important: false },
  { id: 7, title: "Summer Camp Registration", date: "Feb 3, 2025", category: "Circular", desc: "Register for the annual summer camp. Activities include robotics, art, and sports.", important: false },
  { id: 8, title: "Republic Day Celebrations", date: "Jan 20, 2025", category: "Holiday", desc: "School will remain closed on January 26. Flag hoisting ceremony at 8 AM.", important: false },
  { id: 9, title: "Scholarship Exam Results", date: "Jan 15, 2025", category: "Results", desc: "National Talent Search Exam results declared. 12 students qualified.", important: true },
];

const categories: Category[] = ["All", "Exam", "Admission", "Holiday", "Circular", "Results"];
const PER_PAGE = 5;

const categoryColors: Record<string, string> = {
  Exam:      "bg-blue-100 text-blue-700",
  Admission: "bg-emerald-100 text-emerald-700",
  Holiday:   "bg-amber-100 text-amber-700",
  Circular:  "bg-violet-100 text-violet-700",
  Results:   "bg-rose-100 text-rose-700",
};

const Notices = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return notices.filter((n) => {
      const matchCategory = filter === "All" || n.category === filter;
      const matchSearch =
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.desc.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [filter, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Layout>

      {/* HERO WITH BACKGROUND IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=85"
          alt="School children"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/65 flex flex-col justify-center px-8">
          <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Gyan Jyoti School</p>
          <h1 className="text-3xl font-extrabold text-white mb-1">Notices & Circulars</h1>
          <p className="text-blue-100 text-sm">Stay updated with the latest school announcements</p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-gray-100 border-b border-gray-200 px-6 py-2 text-xs text-gray-500">
        <div className="max-w-4xl mx-auto">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span className="text-blue-700 font-semibold">Notices</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* Search + Filter */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 text-gray-700"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => { setFilter(c); setPage(1); }}
                  className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors ${
                    filter === c
                      ? "bg-blue-800 text-white border-blue-800"
                      : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Notice List */}
        <div className="border border-gray-200 rounded divide-y divide-gray-100">
          {paginated.map((n, i) => (
            <AnimatedSection key={n.id} delay={i * 0.04}>
              <div className={`flex gap-4 px-5 py-4 hover:bg-gray-50 transition-colors ${n.important ? "border-l-4 border-l-red-500" : "border-l-4 border-l-transparent"}`}>

                {/* Date */}
                <div className="shrink-0 text-center w-10">
                  <p className="text-lg font-extrabold text-blue-800 leading-none">
                    {n.date.split(" ")[1].replace(",", "")}
                  </p>
                  <p className="text-xs text-gray-400 uppercase">{n.date.split(" ")[0]}</p>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {n.important && (
                      <span className="flex items-center gap-1 text-red-600 text-xs font-semibold">
                        <AlertTriangle className="w-3 h-3" /> Important
                      </span>
                    )}
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${categoryColors[n.category]}`}>
                      {n.category}
                    </span>
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-1">{n.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{n.desc}</p>
                </div>

                {/* Download */}
                <div className="shrink-0 flex items-center">
                  <button className="flex items-center gap-1 text-xs text-blue-700 border border-blue-300 rounded px-2.5 py-1.5 hover:bg-blue-50 transition-colors">
                    <Download className="w-3 h-3" /> PDF
                  </button>
                </div>

              </div>
            </AnimatedSection>
          ))}

          {paginated.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm">No notices found.</div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-100 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded text-xs font-semibold border transition-colors ${
                  page === p
                    ? "bg-blue-800 text-white border-blue-800"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-100 disabled:opacity-40"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Notices;