'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HelpCircle, LogOut } from 'lucide-react'

import { cn } from '~/lib/utils'
import { Logo } from '~/components/logo'
import { links } from '~/constant/sidebar-links'

export const Sidebar = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <aside className="custom-scrollbar ml-6 flex h-full w-[50px] flex-col overflow-y-auto border-r border-border transition-all duration-300 ease-in-out md:w-[250px]">
      <header className="flex items-center space-x-3 rounded-r-full border-b border-border py-7">
        <Logo className="h-6 w-6" />
        <h2 className="hidden text-white md:block">Chainsniper</h2>
      </header>
      <main className="-mt-[1px] h-full rounded-r-[40px] border-b border-t border-border">
        <nav className="flex h-full flex-col py-7">
          <ul className="space-y-2">
            {links?.map((link, idx) => {
              const isActive = pathname === link.href

              return (
                <li key={idx} className="mr-8 w-full">
                  <Link
                    href={link.href}
                    className={cn(
                      'relative flex space-x-4 py-3 transition duration-200 ease-in-out',
                      isActive ? 'font-medium text-white' : 'hover:text-white'
                    )}
                  >
                    <link.icon
                      strokeWidth={link.text === 'Home' ? '4' : ''}
                      className={cn('h-6 w-6 shrink-0', isActive ? 'text-primary' : '')}
                    />
                    <span className="hidden text-sm md:block">{link.text}</span>
                    {!!link.badge && (
                      <span className="absolute right-7 hidden rounded-full bg-badge px-2.5 py-0.5 text-xs text-white md:block">
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
            <span className="hidden text-sm md:block">FAQ&apos;s</span>
          </div>
        </nav>
      </main>
      <footer className="-mt-[1px] rounded-r-full border-t border-border py-7">
        <div role="button" className="flex items-center space-x-3 hover:text-white">
          <LogOut className="h-5 w-5" />
          <span className="hidden text-sm md:block">Log Out</span>
        </div>
      </footer>
    </aside>
  )
}
