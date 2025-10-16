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
        className={`w-full py-3 rounded-md text-cyan-900 text-lg font-bold uppercase tracking-wider transition-all duration-200
          ${
            isResetDisabled
              ? 'bg-cyan-400/70 text-cyan-950 cursor-not-allowed' // visible but slightly faded
              : 'bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-200'
          }`}
      >
        Reset
      </button>
    </div>
  );
}
