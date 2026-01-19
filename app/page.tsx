import Hero from "@/components/hero/Hero";
import AICapabilities from "@/components/sections/AICapabilities";
import WhatIBuild from "@/components/sections/WhatIBuild";
import CaseStudies from "@/components/sections/CaseStudies";

export default function Home() {
  return (
    <>
      <Hero />
      <AICapabilities />
      <WhatIBuild />
      <CaseStudies />
    </>
  );
}
