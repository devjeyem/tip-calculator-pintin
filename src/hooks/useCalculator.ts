import { useState } from 'react';
import { CalculatorState } from '@/types/calculator.types';

export function useCalculator(): CalculatorState {
  const [bill, setBill] = useState<string>('');
  const [tip, setTip] = useState<string>('');
  const [customTip, setCustomTip] = useState<string>('');
  const [people, setPeople] = useState<string>('');
  const [error, setError] = useState<string>('');

  const calculateTipAmount = (): string => {
    if (!bill || !people || people === '0') return '0.00';
    const billAmount: number = parseFloat(bill);
    const numPeople: number = parseInt(people);
    const tipPercent: number = tip === 'custom' 
      ? parseFloat(customTip) || 0 
      : parseFloat(tip) || 0;
    
    const tipPerPerson: number = (billAmount * (tipPercent / 100)) / numPeople;
    return tipPerPerson.toFixed(2);
  };

  const calculateTotal = (): string => {
    if (!bill || !people || people === '0') return '0.00';
    const billAmount: number = parseFloat(bill);
    const numPeople: number = parseInt(people);
    const tipPercent: number = tip === 'custom' 
      ? parseFloat(customTip) || 0 
      : parseFloat(tip) || 0;
    
    const totalPerPerson: number = (billAmount * (1 + tipPercent / 100)) / numPeople;
    return totalPerPerson.toFixed(2);
  };

  const handleTipSelect = (value: string): void => {
    setTip(value);
    setCustomTip('');
  };

  const handleCustomTipChange = (value: string): void => {
    setCustomTip(value);
    setTip('custom');
  };

  const handlePeopleChange = (value: string): void => {
    setPeople(value);
    if (value === '0') {
      setError("Can't be zero");
    } else {
      setError('');
    }
  };

  const handleReset = (): void => {
    setBill('');
    setTip('');
    setCustomTip('');
    setPeople('');
    setError('');
  };

  const isResetDisabled: boolean = !bill && !tip && !customTip && !people;

  return {
    bill,
    tip,
    customTip,
    people,
    error,
    setBill,
    handleTipSelect,
    handleCustomTipChange,
    handlePeopleChange,
    handleReset,
    calculateTipAmount,
    calculateTotal,
    isResetDisabled,
  };
}