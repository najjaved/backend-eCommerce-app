const fs = require('fs-extra'); // The fs module is a built-in Node.js module that provides an API for interacting with the file system
const path = require('path'); // The path module is a built-in Node.js module that provides utilities for working with file and directory paths

/* Data definition:
JSON Server treats each top-level key as a database collection */

function generateDB() {
    const data = {
        // Collection of user objects
        users: [
            {
                id: 1,
                username: "Anna_Neuer",
                password: "password123",
                email: "xxx@example.com",
                address: "Einsteinstrasse 92, Berlin, Germany",
                phone: "1584-29492929",
                role: "Customer"
            }, 
            {
                id: 2,
                username: "admin_user",
                password: "adminpassword",
                email: "admin@example.com",
                address: "Pleneng 92, Munich, Germany",
                phone: "6455-76745678",
                role: "Admin"
            },
            {
                id: 3,
                username: "guest_user",
                password: "",
                email: "",
                address: "",
                phone: "",
                role: "Guest"
              }
        ],
        //Collection of products
        products: [
            {
                id: 1,
                category: "Herbal Teas",
                name: "Wild berries",
                description: "Antioxidant-rich herbal tea",
                price: 9.99,
                discount: 0.1, // 10% discount
                stock: 100,
                images: ["image1.jpg", "image2.jpg"]
            },
            {
                id: 2,
                category: "Homemade Cosmetics",
                name: "Lavender Face Cream",
                description: "Homemade soothing face cream",
                price: 15.99,
                discount: 0.2, 
                stock: 50,
                images: ["image3.jpg", "image4.jpg"]
            },
            {
                id: 3,
                category: "Herbal Supplements",
                name: "Moringa Capsules",
                description: "Herbal supplement for overall health",
                price: 25.99,
                discount: 0.15, 
                stock: 200,
                images: ["image5.jpg", "image6.jpg"]
            },
            {
                id: 4,
                category: "Mineral Products",
                name: "Shilajit Resin",
                description: "Natural mineral supplement",
                price: 39.99,
                discount: 0.25, 
                stock: 30,
                images: ["image7.jpg", "image8.jpg"]
            },
            {
                id: 5,
                category: "Herbal Teas",
                name: "Ajwain Tea",
                description: "Refreshing herbal tea for stomach relief",
                price: 8.99,
                discount: 0.1, 
                stock: 80,
                images: ["image9.jpg", "image10.jpg"]
            },
            {
                id: 6,
                category: "Homemade Cosmetics",
                name: "Aloe Vera Gel",
                description: "Natural moisturizing gel",
                price: 12.99,
                discount: 0.05, // 5% discount
                stock: 70,
                images: ["image11.jpg", "image12.jpg"]
            },
            {
                id: 7,
                category: "Herbal Supplements",
                name: "Ashwagandha Capsules",
                description: "Herbal supplement for stress relief",
                price: 22.99,
                discount: 0.1, 
                stock: 150,
                images: ["image13.jpg", "image14.jpg"]
            },
            {
                id: 8,
                category: "Mineral Products",
                name: "Himalayan Salt",
                description: "Natural mineral salt",
                price: 5.99,
                discount: 0.15, 
                stock: 120,
                images: ["image15.jpg", "image16.jpg"]
            },
            {
                id: 9,
                category: "Herbal Teas",
                name: "Matcha",
                description: "Antioxidant-rich herbal tea",
                price: 10.99,
                discount: 0.1, 
                stock: 90,
                images: ["image17.jpg", "image18.jpg"]
            },
            {
                id: 10,
                category: "Homemade Cosmetics",
                name: "Rose Water Toner",
                description: "Homemade natural toner",
                price: 14.99,
                discount: 0.2, 
                stock: 60,
                images: ["image19.jpg", "image20.jpg"]
            },
            {
                id: 11,
                category: "Herbal Teas",
                name: "Ginger Lemon Tea",
                description: "Relaxing herbal tea",
                price: 9.99,
                discount: 0.1,
                stock: 100,
                images: [
                  "image1.jpg",
                  "image2.jpg"
                ]
              },
              {
                id: 12,
                category: "Herbal Supplements",
                name: "Turmeric Curcumin Capsules",
                description: "Herbal supplement for inflammation and joint health",
                price: 18.99,
                discount: 0.1,
                stock: 100,
                images: [
                  "image21.jpg",
                  "image22.jpg"
                ]
              }
        ],
         //Collection of oders
        orders: [
            {
                id: 1,
                userId: 1,
                orderDate: "2023-07-02",
                status: "Processing",
                totalAmount: 35.98
            },
            {
                id: 2,
                userId: 1,
                orderDate: "2023-07-01",
                status: "Shipped",
                totalAmount: 55.98
            },
            {
                id: 2,
                userId: 2,
                orderDate: "2023-07-01",
                status: "Processing",
                totalAmount: 35.98
            }
        ],
         //Collection of ordered items
        orderItems: [
            {
                id: 1,
                orderId: 1,
                productId: 1,
                quantity: 2,
                price: 9.99
            },
            {
                id: 2,
                orderId: 1,
                productId: 3,
                quantity: 1,
                price: 25.99
            },
            {
                id: 3,
                orderId: 2,
                productId: 2,
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
    

}

generateDB();
