'use client'
import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import HeroSection from "./HeroSection";
import CTASection from "./CTASection";
import LetterSection from "./LetterSection";
import OurSolutionSection from "./OurSolutionSection";
import ProblemSection from "./ProblemSection";
import RecommendationSection from "./RecommendationSection";
import StandardSection from "./StandardSection";
import RealitySection from "./RealitySection";

export default function SectionTracker() {
    const heroRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const letterRef = useRef<HTMLDivElement>(null)
    const solutionRef = useRef<HTMLDivElement>(null)
    const problemRef = useRef<HTMLDivElement>(null)
    const recommendationRef = useRef<HTMLDivElement>(null)
    const standardRef = useRef<HTMLDivElement>(null)
    const realityRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        posthog.capture("section_viewed", {
                            section: entry.target.id,
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        [heroRef, realityRef, letterRef, solutionRef, problemRef, recommendationRef, standardRef].forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div id="hero" ref={heroRef}><HeroSection /></div>
            <div id="problem" ref={problemRef}><ProblemSection /></div>
            <div id="standard" ref={standardRef}><StandardSection /></div>
            <div id="reality" ref={realityRef}><RealitySection /></div>
            <div id="solution" ref={solutionRef}><OurSolutionSection /></div>
            <div id="letter" ref={letterRef}><LetterSection /></div>
            <div id="recommendation" ref={recommendationRef}><RecommendationSection /></div>
            <div id="cta" ref={ctaRef}><CTASection /></div>
        </>
    )
}

      {/* <HeroSection />
      <ProblemSection />
      <StandardSection />
      <RealitySection />
      <OurSolutionSection />
      <LetterSection />
      <RecommendationSection />
      <CTASection /> */}



