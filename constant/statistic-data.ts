import { CircleDollarSign, CopyPlus, LucideIcon, SwitchCamera, UserPlus } from 'lucide-react'

export type CardStatistic = {
  icon: LucideIcon
  title: string
  earn: string
  trends: {
    isTrend: boolean
    percentage: string
    weekly: string
  }
  isActive: boolean
}

export const cardStatistic: CardStatistic[] = [
  {
    icon: CircleDollarSign,
    title: 'Total Earnings',
    earn: '$45,556',
    trends: {
      isTrend: true,
      percentage: '+1,25%',
      weekly: '+1.6K'
    },
    isActive: true
  },
  {
    icon: CopyPlus,
    title: 'Total Snipes',
    earn: '12',
    trends: {
      isTrend: true,
      percentage: '+1,25%',
      weekly: '+1.6K'
    },
    isActive: false
  },
  {
    icon: UserPlus,
    title: 'Avg Percentage',
    earn: '12,4%',
    trends: {
      isTrend: true,
      percentage: '+1,25%',
      weekly: '+1.6K'
    },
    isActive: false
  },
  {
    icon: SwitchCamera,
    title: 'Running Snipes',
    earn: '2',
    trends: {
      isTrend: false,
      percentage: '-2,5%',
      weekly: '56'
    },
    isActive: false
  }
]
