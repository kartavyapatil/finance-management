import { body } from 'express-validator';

class ExpenseValidation {
    static createExpense = [
        body('expensename').notEmpty().withMessage('name cannot be empty'),
        body('amount').notEmpty().withMessage('amount cannot be empty'),
        body('category').notEmpty().withMessage('category cannot be empty')
    ];
}

export default ExpenseValidation;
