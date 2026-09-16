import { ButtonLink } from '@/components/Button'
import { BodyLarge, Display, Eyebrow } from '@/components/Typography'

export function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24">
      <Eyebrow>Principal Product Designer</Eyebrow>
      <Display className="mt-3">Site scaffold running — design system next.</Display>
      <BodyLarge className="mt-4">
        Real hero copy, proof points, and case study previews land in Phase 4. This page exists to
        confirm the design system renders correctly end to end.
      </BodyLarge>
      <ButtonLink to="/design-system" variant="primary" className="mt-8">
        View design system
      </ButtonLink>
    </main>
  )
}
