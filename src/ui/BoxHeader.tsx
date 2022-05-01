export interface BoxHeaderProps {
  children?: React.ReactNode
}

export function BoxHeader({ children }: BoxHeaderProps) {
  return (
    <div className="p-4 bg-slate-800 rounded-t-md border-slate-700 border">
      {children}
    </div>
  )
}
