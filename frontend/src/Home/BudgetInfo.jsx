import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useGetAllBudgetsQuery } from '../query/budget.query';
import { useGetTotalExpensePerCategoryQuery } from '../query/expense.query';
import { useNavigate } from 'react-router-dom';
const BudgetInfo = () => {  
  const { data: budgetData, isLoading: isBudgetLoading } = useGetAllBudgetsQuery();
  const { data: expenseData, isLoading: isExpenseLoading } = useGetTotalExpensePerCategoryQuery();
  const navigate = useNavigate();

  const viewexpense = (a,id) => {
    navigate(`/expense`,{ state: { budgetId: id, name: a } });
  };
  const getExpenseForBudget = (budgetName) => {
    return expenseData?.data?.find((d) => d._id === budgetName) || { totalAmount: 0 };
  };

  if (isBudgetLoading || isExpenseLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {budgetData?.budgets?.length > 0 ? (
        budgetData.budgets.map((budget, i) => {
          const expense = getExpenseForBudget(budget.budgetName);
          const spent = expense.totalAmount;
          const remaining = budget.amount - spent;
          const percentSpent = Math.min((spent / budget.amount) * 100, 100);

          return (
            <div key={i} className="border-2 rounded-xl p-4 m-2 shadow-md border-green-500">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold capitalize text-green-600">{budget.budgetName}</h2>
                <p className="text-lg font-semibold text-green-600">{budget.amount}</p>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-2 mb-1">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${percentSpent}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm mt-1">
                <span className="text-red-500">{spent} spent</span>
                <span className="text-blue-500">{remaining} remaining</span>
              </div>

              <button
                className="mt-4 px-4 py-2 rounded-lg text-white flex items-center gap-2 bg-red-500 cursor-pointer"
                onClick={() => viewexpense(budget.budgetName,budget._id)}
              >
                View Details <FaMoneyBillWave />
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500">No budgets available</p>
      )}
    </>
  );
};
export default BudgetInfo;