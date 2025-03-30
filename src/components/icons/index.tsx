import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'compass' | 'heart' | 'message' | 'user';
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = 'currentColor',
  ...props 
}) => {
  const icons = {
    compass: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.24-12.24l-5.66 5.66-2.83-2.83 5.66-5.66 2.83 2.83z" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    message: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  };

  return icons[name] || null;
};