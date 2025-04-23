import { Router } from 'express';
import ExpenseController from '../controllers/expense.budget.js';
import Authentication from '../middlewares/Authentication.js';
import ExpenseValidation from '../validation/ExpenseValidation.js';
import validation from '../middlewares/validation.js';

const router = Router();

// Protected routes for expense
router.post('/create', Authentication, ExpenseValidation.createExpense, validation, ExpenseController.createExpense);
router.get('/all', Authentication, ExpenseController.getAllExpenses);
router.get('/getTotalExpensePerCategory', Authentication, ExpenseController.getTotalExpensePerCategory);
router.get('/getExpensesGroupedByCategory/:name', Authentication, ExpenseController.getExpensesGroupedByCategory);
router.get('/:id', Authentication, ExpenseController.getExpenseById);
router.put('/:id', Authentication, ExpenseValidation.createExpense, validation, ExpenseController.updateExpense);
router.delete('/:id', Authentication, ExpenseController.deleteExpense);


export default router;
