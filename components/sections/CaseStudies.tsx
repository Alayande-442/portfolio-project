export default function CaseStudies() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold">Selected Case Study</h2>

      <p className="mt-4 text-gray-400 max-w-2xl">
        A real-world project that demonstrates how I design, build, and deploy
        intelligent systems.
      </p>

      <div className="mt-12 rounded-xl bg-[var(--bg-surface)] border border-white/10 p-8">
        <h3 className="text-2xl font-medium">
          AI-Powered Workflow Automation Platform
        </h3>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CaseBlock
            title="Problem"
            content="Manual, repetitive operational tasks were slowing down teams and increasing the risk of human error."
          />

          <CaseBlock
            title="Solution"
            content="Designed and implemented an AI-driven automation system that coordinates multiple services and decision points."
          />

          <CaseBlock
            title="Impact"
            content="Reduced task execution time, improved reliability, and enabled teams to focus on higher-value work."
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="text-sm text-gray-400">
            Stack: Next.js, Node.js, AI APIs, Cloud Infrastructure
          </div>

          <button className="px-5 py-2.5 rounded-md border border-white/20 text-white">
            Explain This Project With AI
          </button>
        </div>
      </div>
    </section>
  );
}

type CaseBlockProps = {
  title: string;
  content: string;
};

function CaseBlock({ title, content }: CaseBlockProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
        {title}
      </h4>

      <p className="mt-2 text-sm text-gray-400 leading-relaxed">{content}</p>
    </div>
  );
}
