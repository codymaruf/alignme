"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

// Mock: AI-generated questions based on user's goal (replace with real API call)
const fetchQuestionsForGoal = async (goal: string) => {
  // This would be dynamic in real app, here is an example
  return [
    { id: "workTime", question: "How much time did you work on your goal today? (hours)", type: "number", placeholder: "e.g., 3" },
    { id: "mood", question: "How was your mood today?", type: "text", placeholder: "e.g., motivated, tired" },
    { id: "distraction", question: "Did you face any distractions?", type: "text", placeholder: "Explain if yes" },
  ]
}

export default function DynamicDailyInput({ goal }: { goal: string }) {
  const [questions, setQuestions] = useState<Array<{ id: string, question: string, type: string, placeholder?: string }>>([])
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    fetchQuestionsForGoal(goal).then(setQuestions)
  }, [goal])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAnswers((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation: ensure all questions answered
    for (const q of questions) {
      if (!answers[q.id] || answers[q.id].trim() === "") {
        alert(`Please answer: ${q.question}`)
        return
      }
    }
    console.log("User answers:", answers)
    alert("Daily input saved!")
    setAnswers({})
  }

  if (!questions.length) return <p>Loading questions for your goal...</p>

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">Daily Check-In for "{goal}"</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map(({ id, question, type, placeholder }) => (
            <div key={id}>
              <Label htmlFor={id}>{question}</Label>
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={answers[id] || ""}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}

          <Button type="submit" className="w-full">Submit Daily Check-In</Button>
        </form>
      </div>
    </main>
  )
}
