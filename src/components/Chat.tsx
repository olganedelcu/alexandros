import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Calendar } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: data.response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Show CTA after 3 messages
      if (messages.length >= 2) {
        setShowCTA(true);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCTASubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaEmail.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Here you would typically send the email to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowCTA(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: "Great! I'll redirect you to my calendar to schedule our call.",
        role: 'assistant',
        timestamp: new Date(),
      }]);
      
      // Redirect to Calendly after a short delay
      setTimeout(() => {
        window.open('https://calendly.com/aktbusinesscoaching/', '_blank');
      }, 1500);
    } catch (error) {
      console.error('CTA submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 h-12 md:h-14 w-12 md:w-14 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 md:bottom-6 right-4 md:right-6 w-[calc(100%-2rem)] md:w-80 max-w-[400px] shadow-xl bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-50">
      <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[400px]">
        <div className="flex items-center justify-between p-2 md:p-3 border-b bg-gradient-to-r from-blue-200/50 to-indigo-200/50 backdrop-blur-sm">
          <h3 className="font-semibold text-sm md:text-base">Ask Me Anything</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-7 w-7 md:h-8 md:w-8"
          >
            <X className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
        
        <ScrollArea className="flex-1 p-2 md:p-3 bg-gradient-to-b from-blue-50/50 to-indigo-50/50" ref={scrollRef}>
          <div className="space-y-2 md:space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-2 text-xs md:text-sm ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white/80 backdrop-blur-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          {showCTA && (
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white/90 rounded-lg shadow-sm">
              <h4 className="font-medium text-xs md:text-sm mb-2">Ready to take the next step?</h4>
              <form onSubmit={handleCTASubmit} className="space-y-2">
                <Input
                  type="email"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-7 md:h-8 text-xs md:text-sm bg-white/80"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="w-full h-7 md:h-8 text-xs md:text-sm bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600"
                  disabled={isSubmitting}
                >
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  {isSubmitting ? 'Sending...' : 'Book a Call'}
                </Button>
              </form>
            </div>
          )}
        </ScrollArea>
        
        <form onSubmit={handleSubmit} className="p-2 md:p-3 border-t bg-gradient-to-r from-blue-200/50 to-indigo-200/50 backdrop-blur-sm">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 h-8 md:h-9 text-xs md:text-sm bg-white/80"
            />
            <Button type="submit" disabled={isLoading} size="sm" className="h-8 md:h-9 text-xs md:text-sm">
              {isLoading ? '...' : 'Send'}
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
} 