import React from 'react';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, subtitle, children, className }) => {
  return (
    <div className={cn(
      "w-full max-w-2xl mx-auto bg-card rounded-lg p-8 shadow-lg backdrop-blur-sm animate-fade-in",
      className
    )}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default QuestionCard;