import React, { useState } from "react";

const GROQ_API_KEY = "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";

const Summerise = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerLoading, setAnswerLoading] = useState(false);

  const extractMainContent = () => {
    const main = document.querySelector("main") ||
      document.querySelector("#main") ||
      document.querySelector(".content") ||
      document.body;
    return main.innerText.trim();
  };

  const cleanBoilerplate = (text) => {
    return text
      .replace(/Use this page.*?\./gi, "")
      .replace(/Use the weekly.*?\./gi, "")
      .replace(/At the bottom.*?\./gi, "")
      .replace(/Share your thoughts.*?\./gi, "")
      .replace(/Click here.*?\./gi, "")
      .replace(/Tap here.*?\./gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  };

  const summarize = async () => {
    setLoading(true);
    setSummary("");

    let text = extractMainContent();
    text = cleanBoilerplate(text);
    text = text.slice(0, 15000); // safe input limit

    const systemPrompt = "You are a helpful assistant. Summarize the following content into 5 short bullet points. Skip UI text, links, or instructions.";

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: text }
          ],
          temperature: 0.5,
          max_tokens: 1024
        })
      });

      const data = await response.json();
      const output = data.choices?.[0]?.message?.content || "No summary generated.";
      setSummary(output.trim());
    } catch (error) {
      console.error("Summarization error:", error);
      setSummary("❌ Error while summarizing.");
    }

    setLoading(false);
  };

  const askQuestion = async () => {
    if (!question || !summary) return;
    setAnswerLoading(true);

    const qaPrompt = `
Here is a summary of an article:
${summary}

Now answer the user's question based only on that summary:
Q: ${question}
A:
    `;

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            { role: "system", content: "You are a helpful assistant that answers questions based on article summaries." },
            { role: "user", content: qaPrompt }
          ],
          temperature: 0.5,
          max_tokens: 512
        })
      });

      const data = await response.json();
      const output = data.choices?.[0]?.message?.content || "No answer generated.";
      setAnswer(output.trim());
    } catch (error) {
      console.error("QA error:", error);
      setAnswer("❌ Error while answering.");
    }

    setAnswerLoading(false);
  };

  return (
    <div className="mt-8 p-6 border rounded-2xl bg-white shadow-lg dark:bg-gray-800 dark:text-white">
      {/* 🔍 Summarize button */}
      <div className="relative inline-block group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
        <button
          onClick={summarize}
          disabled={loading}
          className="relative px-6 py-2 bg-white dark:bg-gray-900 rounded-full text-sm font-medium text-gray-800 dark:text-white border border-transparent"
        >
          {loading ? "Summarizing..." : "🔍 Dive deeper in AI Mode"}
        </button>
      </div>

      {summary && (
        <div className="mt-6 space-y-4">
          {/* 📝 Summary output */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <h2 className="font-semibold text-lg mb-2">📝 Summary</h2>
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">{summary}</p>
          </div>

          {/* 💬 Ask a question */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">💬 Ask a question about the summary</h3>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="w-full mt-2 px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-600 dark:text-white"
            />

            {/* 💬 Ask button with animation */}
            <div className="relative inline-block group mt-3">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
              <button
                onClick={askQuestion}
                disabled={answerLoading}
                className="relative px-6 py-2 bg-white dark:bg-gray-900 rounded-full text-sm font-medium text-gray-800 dark:text-white border border-transparent"
              >
                {answerLoading ? "Thinking..." : "💬 Ask AI"}
              </button>
            </div>
          </div>

          {/* 🤖 Answer output */}
          {answer && (
            <div className="bg-green-100 dark:bg-green-700 text-black dark:text-white p-4 rounded mt-4">
              <strong>🤖 Answer:</strong>
              <p>{answer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Summerise;
   