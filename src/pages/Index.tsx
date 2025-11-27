import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import CostComparison from "@/components/landing/CostComparison";
import Architecture from "@/components/landing/Architecture";
import SelfHosted from "@/components/landing/SelfHosted";
import UseCases from "@/components/landing/UseCases";
import OpenSource from "@/components/landing/OpenSource";
import Roadmap from "@/components/landing/Roadmap";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTAFinal from "@/components/landing/CTAFinal";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";

const Index = () => {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <CostComparison />
      <Architecture />
      <SelfHosted />
      <UseCases />
      <OpenSource />
      <Roadmap />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
};

export default Index;
