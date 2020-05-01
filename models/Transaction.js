const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamp: true,
    });

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction