import httpStatus from 'http-status';
import ExpenseService from '../services/expense.service.js';
import asynchandler from '../utils/asynchandler.js';

class ExpenseController {
    static createExpense = asynchandler(async (req, res) => {
        const res_obj = await ExpenseService.createExpense(req.body, req.user);
        res.status(httpStatus.CREATED).send(res_obj);
    });

    static getAllExpenses = asynchandler(async (req, res) => {
        const res_obj = await ExpenseService.getAllExpenses(req.user);
        res.status(httpStatus.OK).send(res_obj);
    });

    static getExpenseById = asynchandler(async (req, res) => {
        const res_obj = await ExpenseService.getExpenseById(req.params.id, req.user);
        res.status(httpStatus.OK).send(res_obj);
    });

    static updateExpense = asynchandler(async (req, res) => {
        const res_obj = await ExpenseService.updateExpense(req.params.id, req.user, req.body);
        res.status(httpStatus.OK).send(res_obj);
    });

    static deleteExpense = asynchandler(async (req, res) => {
        const res_obj = await ExpenseService.deleteExpense(req.params.id, req.user);
        res.status(httpStatus.OK).send(res_obj);
    });
    static getTotalExpensePerCategory = asynchandler(async (req, res) => {
        const res_obj = await ExpenseService.getTotalExpensePerCategory(req.user);
        res.status(httpStatus.OK).send(res_obj);
    });
    static getExpensesGroupedByCategory = asynchandler(async (req, res) => {
        const res_obj = await ExpenseService.getExpensesGroupedByCategory(req.params.name,req.user);
        res.status(httpStatus.OK).send(res_obj);
    });
    
}

export default ExpenseController;
