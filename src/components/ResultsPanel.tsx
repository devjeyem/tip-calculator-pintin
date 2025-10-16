import { JSX } from 'react';
import { ResultDisplay } from './ResultDisplay';
import { ResultsPanelProps } from '@/types/calculator.types';

export function ResultsPanel({ 
  tipAmount, 
  totalAmount, 
  onReset, 
  isResetDisabled 
}: ResultsPanelProps): JSX.Element {
  return (
    <div className="bg-cyan-900 rounded-2xl p-8 flex flex-col justify-between min-h-[420px]">
      <div className="space-y-8 flex-1">
        <ResultDisplay label="Tip Amount" amount={tipAmount} />
        <ResultDisplay label="Total" amount={totalAmount} />
      </div>

      <button
        onClick={onReset}
        disabled={isResetDisabled}
        className={`w-full py-3 rounded-md text-cyan-900 text-lg font-bold uppercase tracking-wider transition-all ${
          isResetDisabled
            ? 'bg-cyan-800 cursor-not-allowed opacity-30'
            : 'bg-cyan-400 hover:bg-cyan-300'
        }`}
      >
        Reset
      </button>
    </div>
  );
}