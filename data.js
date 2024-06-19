import bcrypt from "bcrypt"


const data = {
    users: [{
            name: "Sreerag o s",
            email: "ssreerag@gmail.com",
            password: bcrypt.hashSync('123', 8),
            isAdmin: true
        },
        {
            name: "abhi",
            email: "abhi@gmail.com",
            password: bcrypt.hashSync('123', 8),
            isAdmin: false
        }
    ],
    products: [{

            name: 'Mens Sleeve Sweater',
            category: 'Shirts',
            image: '/images/pexels-fotios-photos-3353621.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Prestige Mens Wear',
            category: 'Shirts',
            image: '/images/pexels-nina-fiedler-894772640-26110308.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Mens Jeans',
            category: 'Shirts',
            image: '/images/pexels-pixabay-52518.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Free Shirt',
            category: 'Pants',
            image: '/images/pexels-anubhaw-anand-3236651.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {

            name: 'Striped Loose Fit Top',
            category: 'Pants',
            image: '/images/pexels-hazardos-1475418.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: ' Hoodie For Women',
            category: 'Pants',
            image: '/images/pexels-aryane-vilarim-79780-2869073.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};
export default data;