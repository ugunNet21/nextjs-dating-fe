// src/types/components.d.ts
declare module '@/components/ui/Card' {
    import { FC, ReactNode } from 'react';
    
    interface CardProps {
      children: ReactNode;
      className?: string;
    }
    
    export const Card: FC<CardProps>;
  }
  
  declare module '@/components/ui/Text' {
    import { FC, ReactNode } from 'react';
    
    interface TextProps {
      children: ReactNode;
      className?: string;
      variant?: 'body' | 'heading' | 'subheading';
    }
    
    export const Text: FC<TextProps>;
  }
  
  declare module '@/components/messages/MessageBubble' {
    import { FC } from 'react';
    import { Message } from '@/features/matches/ChatScreen';
    
    interface MessageBubbleProps {
      message: Message;
      isCurrentUser: boolean;
    }
    
    export const MessageBubble: FC<MessageBubbleProps>;
  }