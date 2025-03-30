// src/components/ui/Text.tsx
import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
  variant?: 'body' | 'heading' | 'subheading';
}

export const Text = ({ 
  children, 
  className = '', 
  variant = 'body' 
}: TextProps) => {
  const baseClasses = {
    body: 'text-base',
    heading: 'text-2xl font-bold',
    subheading: 'text-lg font-semibold'
  };
  
  return (
    <p className={`${baseClasses[variant]} ${className}`}>
      {children}
    </p>
  );
};