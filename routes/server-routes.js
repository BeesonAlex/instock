const { Router } = require('express');
const {inventoryArray, warehouseArray} = require('../data/data');
const router = Router();

const getAllInventory = (req, res) => {
    res.json({inventoryArray})
}
const getSingleProduct = (req, res) => {
    targetProduct = inventoryArray.find(product => product.id == req.params.id)
    res.json(targetProduct)
}

router.get('/inventory', getAllInventory);
router.get('/inventory/:id', getSingleProduct);

module.exports = router;

