import httpStatus from 'http-status';
import BudgetService from '../services/budget.service.js';
import asynchandler from '../utils/asynchandler.js';

class BudgetController {
    static createBudget = asynchandler(async (req, res) => {
        const res_obj = await BudgetService.createBudget(req.body, req.user);
        res.status(httpStatus.CREATED).send(res_obj);
    });

    static getAllBudgets = asynchandler(async (req, res) => {
        const res_obj = await BudgetService.getAllBudgets(req.user);
        res.status(httpStatus.OK).send(res_obj);
    });

    static getBudgetById = asynchandler(async (req, res) => {
        const res_obj = await BudgetService.getBudgetById(req.params.id, req.user);
        res.status(httpStatus.OK).send(res_obj);
    });

    static updateBudget = asynchandler(async (req, res) => {
        const res_obj = await BudgetService.updateBudget(req.params.id, req.user, req.body);
        res.status(httpStatus.OK).send(res_obj);
    });

    static deleteBudget = asynchandler(async (req, res) => {
        const res_obj = await BudgetService.deleteBudget(req.params.id, req.user);
        res.status(httpStatus.OK).send(res_obj);
    });
}

export default BudgetController;
