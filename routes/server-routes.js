const { Router } = require('express');
const { warehouseArray, inventoryArray } = require('../data/data');
const router = Router();

const getData = (req, res) => {
    res.json(data)
}

let inventoryId = 8;
const createInventoryId = () => {
    return inventoryId++;
}

let warehouseId = 5;
const createWarehouseId = () => {
   return warehouseId++;
}

const createNewInventoryItem = (req, res) => {
    const {itemName, lastOrdered, city, country, quantity, status, itemDescription} = req.body;
    const newProduct = {
        id: createInventoryId(),
        productName: itemName,
        itemDescription,
        quantity,
        lastOrdered,
        location: `${city}, ${country}`,
        status,
        categories,
    };
    inventoryArray.push(newProduct);
    res.json(newProduct);
}


const createNewWarehouse = (req, res) => {
    const {warehouseName, street, suiteNum, city, province, postal, contactName, title, phone, email} = req.body;
    const newWarehouse = {
        id: createWarehouseId(),
        warehouseName,
        address: {
            street,
            suiteNum,
            city,
            province,
            postal,
        },
        contact: {
            contactName,
            position: title,
            phone,
            email,
        },
        inventoryCategories,
    };
    warehouseArray.push(newWarehouse);
    res.json(newWarehouse);
}

app.route('/data')
    .get(getData);


router.get('/', getData);
router.post('/inventory',createNewInventoryItem);
router.post('/warehouses', createNewWarehouse);
router.get('/:id', getSingleVideo);
router.delete('/:id/comments/:commentId', deleteComment);

module.exports = router;

