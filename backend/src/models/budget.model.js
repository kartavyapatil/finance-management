import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    budgetName: {
        type: String,
        required: [true, "Budget name is required"],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, "Budget amount is required"],
        min: [0, "Amount must be a positive number"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, { timestamps: true });

const model = mongoose.model('budget', schema);
export default model;
