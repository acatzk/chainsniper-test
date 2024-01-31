'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart2, BriefcaseIcon, HelpCircle, LogOut } from 'lucide-react'

import { cn } from '~/lib/utils'
import { Logo } from '~/components/logo'

export const Sidebar = (): JSX.Element => {
  const pathname = usePathname()

  const links = [
    {
      href: '/',
      text: 'Home',
      icon: BarChart2,
      badge: 15
    },
    {
      href: '/sniper',
      text: 'Sniper',
      icon: BriefcaseIcon
    }
  ]

  return (
    <aside className="border-border custom-scrollbar ml-6 flex h-full w-[250px] flex-col overflow-y-auto border-r">
      <header className="border-border flex items-center space-x-3 rounded-r-full border-b py-7">
        <Logo className="h-6 w-6" />
        <h2 className="text-white">Chainsniper</h2>
      </header>
      <main className="border-border -mt-[1px] h-full rounded-r-[40px] border-b border-t">
        <nav className="flex h-full flex-col py-7">
          <ul className="space-y-2">
            {links?.map((link, idx) => {
              const isActive = pathname === link.href

              return (
                <li key={idx} className="mr-8">
                  <Link
                    href={link.href}
                    className={cn(
                      'relative flex items-center space-x-4 py-3 transition duration-200 ease-in-out',
                      isActive ? 'font-medium text-white' : 'hover:text-white'
                    )}
                  >
                    <link.icon
                      strokeWidth={link.text === 'Home' ? '4' : ''}
                      className={cn('h-6 w-6', isActive ? 'text-primary' : '')}
                    />
                    <span className="text-sm">{link.text}</span>
                    {!!link.badge && (
                      <span className="bg-badge absolute right-0 rounded-full px-2.5 py-0.5 text-xs text-white">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div role="button" className="mt-auto flex items-center space-x-4 py-3 hover:text-white">
            <HelpCircle className="h-5 w-5" />
            <span className="text-sm">FAQ&apos;s</span>
          </div>
        </nav>
      </main>
      <footer className="border-border -mt-[1px] rounded-r-full border-t py-7">
        <div role="button" className="flex items-center space-x-3 hover:text-white">
          <LogOut className="h-5 w-5" />
          <span className="text-sm">Log Out</span>
        </div>
      </footer>
    </aside>
  )
}
