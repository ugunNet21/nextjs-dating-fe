// src/components/ui/Button.tsx
'use client'

import {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

import { colors } from '../../constants/theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  fullWidth?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const baseStyle = 'py-3 px-6 rounded-full font-medium text-center'

  return (
    <button
      className={`${baseStyle} ${fullWidth ? 'w-full' : ''}`}
      {...props}
      style={{
        backgroundColor:
          variant === 'primary' ? colors.primary :
          variant === 'secondary' ? colors.secondary :
          'transparent',
        color: variant === 'text' ? colors.primary : 'white'
      }}
    >
      {children}
    </button>
  )
}
