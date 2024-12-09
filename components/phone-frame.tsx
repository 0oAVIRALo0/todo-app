'use client';

import { cn } from '@/lib/utils';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className=" min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div
        className={cn(
          'relative w-full max-w-[375px] aspect-[375/812] bg-offwhite rounded-[40px] shadow-2xl overflow-hidden border-4 border-gray-800 dark:border-gray-700',
          className
        )}
        style={{ height: '100%' }} // Scale the height responsively
      >
        <div className="relative h-full overflow-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}