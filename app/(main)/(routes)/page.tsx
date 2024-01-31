import React from 'react'
import { Bell, ChevronDown, CircleUserRound } from 'lucide-react'

import { Card } from '~/components/card'

export default function Home(): JSX.Element {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <header className="flex flex-wrap items-start justify-between">
        <nav className="space-y-1">
          <h1 className="text-lg text-white">Welcome back!</h1>
          <p className="text-sm">Here&apos;s what&apos;s your up-to-date overview.</p>
        </nav>
        <div className="flex items-center space-x-3">
          <Card className="hover:bg-card hover:border-border relative flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent p-1 transition duration-200 ease-in-out">
            <div className="inline-block rounded-full bg-[#055FFC] p-1">
              <CircleUserRound className="text-primary-foreground h-4 w-4" />
            </div>
            <p className="pr-6 text-xs">0x570A5D26f7765Ecb712C0924E4De545B89fD43dF</p>
            <ChevronDown className="absolute right-2 h-4 w-4" />
          </Card>
          <Card className="relative inline-flex cursor-pointer items-center rounded-full p-2">
            <Bell className="h-5 w-5" />
            <span className="bg-badge absolute -right-2 -top-1 inline-block rounded-full p-0.5 px-1.5 text-xs text-white">
              4
            </span>
          </Card>
        </div>
      </header>
    </div>
  )
}
