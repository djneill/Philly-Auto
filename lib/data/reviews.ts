import { Review } from '@/lib/types'

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'James Sullivan',
    initials: 'JS',
    stars: 5,
    quote:
      'Hands down the best shop in Philly. Fixed my transmission in record time and the price was exactly what they quoted. Professional and honest.',
    serviceTag: 'Transmission',
    timeAgo: '2 days ago',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Maria Kowalski',
    initials: 'MK',
    stars: 5,
    quote:
      "Took my SUV in for a body repair after a fender bender. The paint matching is incredible — you can't even tell anything happened. Kept me updated the whole time. Highly recommended.",
    serviceTag: 'Collision Repair',
    timeAgo: '1 week ago',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Robert Davis',
    initials: 'RD',
    stars: 4,
    quote: 'Quick oil change and brake inspection. Efficient and clean shop. Will definitely be back.',
    serviceTag: 'Maintenance',
    timeAgo: '2 weeks ago',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Elena Lopez',
    initials: 'EL',
    stars: 5,
    quote:
      "I've been bringing my classic car here for 5 years. They treat it like their own. If you want specialized care for your vehicle, this is the only place to go.",
    serviceTag: 'Classic Restoration',
    timeAgo: '1 month ago',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Tom Chen',
    initials: 'TC',
    stars: 5,
    quote:
      'Fantastic service from start to finish. They even helped with the insurance paperwork. The engine cleaning made my 10-year-old car look brand new under the hood.',
    serviceTag: 'Detailing',
    timeAgo: '1 month ago',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Alice Wong',
    initials: 'AW',
    stars: 5,
    quote:
      'Fair pricing and very clear communication. No hidden fees. Finally a shop you can actually trust in this city.',
    serviceTag: 'Inspection',
    timeAgo: '2 months ago',
    verified: true,
  },
]
