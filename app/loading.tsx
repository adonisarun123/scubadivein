export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-ocean">
      <div className="text-center text-white">
        <div className="inline-flex items-center space-x-2">
          <span className="loading-wave text-4xl">🌊</span>
          <span className="loading-wave text-4xl">🌊</span>
          <span className="loading-wave text-4xl">🌊</span>
        </div>
        <p className="mt-4 text-xl">Diving into content...</p>
      </div>
    </div>
  )
} 