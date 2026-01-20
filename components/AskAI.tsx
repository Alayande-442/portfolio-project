"use client";

import { useState } from "react";

type AskAIProps = {
  context: string;
};

export default function AskAI({ context }: AskAIProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          context,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setAnswer(data.response);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 rounded-lg border border-neutral-800 p-4 bg-neutral-900">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about this project..."
        className="w-full rounded-md bg-neutral-800 p-3 text-sm outline-none resize-none"
        rows={3}
      />

      <button
        onClick={askAI}
        disabled={loading}
        className="mt-3 rounded-md bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
      >
        {loading ? "Thinking…" : "Ask AI"}
      </button>

      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

      {answer && (
        <div className="mt-4 text-sm leading-relaxed text-neutral-200 whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
}
