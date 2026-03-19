import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

function Container({ as: Component = 'div', className, children }: ContainerProps) {
  return (
    <Component className={clsx('mx-auto w-full max-w-[75rem] px-6 lg:px-8', className)}>
      {children}
    </Component>
  )
}

export default Container

