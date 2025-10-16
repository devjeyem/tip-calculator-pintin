import { TipSelectorProps } from '@/types/calculator.types';
import { JSX } from 'react';

export function TipSelector({ 
  selectedTip, 
  customTip, 
  onTipSelect, 
  onCustomTipChange 
}: TipSelectorProps): JSX.Element {
  const tipOptions: number[] = [5, 10, 15, 25, 50];

  return (
    <div>
      <label className="block text-gray-600 text-sm font-bold mb-2">
        Select Tip %
      </label>
      <div className="grid grid-cols-3 gap-3">
        {tipOptions.map((option: number) => (
          <button
            key={option}
            onClick={() => onTipSelect(option.toString())}
            className={`py-2 rounded-md text-xl font-bold transition-all ${
              selectedTip === option.toString()
                ? 'bg-cyan-400 text-cyan-900'
                : 'bg-cyan-900 text-white hover:bg-cyan-400 hover:text-cyan-900'
            }`}
          >
            {option}%
          </button>
        ))}
        <input
          type="number"
          value={customTip}
          onChange={(e) => onCustomTipChange(e.target.value)}
          placeholder="Custom"
          className="bg-gray-50 text-gray-800 text-center text-xl font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}