
import React from 'react';

type Transaction = {
  description: string;
  amount: number;
};

type TransactionHistoryProps = {
  transactions: Transaction[];
  onEdit: (index: number) => void;
};

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions, onEdit }) => {
  return (
    <div className="p-4 w-1/2 bg-vue_24 border border-vue_36 text-white shadow-md">
      <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">Description</th>
            <th className="px-4 py-2 border-b border-gray-700">Amount</th>
            <th className="px-4 py-2 border-b border-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="px-4 py-2">{transaction.description}</td>
              <td className={`px-4 py-2 ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                ${transaction.amount}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onEdit(index)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
