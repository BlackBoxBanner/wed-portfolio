export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated logo/icon */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-black animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-lg font-medium text-foreground">Loading Portfolio</h2>
          <p className="text-sm text-muted-foreground mt-1">Please wait a moment...</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-black rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}