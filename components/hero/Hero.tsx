import HeroPlaceholder3D from "./HeroPlaceholder3D";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-5xl font-semibold leading-tight">
          Building Intelligent Systems & AI-Driven Automations
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          Full-Stack Engineer focused on agentic AI, workflow automation, and
          production-grade systems.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-md bg-[var(--accent-primary)] text-black font-medium">
            Explore My Work
          </button>

          <button className="px-6 py-3 rounded-md border border-white/20 text-white">
            Ask My Portfolio
          </button>
        </div>
      </div>

      <HeroPlaceholder3D />
    </section>
  );
}
