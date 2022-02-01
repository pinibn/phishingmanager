const Email = require('../models/email.model');


exports.newPhish = (req, res, addr) => {
    const e_addr = addr;

    Email.find({ address: addr })
    .then(item => {
        const id = item[0]._id;

        Email.findById(id)
        .then(email => {
            email.status = true;
            return email.save();
        })
        .then(result => {
            console.log('Edit successfully');
            res.status(200).send('Edit successfully');
        })
        .catch(err => {
            console.log('db error');
            res.sendStatus(500).send('db error')
        })
    })
    .catch(err => {
        console.log('Address not found in db');
        res.sendStatus(404).send('Address not found in db')
    })


}
