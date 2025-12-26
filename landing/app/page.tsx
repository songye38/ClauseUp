import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import StandardSection from "./components/StandardSection";
import RealitySection from "./components/RealitySection";
import OurSolutionSection from "./components/OurSolutionSection";
import LetterSection from "./components/LetterSection";
import RecommendationSection from "./components/RecommendationSection";
import CTASection from "./components/CTASection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <StandardSection />
      <RealitySection />
      <OurSolutionSection />
      <LetterSection />
      <RecommendationSection />
      <CTASection />
    </div>
  );
}
