import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-ocean">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-heading font-bold mb-4">Page Not Found</h2>
        <p className="text-xl mb-8">
          Looks like you've dived too deep! The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-secondary">
          Surface to Home
        </Link>
      </div>
    </div>
  )
} 