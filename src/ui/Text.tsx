export interface TextProps {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
}

export function Text({
  as: Component = "span",
  children,
  className,
}: TextProps) {
  return (
    <Component className={`text-slate-400 text-sm ${className}`}>
      {children}
    </Component>
  )
}
