import httpStatus from 'http-status';
import expenseModel from '../models/expense.model.js';
import ApiError from '../utils/ApiError.js';
import mongoose from 'mongoose';
class ExpenseService {
    // Create a new expense
    static async createExpense(body, userId) {
        const { expensename, amount, category } = body;

        const expense = await expenseModel.create({
            expensename,
            amount,
            category,
            user: userId
        });

        return {
            msg: "Expense created successfully",
            expense
        };
    }

    // Get all expenses for a user
    static async getAllExpenses(userId) {
        const expenses = await expenseModel.find({ user: userId });

        return {
            msg: "All expenses fetched",
            expenses
        };
    }

    // Get single expense by ID
    static async getExpenseById(expenseId, userId) {
        const expense = await expenseModel.findOne({ _id: expenseId, user: userId });

        if (!expense) {
            throw new ApiError(httpStatus.NOT_FOUND, "Expense not found");
        }

        return {
            msg: "Expense fetched",
            expense
        };
    }

    // Update expense
    static async updateExpense(expenseId, userId, body) {
        const expense = await expenseModel.findOneAndUpdate(
            { _id: expenseId, user: userId },
            body,
            { new: true }
        );

        if (!expense) {
            throw new ApiError(httpStatus.NOT_FOUND, "Expense not found or unauthorized");
        }

        return {
            msg: "Expense updated",
            expense
        };
    }

    // Delete expense
    static async deleteExpense(expenseId, userId) {
        const expense = await expenseModel.findOneAndDelete({ _id: expenseId, user: userId });

        if (!expense) {
            throw new ApiError(httpStatus.NOT_FOUND, "Expense not found or unauthorized");
        }

        return {
            msg: "Expense deleted"
        };
    
    }

static async getTotalExpensePerCategory(userId) {
    const totals = await expenseModel.aggregate([
        { $match: { user: new mongoose.Types.ObjectId(userId) } },
        {
            $group: {
                _id: "$category",
                totalAmount: { $sum: "$amount" }
            }
        }
    ]);

    // Debug logging (optional)

    return {
        msg: "Total expense amount per category",
        data: totals
    };
}
    // static async getExpensesGroupedByCategory(name,userId) {
    //     const grouped = await expenseModel.aggregate([
    //         { $match: {  user: new mongoose.Types.ObjectId(userId)  } },
    //         {
    //             $group: {
    //                 _id: "$category",
    //                 expenses: {
    //                     $push: {
    //                         _id: "$_id",
    //                         expensename: "$expensename",
    //                         amount: "$amount"
    //                     }
    //                 }
    //             }
    //         }
    //     ]);

    //     return {
    //         msg: "Expenses grouped by category",
    //         data: grouped
    //     };
    // }
    static async getExpensesGroupedByCategory(name, userId) {
    const grouped = await expenseModel.aggregate([
        { 
            $match: { 
                user: new mongoose.Types.ObjectId(userId),
                category: name // Filter only for the category with this name
            } 
        },
        {
            $group: {
                _id: "$category",
                expenses: {
                    $push: {
                        _id: "$_id",
                        expensename: "$expensename",
                        amount: "$amount"
                    }
                }
            }
        }
    ]);

    return {
        msg: `Expenses for category: ${name}`,
        data: grouped
    };
}
}

export default ExpenseService;
