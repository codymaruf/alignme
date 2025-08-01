"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-gray-800">
      <div className="max-w-2xl w-full">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-2">About</h1>
            <Separator className="mb-4" />

            <p className="mb-4">
              The <strong>AI Productivity Companion</strong> is a tool designed to help you reach your goals, one habit at a time.
              By combining your daily inputs with intelligent AI feedback, you can track your progress and grow with clarity.
            </p>

            <p className="mb-4">
              Unlike traditional trackers, this app responds dynamically to your unique goals. It doesn't give generic advice.
              It listens, learns, and supports — tailored to your specific direction.
            </p>

            <p className="mb-4">
              Set your goal, let the app guide your daily reflection, and receive measurable, personalized suggestions from your own AI assistant.
            </p>

            <p className="text-sm text-gray-500 mt-6">
              Made with ❤️ by Azhar Maruf — August 2025
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
