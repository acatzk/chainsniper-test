import React, { ReactNode } from 'react'

import { Sidebar } from './_components/Sidebar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="bg-background text-secondary flex h-full overflow-y-auto">
      <Sidebar />
      <main className="custom-scrollbar mx-auto max-w-6xl flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  )
}
