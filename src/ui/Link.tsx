export interface LinkProps {
  as?: React.ElementType
  href?: string
  children: React.ReactNode
  renderLink?: (Component: React.ElementType) => React.ReactNode
}

export function Link({ as: Component = "a", children, href }: LinkProps) {
  return (
    <Component href={href} className="text-blue-500 text-xl font-semibold">
      {children}
    </Component>
  )
}
