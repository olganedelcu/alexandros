import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Mail } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast.success('Email sent successfully!');
      setIsOpen(false);
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Email submission error:', error);
      toast.error('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all z-50 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-80 sm:max-w-[400px] shadow-xl bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-50 z-50">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-200/50 to-indigo-200/50 backdrop-blur-sm">
          <h3 className="font-semibold text-base">Contact Me</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4 space-y-4">
          <p className="text-sm text-gray-600">
            Want to chat more in depth? Send me an email and I'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-9 text-sm bg-white/80"
              disabled={isSubmitting}
              required
            />
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="min-h-[100px] text-sm bg-white/80 resize-none"
              disabled={isSubmitting}
              required
            />
            <Button 
              type="submit" 
              size="sm" 
              className="w-full h-9 text-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              disabled={isSubmitting}
            >
              <Mail className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Email'}
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
} 