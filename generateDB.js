const fs = require("fs-extra"); // The fs module is a built-in Node.js module that provides an API for interacting with the file system
const path = require("path"); // The path module is a built-in Node.js module that provides utilities for working with file and directory paths

/* Products images:
categoriesBackground_URL = https://photos.app.goo.gl/snLGmkqqzHg2KVuY9
herbalSupplements_URL = https://photos.app.goo.gl/4pfigJ6wX67KiPK99
homemadeCosmetics_URL = https://photos.app.goo.gl/94AkQw4k5fNj2GTE8
mineralSupplements_URL =https://photos.app.goo.gl/P2m64kBwLvjMXA7N8
teas_URL = https://photos.app.goo.gl/huPu9F7UvQeMwpqUA 
*/

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
        role: "Customer",
      },
      {
        id: 2,
        username: "admin_user",
        password: "adminpassword",
        email: "admin@example.com",
        address: "Pleneng 92, Munich, Germany",
        phone: "6455-76745678",
        role: "Admin",
      },
      {
        id: 3,
        username: "guest_user",
        password: "",
        email: "",
        address: "",
        phone: "",
        role: "Guest",
      },
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
        images: [
          "https://photos.app.goo.gl/uwnckrZsijiXi3547",
          "https://photos.app.goo.gl/VL2MJdjxMDuHmy5Z6",
        ],
      },
      {
        id: 2,
        category: "Homemade Cosmetics",
        name: "Lavender Face Cream",
        description: "Homemade soothing face cream",
        price: 15.99,
        discount: 0.2,
        stock: 50,
        images: [
          "https://photos.app.goo.gl/8SynKEd9QY5TEziw6",
          "https://photos.app.goo.gl/oxn8H44pS2EALDUm7",
        ],
      },
      {
        id: 3,
        category: "Herbal Supplements",
        name: "Moringa Capsules",
        description: "Herbal supplement for overall health",
        price: 22.99,
        discount: 0.15,
        stock: 33,
        images: ["https://photos.app.goo.gl/7aEYzZ12jbLH1zZu9"],
      },
      {
        id: 4,
        category: "Mineral Products",
        name: "Shilajit Golden Drops",
        description: "Natural mineral supplement",
        price: 59.99,
        discount: 0.15,
        stock: 30,
        images: [
          "https://photos.app.goo.gl/arJnQZEEztz3iTEa9",
          "https://photos.app.goo.gl/jyHTJEdvaJ6HCBsv5",
        ],
      },
      {
        id: 5,
        category: "Herbal Teas",
        name: "Ajwain Tea",
        description: "Refreshing herbal tea for stomach relief",
        price: 8.99,
        discount: 0.1,
        stock: 80,
        images: ["https://photos.app.goo.gl/tzfXGDQVgU2nMsiX9"],
      },
      {
        id: 6,
        category: "Homemade Cosmetics",
        name: "Aloe Vera Gel",
        description:
          "Natural moisturizing soothing alvera gel, perfect after use after sun",
        price: 7.99,
        discount: 0.05, // 5% discount
        stock: 20,
        images: ["https://photos.app.goo.gl/7HLLi72aqqoo8fY1A"],
      },
      {
        id: 7,
        category: "Herbal Supplements",
        name: "Ashwagandha Capsules",
        description: "Herbal supplement for stress relief",
        price: 22.99,
        discount: 0.1,
        stock: 150,
        images: [
          "https://photos.app.goo.gl/yKoArtMM3dd8F65cA",
          "https://photos.app.goo.gl/ZXjDez2qrriLurs3A",
        ],
      },
      {
        id: 8,
        category: "Mineral Products",
        name: "Himalayan Salt",
        description: "Natural mineral salt from Khewra",
        price: 5.99,
        discount: 0.15,
        stock: 120,
        images: ["https://photos.app.goo.gl/iBvyj9JkVVm2v2iq9"],
      },
      {
        id: 9,
        category: "Herbal Teas",
        name: "Matcha",
        description: "Antioxidant-rich herbal tea",
        price: 17.99,
        discount: 0.3,
        stock: 40,
        images: ["https://photos.app.goo.gl/W6CUDefwyc7gpVvy9"],
      },
      {
        id: 10,
        category: "Homemade Cosmetics",
        name: "Rose Water Toner",
        description: "Homemade natural toner",
        price: 14.99,
        discount: 0.2,
        stock: 60,
        images: ["https://photos.app.goo.gl/Svu2AcLLfv2bvLi28"],
      },
      {
        id: 11,
        category: "Herbal Teas",
        name: "Ginger Lemon Tea",
        description: "Relaxing herbal tea",
        price: 9.99,
        discount: 0.1,
        stock: 100,
        images: ["https://photos.app.goo.gl/5qqHhvPfvUbNJxD57"],
      },
      {
        id: 12,
        category: "Herbal Supplements",
        name: "Turmeric Curcumin Capsules",
        description: "Herbal supplement for inflammation and joint health",
        price: 18.99,
        discount: 0.1,
        stock: 100,
        images: ["https://photos.app.goo.gl/8xmzzjjQJYN426eo7"],
      },
      {
        id: 13,
        category: "Homemade Cosmetics",
        name: "Natural Soap",
        description: "Homemade soap with organic materials",
        price: 7.99,
        discount: 0,
        stock: 22,
        images: ["https://photos.app.goo.gl/tpsMP4iGPKHkWsLJ6"],
      },
      {
        id: 14,
        category: "Homemade Cosmetics",
        name: "Almond Essential Oil",
        description: "Homemade natural oil extracted from organic almonds",
        price: 17.99,
        discount: 0,
        stock: 35,
        images: ["https://photos.app.goo.gl/cxCQgsToSpyXQvDP6"],
      },
      {
        id: 15,
        category: "Mineral Products",
        name: "Shilajit Healing",
        description: "Natural mineral supplement",
        price: 39.99,
        discount: 0.25,
        stock: 50,
        images: [
          "https://photos.app.goo.gl/8Dc5Rjby8tTNBbU56",
          "https://photos.app.goo.gl/ccL49imQkwQg7xRZ9",
        ],
      },
      {
        id: 16,
        category: "Mineral Products",
        name: "Shilajit Golden",
        description: "Natural mineral supplement",
        price: 49.99,
        discount: 0.15,
        stock: 30,
        images: [
          "https://photos.app.goo.gl/Nw3417p5XNFy21EL9",
          "https://photos.app.goo.gl/EXrNNLqfrQjG4pZq6",
        ],
      },
    ],
    //Collection of oders
    orders: [
      {
        id: 1,
        userId: 1,
        orderDate: "2023-07-02",
        status: "Processing",
        totalAmount: 35.98,
      },
      {
        id: 2,
        userId: 1,
        orderDate: "2023-07-01",
        status: "Shipped",
        totalAmount: 55.98,
      },
      {
        id: 2,
        userId: 2,
        orderDate: "2023-07-01",
        status: "Processing",
        totalAmount: 35.98,
      },
    ],
    //Collection of ordered items
    orderItems: [
      {
        id: 1,
        orderId: 1,
        productId: 1,
        quantity: 2,
        price: 9.99,
      },
      {
        id: 2,
        orderId: 1,
        productId: 3,
        quantity: 1,
        price: 25.99,
      },
      {
        id: 3,
        orderId: 2,
        productId: 2,
        quantity: 1,
        price: 15.99,
      },
    ],
  };

  // convert the data to JSON format, with spaces for readability
  const jsonData = JSON.stringify(data, null, 2); //
  console.log(jsonData);

  // write the JSON data to db.json
  const filePath = path.join(__dirname, "db.json"); // create a filepath string, __dirname  provides absolute path to the directory where the current script is located
  fs.writeFileSync(filePath, jsonData, "utf8");
}

generateDB();
