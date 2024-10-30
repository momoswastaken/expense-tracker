"use client";

import { useState } from 'react';
import Balance from '../components/Balance';
import TransactionForm from '../components/Form';
import TransactionHistory from '../components/History';

type Transaction = {
  description: string;
  amount: number;
};

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const calculateIncome = () => {
    return transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  };

  const calculateExpense = () => {
    return transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
  };

  const handleAddTransaction = (description: string, amount: number) => {
    if (editingIndex !== null) {
    
      const updatedTransactions = transactions.map((t, index) =>
        index === editingIndex ? { description, amount } : t
      );
      setTransactions(updatedTransactions);
      setEditingIndex(null); 
    } else {
      
      setTransactions([...transactions, { description, amount }]);
    }
  };

  const handleEditTransaction = (index: number) => {
    setEditingIndex(index);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const balance = calculateIncome() + calculateExpense();
  const transactionToEdit = editingIndex !== null ? transactions[editingIndex] : { description: '', amount: 0 };

  return (
    <div className="min-h-screen bg-vue_1A flex flex-col justify-center items-center p-4">
      <Balance balance={balance} income={calculateIncome()} expense={Math.abs(calculateExpense())} />
      <TransactionForm
        onAddTransaction={handleAddTransaction}
        description={transactionToEdit.description}
        amount={transactionToEdit.amount}
        isEditing={editingIndex !== null}
        onCancelEdit={handleCancelEdit}
      />
      <TransactionHistory transactions={transactions} onEdit={handleEditTransaction} />
    </div>
  );
}
