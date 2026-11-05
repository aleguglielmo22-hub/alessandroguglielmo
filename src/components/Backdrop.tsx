/**
 * Sfondo animato portato da AG Studio: nastri di linee luminose intrecciate,
 * generati da onde sfasate, che derivano lentamente e "scorrono" lungo il tratto.
 * Solo decorazione (aria-hidden); si ferma con "riduci movimento".
 */

function ribbon(seed: number, lines: number, amp: number, width = 1600): string[] {
  return Array.from({ length: lines }, (_, i) => {
    const phase = seed + i * 0.2
    const a = amp * (1 - (i / lines) * 0.35)
    const pts: string[] = []
    for (let x = -50; x <= width + 50; x += 25) {
      const y =
        160 +
        Math.sin(x / 210 + phase) * a +
        Math.sin(x / 95 + phase * 1.7) * (a * 0.25) +
        (i - lines / 2) * 3.5
      pts.push(`${x === -50 ? 'M' : 'L'}${x},${y.toFixed(1)}`)
    }
    return pts.join(' ')
  })
}

const A = ribbon(0, 20, 70)
const B = ribbon(2.1, 18, 55)
const C = ribbon(4.4, 12, 90)

function Gradient({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ff6b00" stopOpacity="0" />
        <stop offset="0.25" stopColor="#ff6b00" stopOpacity="0.9" />
        <stop offset="0.55" stopColor="#ffb27a" stopOpacity="0.95" />
        <stop offset="0.8" stopColor="#ff6b00" stopOpacity="0.9" />
        <stop offset="1" stopColor="#ff6b00" stopOpacity="0" />
      </linearGradient>
    </defs>
  )
}

export function Backdrop({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="ag-ribbon ag-ribbon-a absolute -top-10 -right-40 h-[460px] w-[1500px]"
        viewBox="0 0 1600 320"
        fill="none"
      >
        <Gradient id="agStrokeA" />
        {A.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#agStrokeA)"
            strokeWidth={1.2}
            strokeOpacity={0.95 - i * 0.025}
            className="ag-line"
            style={{ animationDelay: `${i * -0.35}s` }}
          />
        ))}
      </svg>

      <svg
        className="ag-ribbon ag-ribbon-b absolute -bottom-24 -left-48 h-[420px] w-[1500px]"
        viewBox="0 0 1600 320"
        fill="none"
      >
        <Gradient id="agStrokeB" />
        {B.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#agStrokeB)"
            strokeWidth={1.1}
            strokeOpacity={0.85 - i * 0.025}
            className="ag-line"
            style={{ animationDelay: `${i * -0.4}s` }}
          />
        ))}
      </svg>

      <svg
        className="ag-ribbon ag-ribbon-c absolute top-[30%] -left-20 h-[300px] w-[1300px] opacity-40"
        viewBox="0 0 1600 320"
        fill="none"
      >
        <Gradient id="agStrokeC" />
        {C.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#agStrokeC)"
            strokeWidth={0.9}
            className="ag-line"
            style={{ animationDelay: `${i * -0.5}s` }}
          />
        ))}
      </svg>
    </div>
  )
}
