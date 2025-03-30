// src/components/ui/Input.tsx
import {
  ChangeEvent,
  KeyboardEvent,
} from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  onKeyPress,
  className = ''
}: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      className={`flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};