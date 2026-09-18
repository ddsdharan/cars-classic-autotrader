import car01 from "../assets/cars/car-01-toyota-2000gt.png"
import car02 from "../assets/cars/car-02-toyota-2000gt.png"
import car03 from "../assets/cars/car-03-toyota-2000gt.png"
import car04 from "../assets/cars/car-04-toyota-2000gt.png"
import car05 from "../assets/cars/car-05-toyota-2000gt.png"

import serviceShipping from "../assets/services/service-shipping.jpg"
import serviceWarranty from "../assets/services/service-warranty.jpg"
import serviceFinancing from "../assets/services/service-financing.jpg"



export interface Car {
  id: number;
  name: string;
  price: string;
  mileage: string;
  image: string;
}

export interface Service {
  id: number;
  number: string;
  title: string;
  image: string;
  slug: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
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
    name: "1970 Toyota 2000GT",
    price: "$39 000",
    mileage: "14,900 miles",
    image: car05,
  },
];

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "SHIPPING",
    image: serviceShipping,
    slug: "shipping",
  },
  {
    id: 2,
    number: "02",
    title: "WARRANTY PURCHASE",
    image: serviceWarranty,
    slug: "warranty-purchase",
  },
  {
    id: 3,
    number: "03",
    title: "FINANCING",
    image: serviceFinancing,
    slug: "financing",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question:
      "Do you offer financing options for purchasing classic cars?",
    answer:
      "Yes, we offer financing options for eligible classic car purchases. Contact our team to discuss available plans and requirements.",
  },
  {
    id: 2,
    question:
      "Are the showcased cars fully restored or in original condition?",
    answer:
      "Our inventory includes both restored vehicles and cars maintained in their original condition. Individual vehicle details are provided with each listing.",
  },
  {
    id: 3,
    question:
      "Do you assist with shipping for purchased classic cars?",
    answer:
      "Yes. We can assist with arranging shipping for purchased classic vehicles.",
  },
  {
    id: 4,
    question:
      "Are your vintage cars certified or inspected for authenticity?",
    answer:
      "Our team can provide available documentation and vehicle information regarding authenticity and condition.",
  },
  {
    id: 5,
    question:
      "Can I request additional photos before purchasing?",
    answer:
      "Yes, we welcome and encourage requests for more detailed photographs or videos of any vehicle in our inventory. Contact our team, and we will arrange the necessary details for your peace of mind.",
  },
];