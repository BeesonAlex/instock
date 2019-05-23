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

let inventoryId = 8;
const createInventoryId = () => {
    return `I${inventoryId++}`;
}

let warehouseId = 5;
const createWarehouseId = () => {
   return `W${warehouseId++}`;
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


router.post('/inventory',createNewInventoryItem);
router.post('/warehouses', createNewWarehouse);
router.get('/inventory', getAllInventory);
router.get('/inventory/:id', getSingleProduct);

module.exports = router;

