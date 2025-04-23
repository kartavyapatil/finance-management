import React, { useState} from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { toast } from 'sonner';
import { useDeleteExpenseMutation } from '../query/expense.query';
import { useGetExpensesGroupedByCategoryQuery } from '../query/expense.query';
import { useDeleteBudgetMutation } from '../query/budget.query';
import Header from '../Header';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Tableforrxpensebygroup = () => {
  const[deletexpense ]=useDeleteExpenseMutation();
  const [deletebudget]=useDeleteBudgetMutation();
   const navigate = useNavigate();
   const location = useLocation();
  const budgetinfo = location.state; 
  const budgetid=budgetinfo.budgetId
  const name=budgetinfo.name
  const {data,isLoading}=useGetExpensesGroupedByCategoryQuery(name);
  const handlerdelete = (_id) => {
    confirmDialog({
      message: "Are you sure you want to delete this expense?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        try {
          const { data, error } = await deletexpense(_id);
          if (error) {
            toast.error(error.data.message);
            return;
          }
          toast.success(data.msg);
        } catch (e) {
          toast.error(e.message);
        }
      },
      reject: () => {
        console.log("User rejected delete for", _id);
      }
    });
  };
  
  const deletebudgetfunction = (id) => {
    confirmDialog({
      message: "Are you sure you want to delete this budget?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        try {
          const { data, error } = await deletebudget(id);
          if (error) {
            toast.error(error.data.message);
            return;
          }
          toast.success(data.msg);
          navigate("/");
        } catch (e) {
          toast.error(e.message);
        }
      },
      reject: () => {
        console.log("User rejected budget delete for", id);
      }
    });
  }; 

  return (
    <>
    <Header/>
    <div className='flex justify-between'>
      <div className='md:text-4xl text-2xl  font-sans m-3 p-1  mb-2'>Expense of {name}:-</div>
      <div className='flex'>
      <button onClick={()=>{deletebudgetfunction(budgetid)}} className="bg-red-500 p-3 rounded-md m-2 cursor-pointer"><RiDeleteBin6Line color="white" size={27} /></button>
      <button onClick={()=>{navigate("/")}} className="bg-blue-400 p-3 rounded-md m-2 cursor-pointer"><FaHome color="white" size={27} /></button>
      </div>

    </div>
    <div className='flex justify-center mt-5 '>
       <ConfirmDialog/>
          <table className="w-[70vw] text-sm text-left  text-gray-500 border-gray-300 border">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                        <tr className=''>  
                            <th scope="col" className="px-6 py-3">
                            Expense name
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {!isLoading && data?.data?.[0]?.expenses?.length > 0 ? (
    data.data[0].expenses.map((c, i) => (
      <tr key={i} className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {c.expensename}
        </th>
        <td className="px-6 py-4">{c.amount}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => handlerdelete(c._id)}
            className="bg-red-500 p-3 rounded-md m-2 cursor-pointer "
          >
            <RiDeleteBin6Line color="white" size={27} />
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr className="bg-white border-b">
      <td colSpan="3" className="text-center px-6 py-4 text-gray-500">
        No expenses found.
      </td>
    </tr>
  )}
                    </tbody>
                </table>
    </div>
    </>
  )
}

export default Tableforrxpensebygroup
