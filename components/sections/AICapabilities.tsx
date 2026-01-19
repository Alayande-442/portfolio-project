export default function AICapabilities() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          AI Capabilities
        </h2>

        <p className="text-gray-400 max-w-3xl mb-12">
          This portfolio is augmented with AI to provide deeper insights into my
          work, architecture decisions, and system design thinking.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-medium mb-2">Ask About Any Project</h3>
            <p className="text-sm text-gray-400">
              Query architecture choices, trade-offs, and implementation details
              using natural language.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-medium mb-2">System Design Explanations</h3>
            <p className="text-sm text-gray-400">
              AI-generated breakdowns of scalability, performance, and
              cloud-native design decisions.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-medium mb-2">
              Interactive Portfolio Assistant
            </h3>
            <p className="text-sm text-gray-400">
              An embedded assistant powered by Google Gemini to explore my work
              conversationally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
