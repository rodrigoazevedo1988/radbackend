import { Check, Clock, Calendar } from "lucide-react";

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q1 2025",
      status: "in-progress",
      items: [
        { text: "Database schemas isolados", done: true },
        { text: "Auth com OAuth", done: true },
        { text: "Real-time CDC", done: false, inProgress: true },
      ],
    },
    {
      quarter: "Q2 2025",
      status: "planned",
      items: [
        { text: "Functions edge deployment", done: false },
        { text: "GraphQL API automático", done: false },
        { text: "Dashboard analytics avançado", done: false },
      ],
    },
    {
      quarter: "Q3 2025",
      status: "planned",
      items: [
        { text: "Replicação multi-região", done: false },
        { text: "Backup incremental automático", done: false },
        { text: "CLI para deploy", done: false },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            O que <span className="text-gradient">vem por aí</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Roadmap transparente. Desenvolvimento aberto à comunidade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {roadmapData.map((quarter, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row gap-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 lg:mt-0 lg:top-1/2 lg:-translate-y-1/2 glow-primary-sm" />

                  {/* Content */}
                  <div
                    className={`flex-1 pl-12 lg:pl-0 ${
                      index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                    }`}
                  >
                    <div className="inline-block">
                      <div
                        className={`flex items-center gap-2 mb-3 ${
                          index % 2 === 0 ? "lg:justify-end" : ""
                        }`}
                      >
                        {quarter.status === "in-progress" ? (
                          <Clock className="w-4 h-4 text-primary" />
                        ) : (
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            quarter.status === "in-progress"
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {quarter.quarter}
                          {quarter.status === "in-progress" && " (em progresso)"}
                        </span>
                      </div>

                      <div
                        className={`bg-card rounded-xl border border-border p-4 ${
                          quarter.status === "in-progress"
                            ? "border-primary/30"
                            : ""
                        }`}
                      >
                        <ul className="space-y-2">
                          {quarter.items.map((item, idx) => (
                            <li
                              key={idx}
                              className={`flex items-center gap-2 text-sm ${
                                index % 2 === 0 ? "lg:flex-row-reverse" : ""
                              }`}
                            >
                              {item.done ? (
                                <Check className="w-4 h-4 text-primary shrink-0" />
                              ) : item.inProgress ? (
                                <Clock className="w-4 h-4 text-accent-orange shrink-0 animate-pulse" />
                              ) : (
                                <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                              )}
                              <span
                                className={
                                  item.done
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                                }
                              >
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
