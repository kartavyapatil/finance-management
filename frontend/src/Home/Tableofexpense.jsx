import React, { useState ,useEffect} from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { toast } from 'sonner';
import { useDeleteExpenseMutation } from '../query/expense.query';
import { useGetAllExpensesQuery } from '../query/expense.query';
// import {use}
const Tableofexpense = () => {
  const[deletexpense ]=useDeleteExpenseMutation();
  const{data,isLoading,refetch }=useGetAllExpensesQuery(undefined, {
    refetchOnMountOrArgChange: true,} );
  const [visibleconfirmdialog, setVisibleconfirmdialog] = useState(false);
  const handlerdelete=(_id)=>{
    setVisibleconfirmdialog(true)
    confirmDialog({   
      visible:{visibleconfirmdialog} ,
      onHide:setVisibleconfirmdialog(false),
      message:"Are you sure you want to proceed?",
      header:"Confirmation",
      accept:async()=>{
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
              reject:()=>{
                console.log("reject for "+_id);
      }
    })
  }  
        return (
          <>
          <ConfirmDialog/>
    <table className="w-4/5 text-sm text-left  text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                  <tr>  
                      <th scope="col" className="px-6 py-3">
                      Expense name
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Amount
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Budget Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Action
                      </th>
                  </tr>
              </thead>
              <tbody>
              {!isLoading && data.expenses.length>0 && data.expenses.map((c,i)=>{
                  return  <tr key={i} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {c.expensename}
                  </th>
                  <td className="px-6 py-4">
                    {c.amount}
                  </td>
                  <td className="px-6 py-4">
                    {c.category}
                  </td>
                  <td className="px-6 py-4">   
                    <Button onClick={() => handlerdelete(c._id)} className='bg-red-500 p-2 rounded-md m-2'>
                      <RiDeleteBin6Line color='white' size={27} />
                    </Button>
                  </td>
                </tr>
                })}
                
              </tbody>
          </table>
    </>
  );
};

export default Tableofexpense;
