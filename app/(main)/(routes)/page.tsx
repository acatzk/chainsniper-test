import React from 'react'
import { Bell, ChevronDown } from 'lucide-react'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { User } from '~/components/custom-icons/user'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

export default function Home(): JSX.Element {
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
    </>
  )
}
