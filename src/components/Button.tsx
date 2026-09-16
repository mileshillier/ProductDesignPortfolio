import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md text-body font-medium ' +
  'transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40'

const variants: Record<Variant, string> = {
  primary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800',
  secondary:
    'border border-stone-300 text-stone-800 hover:border-stone-400 hover:bg-stone-100 active:bg-stone-200',
  ghost: 'text-stone-700 hover:bg-stone-100 active:bg-stone-200',
}

const sizing = 'px-5 py-2.5'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return <button className={cn(base, sizing, variants[variant], className)} {...props} />
}

interface ButtonLinkProps extends LinkProps {
  variant?: Variant
}

export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return <Link className={cn(base, sizing, variants[variant], className)} {...props} />
}

interface ButtonAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

export function ButtonAnchor({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonAnchorProps) {
  return (
    <a className={cn(base, sizing, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}
