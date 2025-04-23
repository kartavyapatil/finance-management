import { Router } from 'express';
import BudgetController from '../controllers/budget.controller.js';
import Authentication from '../middlewares/Authentication.js';
import validation from '../middlewares/validation.js';

const router = Router();

router.post('/create', Authentication, validation, BudgetController.createBudget);
router.get('/all', Authentication, BudgetController.getAllBudgets);
router.get('/:id', Authentication, BudgetController.getBudgetById);
router.put('/:id', Authentication, validation, BudgetController.updateBudget);
router.delete('/:id', Authentication, BudgetController.deleteBudget);


export default router;
