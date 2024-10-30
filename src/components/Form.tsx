// components/TransactionForm.tsx
import React, { useState, useEffect } from "react";

type TransactionFormProps = {
  onAddTransaction: (description: string, amount: number) => void;
  description: string;
  amount: number;
  isEditing: boolean;
  onCancelEdit: () => void;
};

const TransactionForm: React.FC<TransactionFormProps> = ({
  onAddTransaction,
  description = "",
  amount = "",
  isEditing,
  onCancelEdit,
}) => {
  const [inputDescription, setInputDescription] = useState(description);
  const [inputAmount, setInputAmount] = useState<number | "">("");

  useEffect(() => {
    setInputDescription(description);
    setInputAmount("");
  }, [description, amount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputDescription && inputAmount) {
      onAddTransaction(inputDescription, Number(inputAmount));
      setInputDescription("");
      setInputAmount("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4  w-1/2 bg-vue_24 border border-vue_36 text-white shadow-md mb-4"
    >
      <h3 className="text-lg font-semibold mb-4">
        {isEditing ? "Edit Transaction" : "Add New Transaction"}
      </h3>
      <input
        type="text"
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 mb-2 rounded-lg bg-vue_24 border border-vue_36 text-white placeholder-gray-400"
      />
      <input
        type="number"
        value={inputAmount}
        onChange={(e) =>
          setInputAmount(e.target.value ? Number(e.target.value) : "")
        }
        placeholder="Amount (positive for income, negative for expense)"
        className="w-full p-2 mb-2 rounded-lg bg-vue_24 border border-vue_36 text-white placeholder-gray-400"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 rounded-lg">
        {isEditing ? "Update Transaction" : "Add Transaction"}
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={onCancelEdit}
          className="w-full mt-2 p-2 bg-red-500 rounded-lg"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TransactionForm;
