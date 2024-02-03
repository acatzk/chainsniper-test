import { CircleDollarSign, CopyPlus, LucideIcon, SwitchCamera, UserPlus } from 'lucide-react'

export type SaleData = {
  month: string
  sales: number
}

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
  dateFrom: string
  dateTo: string
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
    isActive: true,
    dateFrom: '2020-02-06',
    dateTo: '2025-02-06'
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
    isActive: false,
    dateFrom: '2020-02-06',
    dateTo: '2025-02-06'
  },
  {
    icon: UserPlus,
    title: 'Avg Percentage',
    earn: '12,4 %',
    trends: {
      isTrend: true,
      percentage: '+1,25%',
      weekly: '+1.6K'
    },
    isActive: false,
    dateFrom: '2020-02-06',
    dateTo: '2025-02-06'
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
    isActive: false,
    dateFrom: '2020-02-06',
    dateTo: '2025-02-06'
  }
]

export const salesData = [
  { month: 'January', sales: Math.floor(Math.random() * 1000) },
  { month: 'February', sales: Math.floor(Math.random() * 1000) },
  { month: 'March', sales: Math.floor(Math.random() * 1000) },
  { month: 'April', sales: Math.floor(Math.random() * 1000) },
  { month: 'May', sales: Math.floor(Math.random() * 1000) },
  { month: 'June', sales: Math.floor(Math.random() * 1000) },
  { month: 'July', sales: Math.floor(Math.random() * 1000) },
  { month: 'August', sales: Math.floor(Math.random() * 1000) },
  { month: 'September', sales: Math.floor(Math.random() * 1000) },
  { month: 'October', sales: Math.floor(Math.random() * 1000) },
  { month: 'November', sales: Math.floor(Math.random() * 1000) },
  { month: 'December', sales: Math.floor(Math.random() * 1000) }
]
