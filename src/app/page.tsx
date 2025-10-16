'use client';

import { BillInput } from '@/components/BillInput';
import { TipSelector } from '@/components/TipSelector';
import { PeopleInput } from '@/components/PeopleInput';
import { ResultsPanel } from '@/components/ResultsPanel';
import { useCalculator } from '@/hooks/useCalculator';
import { JSX } from 'react';

export default function TipCalculator(): JSX.Element {
  const calculator = useCalculator();

  return (
    <div className="min-h-screen bg-cyan-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold text-cyan-800 tracking-[0.3em] mb-16 text-center leading-relaxed">
        SPLI<br />TTER
      </h1>
      
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[920px] p-8 grid grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="space-y-10">
          <BillInput 
            value={calculator.bill} 
            onChange={calculator.setBill} 
          />
          
          <TipSelector
            selectedTip={calculator.tip}
            customTip={calculator.customTip}
            onTipSelect={calculator.handleTipSelect}
            onCustomTipChange={calculator.handleCustomTipChange}
          />
          
          <PeopleInput
            value={calculator.people}
            onChange={calculator.handlePeopleChange}
            error={calculator.error}
          />
        </div>

        {/* Results Section */}
        <ResultsPanel
          tipAmount={calculator.calculateTipAmount()}
          totalAmount={calculator.calculateTotal()}
          onReset={calculator.handleReset}
          isResetDisabled={calculator.isResetDisabled}
        />
      </div>
    </div>
  );
}