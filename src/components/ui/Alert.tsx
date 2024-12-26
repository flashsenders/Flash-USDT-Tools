import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'warning' | 'error';
}

export function Alert({ children, variant = 'warning' }: AlertProps) {
  const styles = {
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    error: 'bg-red-50 border-red-200 text-red-700'
  };

  return (
    <div className={`border rounded-lg p-4 ${styles[variant]}`}>
      <div className="flex gap-3">
        <ExclamationTriangleIcon className="w-5 h-5 text-current flex-shrink-0 mt-0.5" />
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}