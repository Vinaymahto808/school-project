import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
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
  Exam: "bg-blue-100 text-blue-700",
  Admission: "bg-emerald-100 text-emerald-700",
  Holiday: "bg-amber-100 text-amber-700",
  Circular: "bg-violet-100 text-violet-700",
  Results: "bg-rose-100 text-rose-700",
};

const Notices = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return notices.filter((n) => {
      const matchCategory = filter === "All" || n.category === filter;
      const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.desc.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [filter, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Layout>
      <HeroSection title="Academic Notices" subtitle="Stay updated with the latest announcements, circulars, and schedules." />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Filters */}
          <AnimatedSection>
            <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl rounded-2xl p-4 mb-8 border border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search notices..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted border-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setFilter(c); setPage(1); }}
                      className={`px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all ${
                        filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Notices */}
          <div className="space-y-4">
            {paginated.map((n, i) => (
              <AnimatedSection key={n.id} delay={i * 0.05}>
                <div className={`glass-card-hover rounded-2xl p-6 ${n.important ? "border-l-4 border-l-secondary" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex flex-col items-center bg-primary/5 rounded-xl px-4 py-2 shrink-0">
                      <span className="font-heading font-bold text-lg text-primary">{n.date.split(",")[0].split(" ")[1]}</span>
                      <span className="text-xs text-muted-foreground">{n.date.split(",")[0].split(" ")[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {n.important && <AlertTriangle className="w-4 h-4 text-secondary" />}
                        <h3 className="font-heading font-bold text-foreground">{n.title}</h3>
                      </div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${categoryColors[n.category] || "bg-muted text-muted-foreground"}`}>
                        {n.category}
                      </span>
                      <p className="text-muted-foreground text-sm">{n.desc}</p>
                    </div>
                    <button className="btn-pill bg-primary/5 text-primary hover:bg-primary/10 !px-4 !py-2 text-xs flex items-center gap-1.5 shrink-0">
                      <Download className="w-3.5 h-3.5" /> PDF
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            {paginated.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">No notices found.</div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2 rounded-full hover:bg-muted disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-heading font-semibold text-foreground">
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-2 rounded-full hover:bg-muted disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Notices;
