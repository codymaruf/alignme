"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function GoalInputPage() {
  const [goal, setGoal] = useState("")
  const [suggestion, setSuggestion] = useState("")

  // Simple mock AI suggestion logic (you can replace with real AI later)
  useEffect(() => {
    if (!goal) {
      setSuggestion("Start typing your goal, and I'll help you make it clearer!")
    } else if (goal.length < 10) {
      setSuggestion("Try to be more specific about what you want to achieve.")
    } else {
      setSuggestion("Great! This looks like a solid goal to work towards.")
    }
  }, [goal])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!goal) return alert("Please enter a goal.")
    // TODO: Send this to your database
    console.log("Goal submitted:", goal)
    alert("Your goal has been saved!")
    setGoal("")
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">Set Your Main Goal 🎯</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="goal">Your Goal</Label>
            <Input
              id="goal"
              placeholder="e.g., Want to get financial freedom"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <p className="mt-2 text-sm text-blue-400 italic">{suggestion}</p>
          </div>
          <Button type="submit" className="w-full">Save Goal</Button>
        </form>
      </div>
    </main>
  )
}
