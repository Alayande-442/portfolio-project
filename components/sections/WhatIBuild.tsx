export default function WhatIBuild() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold">What I Build</h2>

      <p className="mt-4 text-gray-400 max-w-2xl">
        I design and build intelligent, scalable systems that solve real
        operational and business problems using modern web technologies and AI.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 ld:grid-cols-4 gap-6">
        <CapabilityCard
          title="AI Automation Systems"
          description="End-to-end AI-powered automations that eliminate repetitive work and improve operational efficiency."
        />

        <CapabilityCard
          title="Agentic Workflows"
          description="Systems where autonomous agents reason, make decisions, and execute tasks across tools and services."
        />

        <CapabilityCard
          title="Scalable Web Platforms"
          description="Production-grade full-stack applications optimized for performance, maintainability, and growth."
        />

        <CapabilityCard
          title="Cloud-Native Deployments"
          description="Containerized applications deployed on modern cloud infrastructure with scalability and reliability in mind."
        />
      </div>
    </section>
  );
}

type CapabilityCardProps = {
  title: string;
  description: string;
};

function CapabilityCard({ title, description }: CapabilityCardProps) {
  return (
    <div className="rounded-xl bg-[var(--bg-surface)] p-6 border border-white/10">
      <h3 className="text-lg font-medium">{title}</h3>

      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
