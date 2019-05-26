const { Router } = require("express");
const { inventoryArray, warehouseArray } = require("../data/data");
const router = Router();

// Inventory GET
const getAllInventory = (req, res) => {
	res.json({ inventoryArray });
};
const getSingleProduct = (req, res) => {
	targetProduct = inventoryArray.find(product => product.id == req.params.id);
	res.json(targetProduct);
};

// Warehouses GET
const getAllWarehouses = (req, res) => {
	res.json({ warehouseArray });
};

const getSingleWarehouse = (req, res) => {
	targetWarehouse = warehouseArray.find(
   	warehouse => warehouse.id == req.params.id
  	);
	res.json(targetWarehouse);
};

// POST Create New Warehouse/Inventory Item
let inventoryId = 8;
const createInventoryId = () => {
	return `I${inventoryId++}`;
};

let warehouseId = 5;
const createWarehouseId = () => {
  return `W${warehouseId++}`;
};

const createNewInventoryItem = (req, res) => {
	const {
   	itemName,
   	lastOrdered,
   	city,
   	province,
   	quantity,
   	isInStock,
   	itemDescription,
   	categories
  	} = req.body;
  	const newProduct = {
   	id: createInventoryId(),
   	productName: itemName,
   	itemDescription,
   	quantity,
   	lastOrdered,
   	location: `${city}, ${province}`,
   	statu: isInStock,
   	categories,
   	warehouseId: `W${Math.floor(Math.random() * warehouseArray.length)}`
  	};
  	inventoryArray.push(newProduct);
  	res.json(newProduct);
};

const createNewWarehouse = (req, res) => {
	const {
   	warehouseName,
   	street,
   	suiteNum,
   	city,
   	province,
   	postal,
   	contactName,
   	title,
   	phone,
   	email,
   	inventoryCategories
  	} = req.body;
  	const newWarehouse = {
   	id: createWarehouseId(),
   	name: warehouseName,
   	address: {
      	street,
      	suiteNum,
      	city,
      	province,
      	postal
    	},
   	contact: {
      	name: contactName,
      	position: title,
      		phone,
      		email
    	},
   	inventoryCategories
  	};
  	warehouseArray.push(newWarehouse);
  	res.json(newWarehouse);
};

router.post("/inventory", createNewInventoryItem);
router.post("/warehouses", createNewWarehouse);
router.get("/inventory", getAllInventory);
router.get("/inventory/:id", getSingleProduct);
router.get("/warehouses", getAllWarehouses);
router.get("/warehouses/:id", getSingleWarehouse);

module.exports = router;
