import type { ReactNode } from 'react'
import { Button, ButtonLink } from '@/components/Button'
import { InlineAnchor } from '@/components/InlineLink'
import { Body, BodyLarge, Display, Eyebrow, H1, H2, H3, Small } from '@/components/Typography'

const accentSwatches = [
  ['50', 'bg-accent-50'],
  ['100', 'bg-accent-100'],
  ['200', 'bg-accent-200'],
  ['300', 'bg-accent-300'],
  ['400', 'bg-accent-400'],
  ['500', 'bg-accent-500'],
  ['600', 'bg-accent-600'],
  ['700', 'bg-accent-700'],
  ['800', 'bg-accent-800'],
  ['900', 'bg-accent-900'],
] as const

const neutralSwatches = [
  ['50', 'bg-stone-50'],
  ['200', 'bg-stone-200'],
  ['400', 'bg-stone-400'],
  ['600', 'bg-stone-600'],
  ['800', 'bg-stone-800'],
  ['950', 'bg-stone-950'],
] as const

const spacingSteps = [1, 2, 3, 4, 6, 8, 12, 16, 24] as const

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-stone-200 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Eyebrow as="h2" className="mb-6">
          {title}
        </Eyebrow>
        {children}
      </div>
    </section>
  )
}

export function DesignSystemPage() {
  return (
    <main>
      <Section title="Type scale">
        <div className="space-y-6">
          <Display>Display — Principal Product Designer</Display>
          <H1>H1 — Consolidating four tools into one</H1>
          <H2>H2 — Context, problem, approach, outcome</H2>
          <H3>H3 — My role and scope</H3>
          <BodyLarge>
            Body large — used for hero subheads and case study intros where a little more presence
            is useful.
          </BodyLarge>
          <Body>
            Body — the default reading size for case study narrative, about copy, and general
            paragraph text across the site.
          </Body>
          <Small>Small — captions, metadata, footer copy.</Small>
        </div>
      </Section>

      <Section title="Color — accent (terracotta)">
        <div className="grid grid-cols-5 gap-4 sm:grid-cols-10">
          {accentSwatches.map(([step, cls]) => (
            <div key={step} className="text-center">
              <div className={`h-14 w-full rounded-md border border-stone-200 ${cls}`} />
              <Small className="mt-1">{step}</Small>
            </div>
          ))}
        </div>
        <Body className="mt-4">
          Base accent-600 on white is ~6.3:1 contrast (WCAG AA for normal text needs 4.5:1) — safe
          for buttons, links, and focus states.
        </Body>
      </Section>

      <Section title="Color — neutrals (warm stone)">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {neutralSwatches.map(([step, cls]) => (
            <div key={step} className="text-center">
              <div className={`h-14 w-full rounded-md border border-stone-200 ${cls}`} />
              <Small className="mt-1">{step}</Small>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing scale (4px base)">
        <div className="flex flex-wrap items-end gap-4">
          {spacingSteps.map((step) => (
            <div key={step} className="text-center">
              <div
                className="bg-accent-200"
                style={{ width: `${step * 0.25}rem`, height: '2rem' }}
              />
              <Small className="mt-1">{step * 4}px</Small>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <ButtonLink variant="primary" to="/contact">
            Button as link
          </ButtonLink>
        </div>
        <Body className="mt-4">
          Tab to a button to see the focus ring — it uses the same accent color, offset 2px, and
          meets the 3:1 non-text contrast minimum against the stone-50 page background.
        </Body>
      </Section>

      <Section title="Inline link">
        <Body>
          Case study copy will include links like this{' '}
          <InlineAnchor href="#">example inline link</InlineAnchor> styled with an underline and the
          accent color, distinct from surrounding body text without relying on color alone.
        </Body>
      </Section>
    </main>
  )
}
