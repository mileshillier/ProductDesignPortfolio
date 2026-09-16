import { Link } from 'react-router-dom'
import { secondaryNav } from '@/content/navigation'
import { InlineAnchor } from '@/components/InlineLink'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-base font-bold text-stone-950">Miles Hillier</p>
            <p className="mt-1 text-small text-stone-500">Principal Product Designer</p>
          </div>

          <nav aria-label="Secondary">
            <ul className="flex flex-col gap-2 sm:items-end">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-small text-stone-500 hover:text-stone-950">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stone-200 pt-6 text-small text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Miles Hillier. Built with{' '}
            <InlineAnchor href="https://claude.com/claude-code" target="_blank" rel="noreferrer">
              Claude Code
            </InlineAnchor>
            .
          </p>
          <p>
            <InlineAnchor
              href="https://www.linkedin.com/in/mileshillier"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </InlineAnchor>
          </p>
        </div>
      </div>
    </footer>
  )
}
