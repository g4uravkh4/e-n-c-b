const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.json({message: 'Get Contact list'});
});

router.route('/:id').get((req, res) => {
    res.json({message: `Get Contact list for ${req.params.id}`});
});

router.route('/').post((req, res) => {
    res.json({message: 'Create Contact list'});
});

router.route('/:id').post((req, res) => {
    res.json({message: `Create Contact list for ${req.params.id}`});
});

router.route('/').put((req, res) => {
    res.json({message: 'Update Contact list'});
});

router.route('/:id').put((req, res) => {
    res.json({message: `Update Contact list for ${req.params.id}`});
});

router.route('/').delete((req, res) => {
    res.json({message: 'Delete Contact list'});
});

router.route('/:id').delete((req, res) => {
    res.json({message: `Delete Contact list for ${req.params.id}`});
});

module.exports = router;