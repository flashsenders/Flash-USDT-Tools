import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-4xl mx-auto py-8 px-4 ${className}`}>
      {children}
    </div>
  );
}