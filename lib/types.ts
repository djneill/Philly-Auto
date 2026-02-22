export interface ServiceItem {
  id: string
  name: string
  category: 'maintenance' | 'repairs' | 'performance' | 'diagnostics'
  description: string
  price: number
  iconName: string
  featured?: boolean
}

export interface Review {
  id: string
  name: string
  initials: string
  stars: number
  quote: string
  serviceTag: string
  timeAgo: string
  verified: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  yearsExp: number
  specialty: string
  certifications: string[]
  imagePlaceholder: string
}

export interface GalleryItem {
  id: string
  title: string
  category: 'body-work' | 'detailing' | 'engine'
  description: string
  date: string
  beforeAlt: string
  afterAlt: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface TrustItem {
  id: string
  label: string
  value: string
  iconName: string
}

export interface NavLink {
  label: string
  href: string
}

export interface WhyUsItem {
  id: string
  iconName: string
  title: string
  description: string
}
