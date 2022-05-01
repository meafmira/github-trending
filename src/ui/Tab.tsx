export interface TabProps {
  active?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export function Tab({ active, children, onClick }: TabProps) {
  const bg = active ? "bg-blue-500" : "bg-transparent"
  const borderColor = active ? "border-blue-500" : "border-slate-400"

  return (
    <button
      onClick={onClick}
      className={`${bg} ${borderColor} first:rounded-l-md last:rounded-r-md text-white text-sm font-medium border px-4 py-1 m-0`}
    >
      {children}
    </button>
  )
}
