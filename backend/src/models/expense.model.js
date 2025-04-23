import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    expensename: {
        type: String,
        required: [true, "Expense name is required"],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, "Expense amount is required"],
        min: [0, "Amount must be a positive number"]
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, { timestamps: true });

const model = mongoose.model('expense', schema);
export default model;
