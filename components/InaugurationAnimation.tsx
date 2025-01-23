"use client"

import { useEffect} from "react"
import confetti from "canvas-confetti"



export default function InaugurationAnimation() {

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    })

    const timer = setInterval(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      })
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
    </div>
  )
}

