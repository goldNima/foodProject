"use client"

interface Categoris {
    id : number,
    img : string,
    name : string,
}

export const apiCategoris: Categoris [] = [
    {id : 1 , img: "./images/image-categori/image 1.png" , name: "Breakfast"},
    {id : 2 , img: "./images/image-categori/image 2.png" , name: "Vegan"},
    {id : 3 , img: "./images/image-categori/image 3.png" , name: "Meat"},
    {id : 4 , img: "./images/image-categori/image 4.png" , name: "Dessert"},
    {id : 5 , img: "./images/image-categori/image 5.png" , name: "Lunch"},
    {id : 6 , img: "./images/image-categori/image 6.png" , name: "Chocolate"}
]