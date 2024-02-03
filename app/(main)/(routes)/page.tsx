'use client'

import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import { ChevronDown, CalendarDays } from 'lucide-react'

import { LineChart } from '~/components/line-chart'
import { HistoryTable } from '~/components/history-table'
import { StatisticCard } from '~/components/statistic-card'
import { cardStatistic, salesData } from '~/constant/statistic-data'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

export default function Home(): JSX.Element {
  const [value, setValue] = useState<{
    startDate: Date | string
    endDate: Date | string
  }>({
    startDate: 'Start Date',
    endDate: 'End Date'
  })
  const [cardData, setCardData] = useState(cardStatistic)

  const [sales, setSales] = useState<
    Array<{
      month: string
      sales: number
    }>
  >(salesData)

  const startDate = value?.startDate?.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  const endDate = value?.endDate?.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  const handleActive = (index: number): void => {
    if (!cardStatistic) {
      return
    }

    const updatedData = cardData.map((stat, i) => ({
      ...stat,
      isActive: i === index
    }))

    setCardData(updatedData)
  }

  const handleValueChange = (
    newValue: React.SetStateAction<{ startDate: Date | string; endDate: Date | string }>
  ): void => {
    setValue(newValue)

    const newSales = salesData.map((sales) => ({
      ...sales,
      sales: Math.floor(Math.random() * 500)
    }))

    setSales(newSales)

    const updatedData = cardStatistic.map((stat) => {
      const earn = Math.floor(Math.random() * 1000)
      const isTotalEarning = stat.title === 'Total Earnings'
      const isTotalSnpes = stat.title === 'Total Snipes'

      return {
        ...stat,
        earn: `${isTotalEarning || isTotalSnpes ? `$${earn}` : `${earn}%`} `,
        trends: {
          isTrend: Math.random() > 0.5,
          percentage: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 5).toFixed(2)}%`,
          weekly: `+${Math.floor(Math.random() * 200)}`
        }
      }
    })
    setCardData(updatedData)
  }

  return (
    <>
      <section className="mt-8 flex flex-wrap items-center justify-between">
        <h2 className="text-lg text-white">Statistics</h2>
        <Popover>
          <PopoverTrigger className="relative flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent bg-[#1F233D] px-2.5 py-1.5 transition duration-200 ease-in-out">
            <CalendarDays className="h-5 w-5" />
            <p className="pr-6 text-xs text-white">{`${startDate ?? 'Start Date'} - ${endDate ?? 'End Date'}`}</p>
            <ChevronDown className="absolute right-2 h-4 w-4" />
          </PopoverTrigger>
          <PopoverContent
            className="w-full border-border bg-[#1F233D] p-0 text-sm text-white"
            align="end"
          >
            <Datepicker
              value={value as any}
              onChange={handleValueChange as any}
              primaryColor={`blue`}
            />
          </PopoverContent>
        </Popover>
      </section>
      <section className="mt-4 grid grid-flow-row gap-4 md:grid-cols-3 lg:grid-cols-4">
        {cardData?.map((stat, idx) => (
          <StatisticCard key={idx} {...{ stat }} onClick={() => handleActive(idx)} />
        ))}
      </section>
      <section className="mt-4 rounded-2xl bg-[#121732] text-[#717383]">
        <h2 className="px-6 pt-6 text-lg text-white">Chart Sample</h2>
        <LineChart
          {...{
            salesData: sales
          }}
        />
      </section>
      <section className="mt-8">
        <h2 className="text-lg text-white">History</h2>
        <HistoryTable />
      </section>
    </>
  )
}
