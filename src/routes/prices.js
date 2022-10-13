const { Router } = require('express');
const router = Router();
const prices = require('../datos.json');
const _ = require('underscore');
const { json } = require('body-parser');


router.get('/', (req, res) => {
    res.json(prices);
});

// router.get('/id', (req, res) => {
//     const { id } = req.params;
//     res.json(id);
// });

router.post('/', (req, res) => {
    const { ciudad, precio_gasolina, precio_acpm } = req.body;
    if (ciudad && precio_gasolina && precio_acpm) {
        const id = prices.length + 1;
        const newPrices = { id, ...req.body };
        prices.push(newPrices);
        res.json(prices);
    } else {
        res.status(500).json({ error: 'Not saved' });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { ciudad, precio_gasolina, precio_acpm } = req.body;
    if (id && ciudad && precio_gasolina && precio_acpm ) {
        _.each(prices, (price, i) => {
            if (price.id === id) {
                price.ciudad = ciudad;
                price.precio_gasolina = precio_gasolina;
                price.precio_acpm = precio_acpm;
            }
        });
        res.json(prices);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});




router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(prices, (price, i) => {
        if (price.id == id) {
            prices.splice(i, 1);
        }
    });
    res.send(prices);
});








module.exports = router;