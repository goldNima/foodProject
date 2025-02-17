"use client"

export interface ShopINT {
    id: number,
    image: string,
    name: string,
    price: number
}

export const ApiShop: Shop[] = [
    {id: 1 , image: "./images/image-shop/bibimbap.png" , name: "bibimbap" , price: 80},
    {id: 2 , image: "./images/image-shop/burgers.png" , name: "burgers" , price: 100},
    {id: 3 , image: "./images/image-shop/burrito.png" , name: "burrito" , price: 128},
    {id: 4 , image: "./images/image-shop/chocolate cake.png" , name: "chocolate cake" , price: 98},
    {id: 5 , image: "./images/image-shop/coffee.png" , name: "coffee" , price: 40},
    {id: 6 , image: "./images/image-shop/cream soup.png" , name: "cream soup" , price: 20},
    {id: 7 , image: "./images/image-shop/donuts.png" , name: "donuts" , price: 25},
    {id: 8 , image: "./images/image-shop/hotdog.png" , name: "hotdog" , price: 100},
    {id: 9 , image: "./images/image-shop/ice cream.png" , name: "ice cream" , price: 15},
    {id: 10 , image: "./images/image-shop/image1.png" , name: "image1" , price: 58},
    {id: 11 , image: "./images/image-shop/pasta.png" , name: "pasta" , price: 75},
    {id: 12 , image: "./images/image-shop/pizza.png" , name: "pizza" , price: 220},
    {id: 13 , image: "./images/image-shop/pudding.png" , name: "pudding" , price: 46},
    {id: 14 , image: "./images/image-shop/sandwich.png" , name: "sandwich" , price: 99},
    {id: 15 , image: "./images/image-shop/tempura.png" , name: "tempura" , price: 32},
    {id: 16 , image: "./images/image-shop/tofu.png" , name: "tofu" , price: 67},
    {id: 17 , image: "./images/image-shop/wine.png" , name: "wine" , price: 10},
    {id: 18 , image: "./images/image-shop/fries.png" , name: "fries" , price: 47},
    {id: 19 , image: "./images/image-shop/matcha.png" , name: "matcha" , price: 45},
    {id: 20 , image: "./images/image-shop/fried rice.png" , name: "fried rice" , price: 22}
]