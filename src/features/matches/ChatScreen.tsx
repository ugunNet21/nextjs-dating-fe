// src/features/matches/ChatScreen.tsx
import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { MessageBubble } from 'components/messages/MessageBubble';
import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { useAuth } from 'hooks/useAuth';
import { Message } from 'types/message';
import { api } from 'utils/api';

interface ChatScreenProps {
  matchId: number;
}

export const ChatScreen = ({ matchId }: ChatScreenProps) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await api.get<Message[]>(`/matches/${matchId}/messages`);
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    
    fetchMessages();
  }, [matchId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    
    try {
      const { data } = await api.post<Message>(`/messages/${matchId}`, {
        messageText: newMessage
      });
      
      setMessages([...messages, data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.message_id}
            message={message}
            isCurrentUser={message.sender_id === user?.userId}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Type a message..."
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleSend}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )};
