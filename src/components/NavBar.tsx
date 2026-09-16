import { useState } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import { primaryNav } from '@/content/navigation'
import { cn } from '@/lib/cn'

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-stone-950">
          Miles Hillier
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <RouterNavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'text-body font-medium text-stone-600 transition-colors hover:text-stone-950',
                      isActive && 'text-stone-950',
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-stone-200 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <RouterNavLink
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-2.5 text-body font-medium text-stone-700 hover:bg-stone-100',
                      isActive && 'bg-stone-100 text-stone-950',
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
