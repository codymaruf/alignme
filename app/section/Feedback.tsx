"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface AnalysisResult {
  summary: string
  suggestions: string[]
}

export default function AIAnalysisPage({ userAnswers }: { userAnswers: Record<string, string> }) {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userAnswers) return
    setLoading(true)
    setError(null)

    // Example: send userAnswers to your AI backend for analysis
    fetch("/api/ai-analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: userAnswers }),
    })
      .then((res) => res.json())
      .then((data: AnalysisResult) => {
        setAnalysis(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to get analysis. Please try again.")
        setLoading(false)
      })
  }, [userAnswers])

  if (loading) return <p className="p-6 text-center">Analyzing your inputs...</p>
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>
  if (!analysis) return <p className="p-6 text-center">No analysis available yet.</p>

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Daily Feedback</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="bg-gray-100 p-4 rounded">{analysis.summary}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Suggestions to Improve</h2>
        <ul className="list-disc list-inside space-y-2">
          {analysis.suggestions.map((suggestion, i) => (
            <li key={i} className="bg-blue-50 p-3 rounded">{suggestion}</li>
          ))}
        </ul>
      </section>

      <Button onClick={() => window.location.reload()} className="mt-8 w-full">
        Refresh Analysis
      </Button>
    </main>
  )
}
