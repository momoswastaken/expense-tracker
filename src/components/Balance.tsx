// components/Balance.tsx
import React from 'react';

type BalanceProps = {
  balance: number;
  income: number;
  expense: number;
};

const Balance: React.FC<BalanceProps> = ({ balance, income, expense }) => {
  return (
    <div className="p-4 w-1/2 bg-vue_24 border border-vue_36 text-white shadow-md">
      <h2 className="text-2xl text-center font-semibold mb-4">Expense Tracker</h2>
      <h3 className="text-xl">Balance: ${balance}</h3>
      <br></br>
      <div className="flex justify-start space-x-48">
        <div className="text-green-400">Income: ${income}</div>
        <div className="text-red-400">Expense: ${expense}</div>
      </div>
    </div>
  );
};

export default Balance;
