import clsx from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'solid' | 'outline' | 'dark'

type CommonProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

type RouterLinkButtonProps = CommonProps &
  Omit<LinkProps, 'to' | 'className' | 'children'> & {
    to: string
    href?: never
  }

type AnchorLinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    to?: never
  }

type LinkButtonProps = RouterLinkButtonProps | AnchorLinkButtonProps

const baseClassName =
  'inline-flex items-center justify-center rounded-[5.875rem] border-2 px-8 py-4 text-base font-bold transition duration-200 focus-visible:outline-none hover:scale-105 active:scale-95'

const variantClassName: Record<Variant, string> = {
  solid: 'border-accent bg-accent text-primary hover:border-[#e6b520] hover:bg-[#e6b520]',
  outline:
    'border-white bg-transparent text-white hover:border-white/80 hover:bg-white/10',
  dark: 'border-primary bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90',
}

export function Button({
  variant = 'solid',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(baseClassName, variantClassName[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  variant = 'solid',
  className,
  children,
  ...props
}: LinkButtonProps) {
  if ('to' in props && props.to) {
    return (
      <Link className={clsx(baseClassName, variantClassName[variant], className)} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={clsx(baseClassName, variantClassName[variant], className)} {...props}>
      {children}
    </a>
  )
}

