"use client"

export function ChessboardPlaceholder() {
  // Create 8x8 grid for chessboard
  const squares = []
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isLight = (row + col) % 2 === 0
      squares.push(
        <div
          key={`${row}-${col}`}
          className={isLight ? "bg-zinc-800" : "bg-zinc-900"}
        />
      )
    }
  }

  return (
    <div className="flex gap-1">
      {/* Chessboard */}
      <div className="aspect-square w-full max-w-[400px] bg-[#0A0A0A] border border-white/10 rounded-xl p-2">
        <div className="grid grid-cols-8 gap-0 h-full w-full rounded-lg overflow-hidden">
          {squares}
        </div>
      </div>

      {/* Eval Bar */}
      <div className="w-2 h-full max-h-[400px] rounded-full overflow-hidden flex flex-col">
        {/* White's advantage (top half) */}
        <div 
          className="bg-white transition-all duration-500" 
          style={{ height: "62%" }}
        />
        {/* Black's advantage (bottom half) */}
        <div 
          className="bg-zinc-800 flex-1"
        />
      </div>
    </div>
  )
}
