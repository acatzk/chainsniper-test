import React, { ComponentProps, ReactNode } from 'react'

import { cn } from '~/lib/utils'

export type CardProps = {
  children: ReactNode
  className?: string
} & ComponentProps<'div'>

export const Card = (props: CardProps): JSX.Element => {
  return (
    <div {...props} className={cn('bg-card-foreground rounded-md', props.className)}>
      {props.children}
    </div>
  )
}
