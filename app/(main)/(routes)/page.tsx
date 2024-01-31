'use client'

import React, { useState } from 'react'
import { ChevronDown, CalendarDays } from 'lucide-react'

import { Calendar } from '~/components/ui/calendar'
import { cardStatistic } from '~/constant/statistic-data'
import { StatisticCard } from '~/components/statistic-card'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

export default function Home(): JSX.Element {
  const [date, setDate] = useState<Date>()
  const [statData, setStatData] = useState(cardStatistic)

  const handleActive = (index: number): void => {
    if (!statData) {
      return
    }

    const updatedData = statData.map((stat, i) => ({
      ...stat,
      isActive: i === index ? !stat.isActive : false
    }))

    setStatData(updatedData)
  }

  return (
    <>
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
      <section className="mt-4 grid grid-flow-row gap-4 md:grid-cols-3 lg:grid-cols-4">
        {statData?.map((stat, idx) => (
          <StatisticCard key={idx} {...{ stat }} onClick={() => handleActive(idx)} />
        ))}
      </section>
    </>
  )
}
