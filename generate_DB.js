const fs = require('fs-extra'); // The fs module is a built-in Node.js module that provides an API for interacting with the file system
const path = require('path'); // The path module is a built-in Node.js module that provides utilities for working with file and directory paths

/* Data definition:
JSON Server treats each top-level key as a database table */

const data = {
    // Collection of user objects
    users: [
        {
            user_id: 1,
            username: "Anna_Neuer",
            password: "password123",
            email: "xxx@example.com",
            address: "Einsteinstrasse 92, Berlin, Germany",
            phone: "1584-29492929",
            role: "Customer"
        },
        {
            user_id: 2,
            username: "admin_user",
            password: "adminpassword",
            email: "admin@example.com",
            address: "Pleneng 92, Munich, Germany",
            phone: "6455-76745678",
            role: "Admin"
        }
    ],
    //Collection of categories
    categories: [
        { category_id: 1, category_name: "Herbal Teas" },
        { category_id: 2, category_name: "Homemade Cosmetics" },
        { category_id: 3, category_name: "Herbal Supplements" },
        { category_id: 4, category_name: "Mineral Products" }
    ],
    //Collection of products
    products: [
        {
            product_id: 1,
            product_name: "Chamomile Tea",
            description: "Relaxing herbal tea",
            price: 9.99,
            discount: 0.1, // 10% discount
            category_id: 1,
            stock: 100,
            images: ["image1.jpg", "image2.jpg"]
        },
        {
            product_id: 2,
            product_name: "Lavender Face Cream",
            description: "Homemade soothing face cream",
            price: 15.99,
            discount: 0.2, 
            category_id: 2,
            stock: 50,
            images: ["image3.jpg", "image4.jpg"]
        },
        {
            product_id: 3,
            product_name: "Moringa Capsules",
            description: "Herbal supplement for overall health",
            price: 25.99,
            discount: 0.15, 
            category_id: 3,
            stock: 200,
            images: ["image5.jpg", "image6.jpg"]
        },
        {
            product_id: 4,
            product_name: "Shilajit Resin",
            description: "Natural mineral supplement",
            price: 39.99,
            discount: 0.25, 
            category_id: 4,
            stock: 30,
            images: ["image7.jpg", "image8.jpg"]
        },
        {
            product_id: 5,
            product_name: "Peppermint Tea",
            description: "Refreshing herbal tea",
            price: 8.99,
            discount: 0.1, 
            category_id: 1,
            stock: 80,
            images: ["image9.jpg", "image10.jpg"]
        },
        {
            product_id: 6,
            product_name: "Aloe Vera Gel",
            description: "Natural moisturizing gel",
            price: 12.99,
            discount: 0.05, // 5% discount
            category_id: 2,
            stock: 70,
            images: ["image11.jpg", "image12.jpg"]
        },
        {
            product_id: 7,
            product_name: "Ashwagandha Capsules",
            description: "Herbal supplement for stress relief",
            price: 22.99,
            discount: 0.1, 
            category_id: 3,
            stock: 150,
            images: ["image13.jpg", "image14.jpg"]
        },
        {
            product_id: 8,
            product_name: "Himalayan Salt",
            description: "Natural mineral salt",
            price: 5.99,
            discount: 0.15, 
            category_id: 4,
            stock: 120,
            images: ["image15.jpg", "image16.jpg"]
        },
        {
            product_id: 9,
            product_name: "Green Tea",
            description: "Antioxidant-rich herbal tea",
            price: 10.99,
            discount: 0.1, 
            category_id: 1,
            stock: 90,
            images: ["image17.jpg", "image18.jpg"]
        },
        {
            product_id: 10,
            product_name: "Rose Water Toner",
            description: "Homemade natural toner",
            price: 14.99,
            discount: 0.2, 
            category_id: 2,
            stock: 60,
            images: ["image19.jpg", "image20.jpg"]
        }
    ],
     //Collection of oders
    orders: [
        {
            order_id: 1,
            user_id: 1,
            order_date: "2023-07-02",
            status: "Processing",
            total_amount: 35.98
        },
        {
            order_id: 2,
            user_id: 1,
            order_date: "2023-07-01",
            status: "Shipped",
            total_amount: 55.98
        },
        {
            order_id: 2,
            user_id: 2,
            order_date: "2023-07-01",
            status: "Processing",
            total_amount: 35.98
        }
    ],
     //Collection of ordered items
    order_items: [
        {
            order_item_id: 1,
            order_id: 1,
            product_id: 1,
            quantity: 2,
            price: 9.99
        },
        {
            order_item_id: 2,
            order_id: 1,
            product_id: 3,
            quantity: 1,
            price: 25.99
        },
        {
            order_item_id: 3,
            order_id: 2,
            product_id: 2,
            quantity: 1,
            price: 15.99
        },
    ],
};

// convert the data to JSON format, with spaces for readability
const jsonData = JSON.stringify(data, null, 2); //
console.log(jsonData);

// write the JSON data to db.json
const filePath = path.join(__dirname, 'db.json'); // create a filepath string, __dirname  provides absolute path to the directory where the current script is located
fs.writeFileSync(filePath, jsonData, 'utf8');
