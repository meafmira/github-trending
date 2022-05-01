export interface LinkProps {
  as?: React.ElementType
  href?: string
  children: React.ReactNode
  renderLink?: (Component: React.ElementType) => React.ReactNode
  className?: string
}

export function Link({
  as: Component = "a",
  children,
  href,
  ...props
}: LinkProps) {
  return (
    <Component
      href={href}
      className="text-blue-500 text-xl font-semibold hover:underline"
      {...props}
    >
      {children}
    </Component>
  )
}
