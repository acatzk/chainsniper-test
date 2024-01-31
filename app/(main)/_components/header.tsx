'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Bell, ChevronDown } from 'lucide-react'
import { User } from '~/components/custom-icons/user'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

export const Header = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <header className="flex flex-wrap items-start justify-between gap-y-3">
      <nav className="space-y-1">
        {pathname === '/' ? (
          <>
            <h1 className="text-lg text-white">Welcome back!</h1>
            <p className="text-sm">Here&apos;s what&apos;s your up-to-date overview.</p>
          </>
        ) : (
          <h1 className="text-lg text-white">Sniper</h1>
        )}
      </nav>
      <div className="flex flex-wrap items-center gap-3">
        <Popover>
          <PopoverTrigger className="relative flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent bg-[#1F233D] p-1 transition duration-200 ease-in-out">
            <div className="inline-block rounded-full bg-[#053DA7] p-2">
              <User className="h-3 w-3 text-primary-foreground" />
            </div>
            <div className="line-clamp-1 w-24 pr-6 text-xs text-white md:w-auto">
              0x570A5D26f7765Ecb712C0924E4De545B89fD43dF
            </div>
            <ChevronDown className="absolute right-0 h-4 w-6 bg-[#1F233D] md:right-2" />
          </PopoverTrigger>
          <PopoverContent
            className="w-full max-w-md border-border bg-[#1F233D] text-sm text-white"
            align="end"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima cupiditate sapiente
            enim distinctio nostrum atque eaque cumque? Recusandae voluptates ex esse id enim, error
            molestias explicabo beatae et autem fugit?
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
            className="w-full max-w-md border-border bg-[#1F233D] text-sm text-white"
            align="end"
          >
            Notification List
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}
