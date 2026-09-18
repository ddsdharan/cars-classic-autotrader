import car01 from "../assets/cars/car-01-toyota-2000gt.png"
import car02 from "../assets/cars/car-02-toyota-2000gt.png"
import car03 from "../assets/cars/car-03-toyota-2000gt.png"
import car04 from "../assets/cars/car-04-toyota-2000gt.png"
import car05 from "../assets/cars/car-05-toyota-2000gt.png"

export interface Car {
  id: number;
  name: string;
  price: string;
  mileage: string;
  image: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "1967 Toyota 2000GT",
    price: "$39 000",
    mileage: "14,900 miles",
    image: car01,
  },
  {
    id: 2,
    name: "1967 Toyota 2000GT",
    price: "$66 700",
    mileage: "14,900 miles",
    image: car02,
  },
  {
    id: 3,
    name: "1967 Toyota 2000GT",
    price: "$39 000",
    mileage: "14,900 miles",
    image: car03,
  },
  {
    id: 4,
    name: "1967 Toyota 2000GT",
    price: "$66 700",
    mileage: "14,900 miles",
    image: car04,
  },
  {
    id: 5,
    name: "1967 Toyota 2000GT",
    price: "$39 000",
    mileage: "14,900 miles",
    image: car01,
  },
  {
    id: 6,
    name: "1967 Toyota 2000GT",
    price: "$52 500",
    mileage: "18,200 miles",
    image: car05,
  },
  {
    id: 7,
    name: "1967 Toyota 2000GT",
    price: "$58 900",
    mileage: "22,400 miles",
    image: car05,
  },
  {
    id: 8,
    name: "1967 Toyota 2000GT",
    price: "$44 800",
    mileage: "16,700 miles",
    image: car04,
  },
  {
    id: 9,
    name: "1967 Toyota 2000GT",
    price: "$72 000",
    mileage: "12,900 miles",
    image: car01,
  },
  {
    id: 10,
    name: "1967 Toyota 2000GT",
    price: "$89 000",
    mileage: "10,500 miles",
    image: car05,
  },
  {
    id: 11,
    name: "1967 Toyota 2000GT",
    price: "$41 500",
    mileage: "25,100 miles",
    image: car03,
  },
  {
    id: 12,
    name: "1967 Toyota 2000GT",
    price: "$67 900",
    mileage: "15,800 miles",
    image: car04,
  },
  {
    id: 13,
    name: "1967 Toyota 2000GT",
    price: "$48 000",
    mileage: "19,300 miles",
    image: car01,
  },
  {
    id: 14,
    name: "1967 Toyota 2000GT",
    price: "$61 700",
    mileage: "17,600 miles",
    image: car05,
  },
  {
    id: 15,
    name: "1967 Toyota 2000GT",
    price: "$37 500",
    mileage: "24,900 miles",
    image: car03,
  },
  {
    id: 16,
    name: "1967 Toyota 2000GT",
    price: "$76 500",
    mileage: "13,400 miles",
    image: car04,
  },
];