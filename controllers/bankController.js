const customerAccount = require('../models/bankAccountModel');
const APIFeatures = require('../dataBaseManager/loanDbContext');

exports.getAccountById = async (req, res) => {
    // get particular loan details from database
    const { id } = req.params;
    const customeraccount = await customerAccount.find({ _id: id });
    res.status(200).json({
        status: 'Success',
        results: customeraccount.length,
        data: {
            customeraccount
        }
    });
};

exports.getAllAccounts = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(customerAccount.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const customeraccount = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: customeraccount.length,
            data: {
                customeraccount
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createAccount = async (req, res) => {
    const newAccount = req.body;
    
    try {
        const customeraccount = await customerAccount.create(newAccount)
        res.status(201).json({
            status: 'Success',
            data: customeraccount
        });
        //res.send('Hello World from customeraccount POST');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.updateAccountById = async (req, res) => {
    const newaccount = req.body;
    const dateTime = new Date().toISOString();
    const newcustomeraccount = {...newaccount, modifiedDate: dateTime};

    try {
        const customeraccount = await customerAccount.findByIdAndUpdate(req.params.id, newcustomeraccount, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                customeraccount
            }
        });
        //res.send('Hello World from customeraccount UpdateByAccountId');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteAccountById = async (req, res) => {
    try {
        await customerAccount.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            message: 'Document successfully deleted!',
            data: null
        });
        //res.send('Hello World from customeraccount DELETE');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
