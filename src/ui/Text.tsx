export interface TextProps {
  as?: React.ElementType
  children: React.ReactNode
}

export function Text({ as: Component = "span", children }: TextProps) {
  return <Component className="text-slate-400 text-sm">{children}</Component>
}
