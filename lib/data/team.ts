import { TeamMember } from '@/lib/types'

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Mike Johnson',
    role: 'Shop Foreman',
    yearsExp: 25,
    specialty: 'European luxury brands and complex drivetrain diagnostics',
    certifications: ['ASE Master Tech', 'L1 Advanced Specialist'],
    imagePlaceholder: '#2D4A3E',
  },
  {
    id: 'tm2',
    name: 'Sarah Chen',
    role: 'Diagnostic Specialist',
    yearsExp: 12,
    specialty: 'Hybrid systems and advanced computer diagnostics for modern vehicles',
    certifications: ['ASE Master', 'Hybrid Certified'],
    imagePlaceholder: '#1A3A4A',
  },
  {
    id: 'tm3',
    name: 'David Rodriguez',
    role: 'Senior Technician',
    yearsExp: 18,
    specialty: 'Domestic and Asian imports, suspension and brake systems',
    certifications: ['ASE Certified', 'Suspension Master'],
    imagePlaceholder: '#3A2D1A',
  },
]
