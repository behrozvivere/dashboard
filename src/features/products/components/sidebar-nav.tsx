import * as React from 'react'
import { Link, useMatchRoute } from '@tanstack/react-router'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon?: React.ReactNode
  }[]
}

export default function SidebarNav({
  className,
  items,
  ...props
}: SidebarNavProps) {
  const matchRoute = useMatchRoute()

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            matchRoute({
              to: `${item.href}${item.href === '/products' ? '' : '/*'}`,
              fuzzy: true,
            })
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          )}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}