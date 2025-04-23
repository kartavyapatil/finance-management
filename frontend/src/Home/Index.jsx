import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useCreateBudgetMutation } from '../query/budget.query';
import { useGetAllBudgetsQuery } from '../query/budget.query';
import {useCreateExpenseMutation} from '../query/expense.query'
import { toast } from 'sonner';
import Tableofexpense from './Tableofexpense';
import BudgetInfo from './BudgetInfo';
const Index = () => {
  const [createBudget] = useCreateBudgetMutation();
  const [createexpense]=useCreateExpenseMutation();
  const {data ,isLoading}=useGetAllBudgetsQuery();
  const budgetInitialValues = {
    budgetName: '',
    amount: '',
  };
  const expenseInitialValues = {
    expensename: '',
    amount: '',
     category: '',
  };
  const budgetValidationSchema = yup.object({
    budgetName: yup.string().required('Budget name is required'),
    amount: yup
      .number()
      .required('Amount is required')
      .positive('Amount must be positive'),
  });

  const expenseValidationSchema = yup.object({
    expensename: yup.string().required('Expense name is required'),
    amount: yup
      .number()
      .required('Amount is required')
      .positive('Amount must be positive'),
      category: yup.string().required('Category is required'),
  });

  const handleBudgetSubmit = async (values, { resetForm }) => {
    console.log(values)
    try {
      const { data, error } = await createBudget(values);
      if (error) {
        toast.error(error.data.message);
        return;
      }
      toast.success('Budget created successfully');
      resetForm();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleExpenseSubmit = async (values, { resetForm }) => {
    try {
      const { data, error } = await createexpense(values);
      if (error) {
        toast.error(error.data.message);
        return;
      }
      toast.success('expense created successfully');
      resetForm();
    } catch (err) {
      toast.error(err.message);
    };
  };

  return (
    <div>
      <div className='text-6xl font-sans m-3 p-1 font-bold mb-2'>Welcome back</div>
      <div className='md:flex md:justify-around md:flex-row flex-col '>
        <div className='border-2 border-dotted border-gray rounded-lg shadow-lg m-3 p-5 bg-white md:w-[40vw] mt-10'>
          <div className='text-2xl font-sans m-3 p-1 font-bold mb-2'>Create Budget</div>
          <Formik initialValues={budgetInitialValues} validationSchema={budgetValidationSchema} onSubmit={handleBudgetSubmit} >
            <Form className='flex flex-col gap-2'>
              <label htmlFor='budgetName' className='text-lg font-sans font-bold m-1'> Budget Name :-</label>
              <Field type='text' name='budgetName' id='budgetName' placeholder='Enter your budget name' className='ml-3 border-2 border-gray rounded-sm shadow-lg h-10 md:w-[30vw]'/>
              <ErrorMessage name='budgetName' component='p' className='text-red-500 text-sm ml-3' />
              <label htmlFor='amount' className='text-lg font-sans font-bold m-1'>  Amount :- </label>
              <Field type='number' name='amount' id='amount' placeholder='Enter your budget amount' className='ml-3 border-2 border-gray rounded-sm shadow-lg h-10 md:w-[30vw]' />
              <ErrorMessage name='amount' component='p' className='text-red-500 text-sm ml-3' />
              <button      type='submit'   className='bg-blue-500 text-white rounded-lg shadow-lg md:w-[10vw] ml-4 h-10 mt-5 cursor-pointer'    >  Create    </button>
            </Form>
          </Formik>
        </div>

        <div className='border-2 border-dotted border-gray rounded-lg shadow-lg m-3 p-5 bg-white md:w-[40vw] mt-10'>
          <div className='text-2xl font-sans m-3 p-1 font-bold mb-2'>Create Expense</div>
          <Formik initialValues={expenseInitialValues} validationSchema={expenseValidationSchema} onSubmit={handleExpenseSubmit} >
            <Form className='flex flex-col gap-2'>
              <label htmlFor='expensename' className='text-lg font-sans font-bold m-1'>  Expense Name :-</label>
              <Field  type='text'  name='expensename'  id='expensename'  placeholder='Enter your expense name'  className='ml-3 border-2 border-gray rounded-sm shadow-lg h-10 md:w-[30vw]'/>
              <ErrorMessage name='expensename' component='p' className='text-red-500 text-sm ml-3' />
              <label htmlFor='amount' className='text-lg font-sans font-bold m-1'> Amount :- </label>
              <Field   type='number' name='amount' id='amount' placeholder='Enter your expense amount' className='ml-3 border-2 border-gray rounded-sm shadow-lg h-10 md:w-[30vw]' />
              <ErrorMessage name='amount' component='p' className='text-red-500 text-sm ml-3' />
              <label htmlFor='category' className='text-lg font-sans font-bold m-1'>  Budget Category :-</label>
              {/* <Field  as='select'  name='category'  id='category'  className='ml-3 border-2 border-gray rounded-sm shadow-lg h-10 w-[30vw]' >
                 {isLoading ? ( <option>Loading...</option>) : data.budgets.length > 0 ? (data.budgets.map((c, i) => (
                                <option key={c._id || i}>{c.budgetName}</option> ))) : (<option disabled>No budgets available</option>)}             
              </Field> */}
              <Field as='select' name='category' id='category' className='ml-3 border-2 border-gray rounded-sm shadow-lg h-10 md:w-[30vw]'>
  <option value="">Select a budget category</option>
  {isLoading ? (
    <option>Loading...</option>
  ) : data?.budgets?.length > 0 ? (
    data.budgets.map((c, i) => (
      <option key={c._id || i} value={c.budgetName}>
        {c.budgetName}
      </option>
    ))
  ) : (
    <option disabled>No budgets available</option>
  )}
</Field>
              <ErrorMessage name='category' component='p' className='text-red-500 text-sm ml-3' />
              <button
                type='submit'
                className='bg-blue-500 text-white rounded-lg shadow-lg md:w-[10vw] ml-4 h-10 mt-5 cursor-pointer'
              >
                Create
              </button>
            </Form>
          </Formik>
        </div>
      </div>
        <div className='text-2xl ml-4 font-bold'>Budget :- </div>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        <BudgetInfo/>
      </div>
        <div className='text-2xl ml-4 font-bold'> Recent Expense :- 
        { 
         <div className='w-full flex justify-center mt-5'>
         <Tableofexpense  /> 
         </div >
        }
      </div>
      
    </div>
  );
};

export default Index;
