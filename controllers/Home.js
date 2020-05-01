const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');

module.exports = {
    // GET all transactions
    index: function (req, res) {
        Transaction.find().sort({ date: -1 }).then(transaction => res.json(transaction));
    },
    
    // POST new transactions
    add: async function (req, res) {
        const { description, user } = req.body;
        if (!user || !description) {
            return res.status(400).json({ msg: 'All fields are required' });
        }
        try {
            const newTransaction = new Transaction({
                user,
                description,
            });
            await newTransaction.save().then(transaction => res.json(transaction));
        } catch (err) {
            console.log(err);
            res.status(400).json({ msg: 'Error Occured, Please try again later' })
        }
    },

    // GET single transaction
    single: async function (req, res) {
        const { tnx_id } = req.params;
        if (tnx_id) {
            if (mongoose.Types.ObjectId.isValid(tnx_id)) {
                Transaction.findById(tnx_id).then(transaction => res.json(transaction)).catch(err => console.log(err));
            }
            else {
                return res.status(400).json({ msg: 'Invalid Id' });
            }
        }

    }
}