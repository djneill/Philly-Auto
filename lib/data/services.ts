import { ServiceItem } from '@/lib/types'

export const services: ServiceItem[] = [
  {
    id: 'oil-change',
    name: 'Synthetic Oil Change',
    category: 'maintenance',
    description: 'Full synthetic oil change including filter replacement and 21-point inspection.',
    price: 69.99,
    iconName: 'FaOilCan',
    featured: true,
  },
  {
    id: 'tire-rotation',
    name: 'Tire Rotation & Balance',
    category: 'maintenance',
    description: 'Extend tire life and ensure a smooth ride with professional balancing and rotation.',
    price: 45.0,
    iconName: 'GiCarWheel',
  },
  {
    id: 'brake-fluid',
    name: 'Brake Fluid Flush',
    category: 'maintenance',
    description: 'Replace old fluid to ensure optimal braking performance and safety.',
    price: 89.0,
    iconName: 'TbDroplet',
  },
  {
    id: 'air-filter',
    name: 'Air Filter Service',
    category: 'maintenance',
    description: 'Engine and cabin air filter replacement for better performance and air quality.',
    price: 29.99,
    iconName: 'TbWind',
  },
  {
    id: 'brake-pads',
    name: 'Brake Pad Replacement',
    category: 'repairs',
    description: 'Ceramic or semi-metallic brake pad installation with rotor resurfacing options.',
    price: 149.0,
    iconName: 'FaCarBurst',
    featured: true,
  },
  {
    id: 'electrical',
    name: 'Electrical Diagnostic',
    category: 'diagnostics',
    description: 'Troubleshooting power issues, battery drains, and electrical component failures.',
    price: 95.0,
    iconName: 'TbBolt',
    featured: true,
  },
  {
    id: 'suspension',
    name: 'Suspension Repair',
    category: 'repairs',
    description: 'Struts, shocks, and control arm repairs for a stable and comfortable ride.',
    price: 199.0,
    iconName: 'GiSpring',
  },
  {
    id: 'ecu-tuning',
    name: 'ECU Custom Tuning',
    category: 'performance',
    description: 'Optimized engine mapping for increased horsepower, torque, and fuel efficiency.',
    price: 499.0,
    iconName: 'TbCpu',
  },
  {
    id: 'exhaust',
    name: 'Exhaust Systems',
    category: 'performance',
    description: 'Installation of performance cat-back or full exhaust systems for better flow and sound.',
    price: 350.0,
    iconName: 'GiStraightPipe',
  },
]

export const serviceCategories = ['all', 'maintenance', 'repairs', 'performance', 'diagnostics'] as const
export type ServiceCategory = (typeof serviceCategories)[number]
