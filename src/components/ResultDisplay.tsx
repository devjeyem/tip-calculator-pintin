import { ResultDisplayProps } from '@/types/calculator.types';
import { JSX } from 'react';

export function ResultDisplay({ label, amount }: ResultDisplayProps): JSX.Element {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-white text-sm font-bold">{label}</p>
        <p className="text-cyan-700 text-xs">/ person</p>
      </div>
      <p className="text-cyan-400 text-4xl md:text-5xl font-bold tracking-tight">
        ${amount}
      </p>
    </div>
  );
}