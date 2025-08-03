"use client"

import Link from "next/link";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center bg-primary-lighter">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        AlignMe
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mb-8">
        AlignMe helps you align your daily actions with your goals. Get real-time feedback, eliminate distractions, and do more of what moves you forward.
      </p>

      {/* <div className="flex gap-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="https://alignme-pre-release.vercel.app/">
          <Button variant="outline">Join Waitlist</Button>
        </Link>
      </div> */}
      <h1>Hello</h1>
    </main>
  );
}
