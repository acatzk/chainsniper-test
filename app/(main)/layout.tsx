import React, { ReactNode } from 'react'

import { Header } from './_components/header'
import { Sidebar } from './_components/sidebar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="flex h-full overflow-y-auto bg-background text-secondary">
      <Sidebar />
      <main className="custom-scrollbar flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl p-6">
          <Header />
          {children}
        </div>
      </main>
    </div>
  )
}
