module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');

        db.create_products()
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Something went wrong, we apologize for the inconvenience'});
            console.log(err)
        });
    },

    getOne: (req, res) => {
        const db = req.app.get('db');

        db.read_product({id})
        .then((product) => res.status(200).send(product))
        .catch( err => {
            res.status(500).send({errorMessage:'Something went wrong, we apologize for the inconvenience'});
            console.log(err)
        });

    },

    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
        .then((products) => res.sendStatus(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: 'Something went wrong, we apologize for the inconvenience'});
            console.log(err)
        });

    },

    update: (req, res) => {
        const db = req.app.get('db');

        db.update_product()
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage:'Something went wrong, we apologize for the inconvenience' });
            console.log(err)
        });

    },

    delete: (req, res) => {
        const db = req.app.get('db');

        db.delete_product()
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Something has gone wrong, we apologize for the inconvenience'});
            console.log(err)
        });

    }
}