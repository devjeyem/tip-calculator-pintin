// src/types/calculator.types.ts

export interface BillInputProps {
  value: string;
  onChange: (value: string) => void;
}

export interface TipSelectorProps {
  selectedTip: string;
  customTip: string;
  onTipSelect: (value: string) => void;
  onCustomTipChange: (value: string) => void;
}

export interface PeopleInputProps {
  value: string;
  onChange: (value: string) => void;
  error: string;
}

export interface ResultDisplayProps {
  label: string;
  amount: string;
}

export interface ResultsPanelProps {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
  isResetDisabled: boolean;
}

export interface CalculatorState {
  bill: string;
  tip: string;
  customTip: string;
  people: string;
  error: string;
  setBill: (value: string) => void;
  handleTipSelect: (value: string) => void;
  handleCustomTipChange: (value: string) => void;
  handlePeopleChange: (value: string) => void;
  handleReset: () => void;
  calculateTipAmount: () => string;
  calculateTotal: () => string;
  isResetDisabled: boolean;
}

// 👇 This ensures Vercel recognizes it as a module
export {};
