"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, CalendarCheck, Info, Target } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">🧠 AI Productivity Companion</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Track your daily performance, get AI-powered feedback, and improve your habits — one day at a time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        <Link href="/goal">
          <Button variant="outline" className="w-full justify-start">
            <Target className="mr-2 h-5 w-5" />
            Set Goal
          </Button>
        </Link>

        <Link href="/input">
          <Button variant="outline" className="w-full justify-start">
            <CalendarCheck className="mr-2 h-5 w-5" />
            Daily Input
          </Button>
        </Link>

        <Link href="/feedback">
          <Button variant="outline" className="w-full justify-start">
            <Brain className="mr-2 h-5 w-5" />
            AI Analysis
          </Button>
        </Link>

        {/* <Link href="/history">
          <Button variant="outline" className="w-full justify-start">
            <BarChart2 className="mr-2 h-5 w-5" />
            History
          </Button>
        </Link>

        <Link href="/settings">
          <Button variant="outline" className="w-full justify-start">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </Link> */}

        <Link href="/about">
          <Button variant="outline" className="w-full justify-start">
            <Info className="mr-2 h-5 w-5" />
            About
          </Button>
        </Link>
      </div>

      <p className="text-sm text-gray-400 mt-10">Built by Azhar Maruf © 2025</p>
    </main>
  )
}
