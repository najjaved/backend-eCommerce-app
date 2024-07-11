const fs = require('fs-extra'); // The fs module is a built-in Node.js module that provides an API for interacting with the file system
const path = require('path'); // The path module is a built-in Node.js module that provides utilities for working with file and directory paths


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
                images: ["https://lh3.googleusercontent.com/pw/AP1GczOrpp_PAISoNnfOnGeMtAGu4cZbavddOBzr8qnd3i5P7HwElTm5WBHAg7Mx3LqZ-sXGDr0w33dS5tRGH20KaNG5xQlV1HAvsPjaq-UoXC3wda0U6EEm6No1K6CmanFED0-MXy0-IZh9WpYvLia-1cUTkw=w586-h879-s-no-gm?authuser=0", 
                         "https://lh3.googleusercontent.com/pw/AP1GczPwfjdBiqSOSxM_lDHD_QrV06jevU8RZFVssbqoJqGgwBvxFiH3NoRljgXOioiOQllukWzlHPfi0miYsZWPspTF6piGrliC8l53pd8sDiw2Bridm1tsyzFJ1uy_79upIXkTKDsemfbR3INjzljVmwqlhg=w586-h879-s-no-gm?authuser=0" ]
                
            },
            {
                id: 2,
                category: "Homemade Cosmetics",
                name: "Lavender Face Cream",
                description: "Homemade soothing face cream",
                price: 15.99,
                discount: 0.2, 
                stock: 50,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczNMZViic7nOQ5ZOZLHS_D1UjC9npXf-cLN0WKA6FQMhw8GDGuRczPXsHJDpDWAP3lSvRtu4l2c8EkSSOZR5KWR4Xe7KpeVbZU1fY-9Bq3upcI2_JeeT8dFOxYSSFyPUaaC8C6DcUtBOSk9ykVq0L5hJ4A=w586-h879-s-no-gm?authuser=0", 
                         "https://photos.google.com/share/AF1QipNciTK6B_n4l5km-P_jCiHyl18PEsAKybgbkpQrSpxufgFav4VfONncJtyI7HtRmg/photo/AF1QipMJiIclcDwEcrN0i_icWn5_3shaotYMMBPpZuRz?key=bVhLSm1wTlpwaldmLV82QlA5XzJsYUJWOG9OUGxB"]
            },
            {
                id: 3,
                category: "Herbal Supplements",
                name: "Moringa Capsules",
                description: "Herbal supplement for overall health",
                price: 22.99,
                discount: 0.15, 
                stock: 33,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczOIUV5LHGZn5mjHMdC75l8zNHnazszLwEClXW8h9F8kFOddsWVE4VDsxDIieFIQJza2aq8qqs_A9gmgpA-SdA4KVCucTnEIzZ5e-3xO6rkPA2mmfebS1rI7AQkjTNvIvvqoBxxuPTBm8bU1_jI_lxGElA=w600-h788-s-no-gm?authuser=0"]
            },
            {
                id: 4,
                category: "Mineral Products",
                name: "Shilajit Golden Drops",
                description: "Natural mineral supplement",
                price: 59.99,
                discount: 0.15, 
                stock: 30,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczMei0SNsGUu0r9nHuOQaeLt1VXEby8POKL_h2vVXhDHXu9nSPNyT9g1Av-KF-Tb09MTKzMfgSBPypOmq3FmJyAyiLR6wN8EEVLCyUiftrjRwinIwvN7VlpmBQDAH_izXaAI0SPOc_GPae-LBEIXh5pfqA=w586-h879-s-no-gm?authuser=0", 
                         "https://lh3.googleusercontent.com/pw/AP1GczMplD-bsxPMROPb751ZqIKoU6b13T6tvyL98R9i3RGpNijbdUyboAjLiecYPjQMZ_6oNUo_tWrzKId_aYOlfpUdltX18T7nT2rXFtmuBuFG0PbHQlMz3GZVthCHGmj203V8tRYKcsKToUd7mYBsVmR_iw=w600-h400-s-no-gm?authuser=0"]
            },
            {
                id: 5,
                category: "Herbal Teas",
                name: "Ajwain Tea",
                description: "Refreshing herbal tea for stomach relief",
                price: 8.99,
                discount: 0.1, 
                stock: 80,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczNgY1cOGrmvTl6X9SCNndXa9p1Vert3EaFQk7qMPBS-qJfKQDRxifYB2OXBIBKa-0KuPgad46PZC1ed9QQGp3VtHsyoLgyMvRh242BqfoEjFh_Km_9-87CIk5EhDk9MyQlyRK_kUF3QtCQw5Gafd-67Pw=w639-h879-s-no-gm?authuser=0"]
            },
            {
                id: 6,
                category: "Homemade Cosmetics",
                name: "Aloe Vera Gel",
                description: "Natural moisturizing soothing alvera gel, perfect after use after sun",
                price: 7.99,
                discount: 0.05, // 5% discount
                stock: 20,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczMZfIvjh8pT7OeSZJLLBfwGrkMcuoFV5v4gAckm76jElzWPoaVal3ZjOnh-8lsjc6SJ_q56fYgPsq3DJ-GFHGizpQcQ_EwXqD0sqME_bI3uCl64t-BlMxvCSVd1psClQQNwC-0-GL5Wjce2i143IaosxA=w586-h879-s-no-gm?authuser=0"]
            },
            {
                id: 7,
                category: "Herbal Supplements",
                name: "Ashwagandha Capsules",
                description: "Herbal supplement for stress relief",
                price: 22.99,
                discount: 0.1, 
                stock: 150,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczOSlmhZ2FB0UByNM1RonmH50M7fl5A64wKOW0vVIVLpKg_8bkBRzZyaKU5_eEv7M0lBIYhjmIP92leMAondHb7ZGMZk_fJtLwRu_11Ob__9mPNJfcsQhxvXUgVbInylsP_01jC0RjO-8xQsFPDyw0_hLA=w586-h879-s-no-gm?authuser=0", 
                         "https://lh3.googleusercontent.com/pw/AP1GczNQ-WFyVC2XHxupb6_R8NR5KT9SBhg01RP4c5zNFB7RWwsJnKi7XU5iBSe9SOSvvmIZUtek7QyzTr8iN9PmZn80r6hwUNnvmJJ3Q27fpjEcl6_Or1FKEZ8UCvNdKiFlEiFpN8Xs5jaiB7rnsiLbNXiK2g=w225-h225-s-no-gm?authuser=0"]
            },
            {
                id: 8,
                category: "Mineral Products",
                name: "Himalayan Salt",
                description: "Natural mineral salt from Khewra",
                price: 5.99,
                discount: 0.15, 
                stock: 120,
                images: [
                    "https://lh3.googleusercontent.com/pw/AP1GczNt2r-QmMpOzWG3GsutLYko4SOi9FJgWo2xj18X3RdW89slolkaK0J_jAulcI28QmdlAfs2RRHEcII55vwuG0Q8YQ73uVg7Mizk2GDHXI44Ym3em_NxOKBBfdhHciS_Ciz6GTv3zuhEUbf5Gw4n3-gf5Q=w600-h900-s-no-gm?authuser=0"]
            },
            {
                id: 9,
                category: "Herbal Teas",
                name: "Matcha",
                description: "Antioxidant-rich herbal tea",
                price: 17.99,
                discount: 0.3, 
                stock: 40,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczNTdYcYQwH5Q9wUKEPTG4OTi3PJXodhfpcsy9XL4LtMOIU0WfCFT2rU916945ls_8I7dmBrfHaZOLx5SEAPyPKQBmCB3W0SHTK9_T2rkVcCtNmIRGJIm7yN2zGgvldpO4Amrq2NPooanJsvqoYG7KGhxA=w500-h750-s-no-gm?authuser=0"]
            },
            {
                id: 10,
                category: "Homemade Cosmetics",
                name: "Rose Water Toner",
                description: "Homemade natural toner",
                price: 14.99,
                discount: 0.2, 
                stock: 60,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczMg1PzgXt3CqoVzvq_nNhAxjn9e33OHFw0C-4lAn4IhaVVjMX2j5lNFqIS7bCmvRFaxP-dD4RR-y-HTiETQh4_velJScKwaA521sKJhos4BNUS8rt_dVYQJ7MuF2S7cC1U6q1newxTBRq2XtZdBu4_FEA=w600-h900-s-no-gm?authuser=0"]
            },
            {
                id: 11,
                category: "Herbal Teas",
                name: "Ginger Lemon Tea",
                description: "Relaxing herbal tea",
                price: 9.99,
                discount: 0.1,
                stock: 100,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczMkFuw_1PKaeVDRMIKUbsvWv4CpJBOaXLT5lXLq2KX5nwaj7pDi0rMzdlXgn6YAoVwaZmVi3ack3_CqYspBtpkBeoxt98mEFkvFmv-NHIlPq6uhDdCAwNY-ggauK9wqgwlVBwHg_T7uCRdnQc7hi2JesA=w600-h900-s-no-gm?authuser=0"]
              },
              {
                id: 12,
                category: "Herbal Supplements",
                name: "Turmeric Curcumin Capsules",
                description: "Herbal supplement for inflammation and joint health",
                price: 18.99,
                discount: 0.1,
                stock: 100,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczPNf4lOLzBvv1VeJAnCtxaCO9g53kvVxwrfiJ0FI-6Qj4hfYghlXy9gJqU8RxKQjiaz1und3k9DRe5m0wDOXND4VUu6eYRPdIB7k1HboFWO9rrcz6NNRyGxPf4rLuznu_xpP8z1kyip6YxMKryZKBNV6w=w239-h450-s-no-gm?authuser=0"]
              },
              {
                id: 13,
                category: "Homemade Cosmetics",
                name: "Natural Soap",
                description: "Homemade soap with organic materials",
                price: 7.99,
                discount: 0, 
                stock: 22,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczN6LGLjfs5gCNRiyHDUXy6F0B1_DjL6VgbJLq25e1HdwDsT-zouBaeDkLgRqW7A3UPnhBYYrmhUiY3GcEE67--jGXgF4wqvCQ82cyGKdMjZTjx_ryqJddZZBKW1OlPNPGRByn_NoUBqEQm49_wVABOXuw=w600-h900-s-no-gm?authuser=0"]
            },
            {
                id: 14,
                category: "Homemade Cosmetics",
                name: "Almond Essential Oil",
                description: "Homemade natural oil extracted from organic almonds",
                price: 17.99,
                discount: 0, 
                stock: 35,
                images: ["https://lh3.googleusercontent.com/pw/AP1GczPkUkg6XUFw5iiyPfEnHIGd-XgTjwjJWvwHImtmmsnwwwUuG_8I77P3WLZD9WuAGPP5r_xIx5qGirxjO7EJDb1Vjkd_dZ8X7qvo9hcG8W74dRNUnNcQKmRNILg3v79LPofFWTj1CYoeO2AT-1R9mkoAOQ=w600-h900-s-no-gm?authuser=0"]
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
                    "https://lh3.googleusercontent.com/pw/AP1GczPTspbfvL0WQwRRl13_oSx7PNJaXGj3UubIxtBOt4K_kinkGuxpdsOt5dkApZd5nu8PKz2htTHko3OuRVaxQsZleTI7rZiC5rW4MxAHqsSJoyewZtCw6TZKswJkcjbLa1M9VjBz6jL5C1dRefLQUn2Amg=w600-h400-s-no-gm?authuser=0",
                    "https://lh3.googleusercontent.com/pw/AP1GczP6FnwNW1fCY-BXkbUCxBZGFl3rDqMGUIBRs_PJE7Iav1T27TLGjAg9qkrRqwbYNIYeWW08pnZfF-tu4-sG6B-ktBtbnZuMdZzC6lPCfO9QKsvS3g7CDeGS8l5RgdY6fSBdvz_A2nONeZAE_bL1sqhyBQ=w600-h400-s-no-gm?authuser=0"]
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
                    "https://lh3.googleusercontent.com/pw/AP1GczP2eeiMVMzUad1ecY3sataumS8sudNTsoJW1PEUlICdDYC49GdwPHcy8mLotwAHqDIePoGWAKPdhS84nAvaqFrEGt6v48zJVuwcTsrjLYMlri45wAa51LWGB1oWAX6tKMjg-eySO1QbskuPeb6kFmOxDA=w600-h400-s-no-gm?authuser=0",
                    "https://lh3.googleusercontent.com/pw/AP1GczNepWXSbZwf5WTB9vnJ161Dq54bs-GNOK2NLEl8T9ZjJH3IT69Jn5y_JUKeaaJPWu8NgXoptqddECzP7bQiGm6XI57K2ji1_n_y3m85LMkOsS2KUpHZU_dYGnNKerYCokt-xvW2trpK3V-xI-UC4hUQjA=w600-h400-s-no-gm?authuser=0"]
            },
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
