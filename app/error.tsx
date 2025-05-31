'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-ocean">
      <div className="text-center text-white">
        <h2 className="text-4xl font-heading font-bold mb-4">Something went wrong!</h2>
        <p className="text-xl mb-8">We encountered an error while loading this page.</p>
        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="btn-secondary"
          >
            Try again
          </button>
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
} 