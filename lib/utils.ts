import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}

import {
  FaOilCan,
  FaShieldHalved,
  FaCalendarCheck,
  FaUsers,
  FaStar,
  FaWrench,
  FaCarBurst,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaGoogle,
} from 'react-icons/fa6'
import { GiCarWheel, GiSpring, GiStraightPipe, GiGearStick } from 'react-icons/gi'
import { TbDroplet, TbWind, TbBolt, TbCpu } from 'react-icons/tb'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { MdVerified } from 'react-icons/md'

export const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  FaOilCan,
  FaShieldHalved,
  FaCalendarCheck,
  FaUsers,
  FaStar,
  FaWrench,
  FaCarBurst,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  GiCarWheel,
  GiSpring,
  GiStraightPipe,
  GiGearStick,
  TbDroplet,
  TbWind,
  TbBolt,
  TbCpu,
  RiMenuLine,
  RiCloseLine,
  MdVerified,
}
