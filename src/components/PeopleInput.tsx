import { User } from 'lucide-react';
import { PeopleInputProps } from '@/types/calculator.types';
import { JSX } from 'react';

export function PeopleInput({ value, onChange, error }: PeopleInputProps): JSX.Element {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-gray-600 text-sm font-bold">
          Number of People
        </label>
        {error && <span className="text-red-400 text-sm font-bold">{error}</span>}
      </div>
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className={`w-full bg-gray-50 text-gray-800 text-right text-2xl font-bold py-2 px-4 pl-10 rounded-md focus:outline-none focus:ring-2 ${
            error ? 'ring-2 ring-red-400' : 'focus:ring-cyan-500'
          }`}
        />
      </div>
    </div>
  );
}