import { DollarSign } from 'lucide-react';
import { BillInputProps } from '@/types/calculator.types';
import { JSX } from 'react';

export function BillInput({ value, onChange }: BillInputProps): JSX.Element {
  return (
    <div>
      <label className="block text-gray-600 text-sm font-bold mb-2">
        Bill
      </label>
      <div className="relative">
        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="w-full bg-gray-50 text-gray-800 text-right text-2xl font-bold py-2 px-4 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
    </div>
  );
}