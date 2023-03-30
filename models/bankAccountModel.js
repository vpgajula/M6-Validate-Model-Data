const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  description: {
    type: String,
    required: [true, 'A transaction description is required'],
    minlength: 5,
    maxlength: 100
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 9999999
  },
  category: {
    type: String,
    enum: {
        values: ['Food', 'Entertainment', 'Utilities', 'Transportation', 'Check', 'Salary', 'Other'],
        message: '{VALUE} is not a valid category type'
    },
    required: true
  },
  transactionType: {
    type: String,
    enum: {
        values: ['Credit', 'Debit'],
        message: '{VALUE} is not a valid transaction type'
    },
    required: [true, 'A transaction must have a transaction type'],
    unique: false,
    trim: false
  }
});

const accountSchema = new Schema({
  accountNumber: {
    type: Number,
    required: [true, 'An account number is required'],
    unique: true
  },
  customerName: {
    type: String,
    required: [true, 'A customer name is required'],
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: [true, 'An email address is required'],
    unique: true,
    validate: {
        validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
        message: (props) => `${props.value} is not a valid email address`
    }
  },
  balance: {
    type: Number,
    required: [true, 'A balance is required'],
    min: 0,
    max: 99999999
  },
  transactions: [transactionSchema] //this is the sub-document 
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
