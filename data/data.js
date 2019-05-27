const inventoryArray = [
    {
        id: "I0",
        name: "Scotch Tape",
        description: "A clear sticky on one side tape, for all your crafting needs",
        quantity: "400",
        lastOrdered: "12/01/2018",
        location: "Toronto, Ontario",
        isInstock: false,
        categories: "Crafts, Office supplies, Paper",
        warehouseId: "W0"
    },
    {
        id: "I1",
        name: "1/4' Wood Screws",
        description: "The oh so handy 1/4' screws, all our screws are galvanized.",
        quantity: "0",
        lastOrdered: "08/30/2018",
        location: "Toronto, Ontario",
        isInstock: true,
        categories: "Construction, Home hardware, Reno",
        warehouseId: "W0"
    },
    {
        id: "I2",
        name: "Safety Boots",
        description: "You can never be overprepared. With our state of the art safety boots you will never lose a toe again",
        quantity: "10",
        lastOrdered: "05/17/2018",
        location: "Toronto, Ontario",
        isInstock: true,
        categories: "Footwear, Safety, Construction",
        warehouseId: "W2"
    },
    {
        id: "I3",
        name: "Tire",
        description: "Your cars can't go anywhere without them, so probably best you buy these, eh?",
        quantity: "350",
        lastOrdered: "10/06/2018",
        location: "Toronto, Ontario",
        isInstock: true,
        categories: "Automotion, Mechnical, Transportation, Heavy",
        warehouseId: "W1"
    },
    {
        id: "I4",
        name: "Lightbulbs",
        description: "They lighty lighty",
        quantity: "350",
        lastOrdered: "10/06/2018",
        location: "Toronto, Ontario",
        isInstock: true,
        categories: "Home, Illumination, Furniture, Sales",
        warehouseId: "W3"
    },
    {
        id: "I5",
        name: "Skids",
        description: "",
        quantity: "350",
        lastOrdered: "11/06/2018",
        location: "Toronto, Ontario",
        isInstock: true,
        categories: "Home, Shipping",
        warehouseId: "W3"
    },{
        id: "I6",
        name: "Toilet Paper",
        description: "They wipey wipey",
        quantity: "4000",
        lastOrdered: "5/27/2018",
        location: "Toronto, Ontario",
        isInstock: true,
        categories: "Home, Supplies",
        warehouseId: "W1"
    },{
        id: "I7",
        name: "Durians",
        description: "They stinky",
        quantity: "350",
        lastOrdered: "4/10/2018",
        location: "Toronto, Ontario",
        isInstock: true,
        categories: "Fruit",
        warehouseId: "W2"
    }
]

const warehouseArray = [
    {
        id: "W0",
        name: "Punder Mifflin",
        address: {
            street: "123 Fake Street W",
            suiteNum: "Suite 201",
            city: "Toronto",
            province: "Ontario",
            postal: "M6N4B7"
        },
        contact: {
            name: "Michael Scarn",
            title: "Regional Manager",
            phone: "416 679 4324",
            email: "michaelScarn@pundermifflin.com"
        },
        inventoryCategories: "Paper, Crafts, Office supplies"
    },
    {
        id: "W1",
        name: "The Place",
        address: {
            street: "667 Some Street W",
            suiteNum: "Suite 331",
            city: "Toronto",
            province: "Ontario",
            postal: "M6G3L7"
        },
        contact: {
            name: "Ian Waters",
            title: "Office Manager",
            phone: "416 679 4324",
            email: "ianwaters@theplace.com"
        },
        inventoryCategories: "Automotion, Mechnical, Transportation, Heavy"
    },
    {
        id: "W2",
        name: "Stocker",
        address: {
            street: "8893 King Street W",
            suiteNum: "Suite 451",
            city: "Toronto",
            province: "Ontario",
            postal: "M6N4B7"
        },
        contact: {
            name: "Ed Jeon",
            title: "Manager",
            phone: "416 434 5545",
            email: "edJeon@stocker.com"
        },
        inventoryCategories: "Footwear, Safety, Construction"
    },
    {
        id: "W3",
        name: "Box Factory",
        address: {
            street: "898 Dock Street W",
            suiteNum: "Suite 201",
            city: "Toronto",
            province: "Ontario",
            postal: "M6N4B7"
        },
        contact: {
            name: "Paulo Jackson",
            title: "Seasonal Manager",
            phone: "416 989 3674",
            email: "pJackson@boxfactory.com"
        },
        inventoryCategories: "Home, Illumination, Furniture, Sales"
    },
    {
        id: "W4",
        name: "Janet Planet",
        address: {
            street: "172 Dat Street W",
            suiteNum: "Suite 891",
            city: "Toronto",
            province: "Ontario",
            postal: "M6H3L0"
        },
        contact: {
            name: "Graeme Katsuno",
            title: "The Wise One",
            phone: "416 889 4254",
            email: "gKat@janetplanet.com"
        },
        inventoryCategories: "Construction, Home hardware, Reno"
    }
]


module.exports = {inventoryArray, warehouseArray};