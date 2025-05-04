"use client";


import MessageItem from './message-item';

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  service: string;
  priority: 'High' | 'Medium' | 'Low';
  avatar?: string;
}

interface MessageListProps {
  messages: Message[];
  className?: string;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages = [
    {
      id: '1',
      name: 'Mr. Maël Mountassir',
      message: 'The AC is leaking in my room, can you send the maintenance please?',
      timestamp: '16 / 03 / 2025 09:42',
      service: 'Maintenance',
      priority: 'High'
    },
    {
      id: '2',
      name: 'Mr. Maël Mountassir',
      message: 'The AC is leaking in my room, can you send the maintenance please?',
      timestamp: '16 / 03 / 2025 09:42',
      service: 'Maintenance',
      priority: 'High'
    }
  ],
  className = ''
}) => {
  return (
    <div className={`mt-6 ${className}`}>
      {/* Messages avec effet de superposition */}
      <div className="relative pb-12 md:pb-6">
        {messages.map((message, index) => (
          <div 
            key={message.id} 
            className={`relative mb-4 last:mb-0 transition-transform hover:-translate-y-1`}
            style={{ 
              zIndex: messages.length - index
            }}
          >
            <MessageItem
              name={message.name}
              message={message.message}
              timestamp={message.timestamp}
              service={message.service}
              priority={message.priority}
              avatar={message.avatar}
              className={index === 0 ? 'border-l-4' : ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList; 