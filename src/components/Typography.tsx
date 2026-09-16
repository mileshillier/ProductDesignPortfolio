import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TextProps<T extends ElementType> {
  as?: T
  className?: string
  children: ReactNode
}

type PolymorphicProps<T extends ElementType> = TextProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>

function createTextComponent<Default extends ElementType>(
  defaultTag: Default,
  baseClassName: string,
) {
  return function TextComponent<T extends ElementType = Default>({
    as,
    className,
    children,
    ...props
  }: PolymorphicProps<T>) {
    const Tag = (as || defaultTag) as ElementType
    return (
      <Tag className={cn(baseClassName, className)} {...(props as object)}>
        {children}
      </Tag>
    )
  }
}

export const Display = createTextComponent(
  'h1',
  'text-display font-display font-extrabold text-stone-950',
)

export const H1 = createTextComponent('h1', 'text-h1 font-display font-bold text-stone-950')

export const H2 = createTextComponent('h2', 'text-h2 font-display font-bold text-stone-950')

export const H3 = createTextComponent('h3', 'text-h3 font-display font-semibold text-stone-950')

export const Eyebrow = createTextComponent(
  'p',
  'text-caption font-semibold uppercase text-accent-700',
)

export const BodyLarge = createTextComponent('p', 'text-body-lg text-stone-600')

export const Body = createTextComponent('p', 'text-body text-stone-600')

export const Small = createTextComponent('p', 'text-small text-stone-500')
