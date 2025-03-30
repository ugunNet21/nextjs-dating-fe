// src/types/message.ts
export interface Message {
    message_id: number;
    match_id: number;
    sender_id: number;
    message_text: string;
    is_read: boolean;
    sent_at: string;
  }