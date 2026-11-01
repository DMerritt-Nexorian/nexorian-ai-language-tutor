"use client";

import { useChat } from "ai/react";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("Spanish");
  const system = `You are Nexorian AI Language Tutor. Conduct conversational practice in ${lang}. Correct gently, provide natural examples, and keep the conversation engaging and high-integrity.`;

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { system },
  });

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">Nexorian AI Language Tutor</h1>
      <p className="mb-6 text-lg">Conversational practice with real-time feedback.</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Language</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="border p-2 rounded">
          <option>Spanish</option>
          <option>French</option>
          <option>Japanese</option>
          <option>German</option>
          <option>Mandarin</option>
          <option>English</option>
        </select>
      </div>

      <div className="border rounded p-4 h-96 overflow-y-auto mb-4 bg-white/70">
        {messages.length === 0 && <p className="text-gray-500">Start a conversation in the target language...</p>}
        {messages.map((m) => (
          <div key={m.id} className="mb-3">
            <strong>{m.role === "user" ? "You" : "Tutor"}:</strong>
            <div className="whitespace-pre-wrap mt-1">{m.content}</div>
          </div>
        ))}
        {isLoading && <div className="text-amber-700">Thinking...</div>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          className="flex-1 border p-3 rounded"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading} className="bg-amber-700 text-white px-6 py-3 rounded font-medium">
          Send
        </button>
      </form>
    </main>
  );
}