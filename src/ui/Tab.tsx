export interface TabProps {
  active?: boolean
}

export function Tab({ active }: TabProps) {
  const bg = active ? "bg-blue-500" : "bg-transparent"
  const borderColor = active ? "border-blue-500" : "border-slate-400"

  return (
    <button
      className={`${bg} ${borderColor} rounded-md text-white text-sm font-medium border px-4 py-1`}
    >
      Repositories
    </button>
  )
}
