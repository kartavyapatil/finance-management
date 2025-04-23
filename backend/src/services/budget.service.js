import httpStatus from 'http-status';
import budgetModel from '../models/budget.model.js';
import ApiError from '../utils/ApiError.js';
import expenseModel from "../models/expense.model.js"
class BudgetService {
    // Create a new budget
    static async createBudget(body, user) {
        const { budgetName, amount} = body;

        const budget = await budgetModel.create({
            budgetName,
            amount,
            user
        });

        return {
            msg: "Budget created successfully",
            budget
        };
    }

    // Get all budgets for a user
    static async getAllBudgets(userId) {
        const budgets = await budgetModel.find({ user:userId });

        return {
            msg: "All budgets fetched",
            budgets
        };
    }

    // Get single budget by ID
    static async getBudgetById(budgetId, userId) {
        const budget = await budgetModel.findOne({ _id: budgetId, user:userId });

        if (!budget) {
            throw new ApiError(httpStatus.NOT_FOUND, "Budget not found");
        }

        return {
            msg: "Budget fetched",
            budget
        };
    }

    // Update budget
    static async updateBudget(budgetId, userId, body) {
        const budget = await budgetModel.findOneAndUpdate(
            { _id: budgetId, user:userId },
            body,
            { new: true }
        );

        if (!budget) {
            throw new ApiError(httpStatus.NOT_FOUND, "Budget not found or unauthorized");
        }

        return {
            msg: "Budget updated",
            budget
        };
    }

    static async deleteBudget(budgetId, userId) {
        const budget = await budgetModel.findOneAndDelete({ _id: budgetId, user: userId });
        if (!budget) {
            throw new ApiError(httpStatus.NOT_FOUND, "Budget not found or unauthorized");
        }
        const budgetName = budget.budgetName;
        await expenseModel.deleteMany({ category: budgetName });
        return {
            msg: "Budget and associated expenses deleted successfully"
        };
    }
}
export default BudgetService;
