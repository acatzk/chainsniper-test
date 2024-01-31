'use client'

import React, { useState } from 'react'
import {
  Bell,
  UserPlus,
  CopyPlus,
  TrendingUp,
  ChevronDown,
  CalendarDays,
  TrendingDown,
  SwitchCamera,
  CircleDollarSign
} from 'lucide-react'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { User } from '~/components/custom-icons/user'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/lib/utils'

export default function Home(): JSX.Element {
  const [date, setDate] = useState<Date>()

  const cardStatistic = [
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

  return (
    <>
      <header className="flex flex-wrap items-start justify-between">
        <nav className="space-y-1">
          <h1 className="text-lg text-white">Welcome back!</h1>
          <p className="text-sm">Here&apos;s what&apos;s your up-to-date overview.</p>
        </nav>
        <div className="flex items-center space-x-3">
          <Popover>
            <PopoverTrigger className="relative flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent bg-[#1F233D] p-1 transition duration-200 ease-in-out">
              <div className="inline-block rounded-full bg-[#053DA7] p-2">
                <User className="text-primary-foreground h-3 w-3" />
              </div>
              <p className="pr-6 text-xs text-white">0x570A5D26f7765Ecb712C0924E4De545B89fD43dF</p>
              <ChevronDown className="absolute right-2 h-4 w-4" />
            </PopoverTrigger>
            <PopoverContent
              className="border-border w-full max-w-md bg-[#1F233D] text-sm text-white"
              align="end"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima cupiditate sapiente
              enim distinctio nostrum atque eaque cumque? Recusandae voluptates ex esse id enim,
              error molestias explicabo beatae et autem fugit?
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="relative rounded-full bg-[#1F233D] hover:bg-none"
              >
                <Bell className="h-4 w-4" />
                <Badge variant="warning" className="absolute -right-2 -top-1 px-1.5 text-xs">
                  4
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="border-border w-full max-w-md bg-[#1F233D] text-sm text-white"
              align="end"
            >
              Notification List
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <section className="mt-8 flex flex-wrap items-center justify-between">
        <h3 className="text-base text-white">Statistics</h3>
        <Popover>
          <PopoverTrigger className="relative flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent bg-[#1F233D] px-2.5 py-1.5 transition duration-200 ease-in-out">
            <CalendarDays className="h-5 w-5" />
            <p className="pr-6 text-xs text-white">May 10, 2023 - May 20, 2023</p>
            <ChevronDown className="absolute right-2 h-4 w-4" />
          </PopoverTrigger>
          <PopoverContent
            className="border-border w-full bg-[#1F233D] text-sm text-white"
            align="end"
          >
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </section>
      <section className="mt-4 grid grid-flow-row grid-cols-4 gap-4">
        {cardStatistic?.map((stat, idx) => (
          <div
            key={idx}
            className={cn(
              'w-full rounded-2xl px-7 py-7',
              stat.isActive ? 'bg-[#0452ef] text-white' : 'text-secondary bg-[#121732]'
            )}
          >
            <header className="flex items-center gap-x-3">
              <div className={cn('rounded-full p-2', stat.isActive ? 'bg-white' : 'bg-[#383c52]')}>
                <stat.icon
                  className={cn('h-4 w-4', stat.isActive ? 'text-[#060B27]' : 'text-white')}
                />
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
        ))}
      </section>
    </>
  )
}
