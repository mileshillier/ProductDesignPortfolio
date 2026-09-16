export interface NavLink {
  label: string
  href: string
}

export const primaryNav: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

export const secondaryNav: NavLink[] = [
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Writing & Speaking', href: '/writing' },
  { label: 'Leadership Philosophy', href: '/about/philosophy' },
]
