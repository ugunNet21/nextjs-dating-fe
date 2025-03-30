// src/constants/theme.ts
export const colors = {
  background: '#FFFFFF', // White background
  primary: '#FF5864',   // Primary pink/red color
  secondary: '#FE904B', // Secondary orange color
  text: '#333333',      // Dark text
  textSecondary: '#666666', // Secondary text
  border: '#E8E8E8',    // Light border color
  card: '#F8F8F8',      // Card background
  success: '#4CAF50',   // Success green
  error: '#F44336',     // Error red
  warning: '#FFC107',   // Warning yellow
  info: '#2196F3',      // Info blue
} as const;

export type Colors = typeof colors;