import type { AnchorHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/cn'

const styles =
  'text-accent-700 underline underline-offset-4 decoration-accent-300 ' +
  'hover:decoration-accent-600 transition-colors duration-150'

export function InlineLink({ className, ...props }: LinkProps & { className?: string }) {
  return <Link className={cn(styles, className)} {...props} />
}

export function InlineAnchor({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(styles, className)} {...props}>
      {children}
    </a>
  )
}
