import { TrendingDown, TrendingUp } from 'lucide-react'

import { cn } from '~/lib/utils'
import { CardStatistic } from '~/constant/statistic-data'

type StatisticCardProps = {
  stat: CardStatistic
  onClick: () => void
}

export const StatisticCard = ({ stat, onClick }: StatisticCardProps): JSX.Element => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={cn(
        'w-full rounded-2xl px-7 py-7',
        stat.isActive ? 'bg-[#0452ef] text-white' : 'text-secondary cursor-pointer bg-[#121732]'
      )}
    >
      <header className="flex items-center gap-x-3">
        <div className={cn('rounded-full p-2', stat.isActive ? 'bg-white' : 'bg-[#383c52]')}>
          <stat.icon className={cn('h-4 w-4', stat.isActive ? 'text-[#060B27]' : 'text-white')} />
        </div>
        <h4 className="text-base">{stat.title}</h4>
      </header>
      <main className="mt-4">
        <h2 className="text-2xl font-semibold">{stat.earn}</h2>
        <div className="mt-2 flex items-center gap-x-2 text-xs">
          <div className="flex items-center space-x-1">
            {stat.trends.isTrend ? (
              <TrendingUp className="h-4 w-4 text-[#20DF4A]" />
            ) : (
              <TrendingDown className="h-4 w-4 text-[#FE5B01]" />
            )}
            <span>{stat.trends.percentage}</span>
          </div>
          <p className={cn(stat.isActive ? 'text-[#9BBFFE]' : 'text-[#7E808F]')}>
            {stat.trends.weekly} this week
          </p>
        </div>
      </main>
    </div>
  )
}
