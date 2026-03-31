import { Product } from "@/types/product"

export const products: Product[] = [

  
  
  {
  id: "1",
  title: "Women's Formal Dress",
  description: "Elegant and sophisticated formal dress perfect for office and formal events.",
  price: 2999,
  category: "fashion",
  subCategory: "Women",
  image: "https://plus.unsplash.com/premium_photo-1661766556012-15d4115ef1aa",
  rating: 4.5,

  brand: "Zara",
  fabric: "Polyester Blend",
  color: "Black / Navy Blue / Maroon",
  sizes: ["XS", "S", "M", "L", "XL"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Black", price: 2999, image: "https://images.unsplash.com/photo-1747707499012-684390664060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJsYWNrJTIwZm9ybWFsJTIwZHJlc3MlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D" },
    { color: "Navy Blue", price: 2899, image: "https://media.istockphoto.com/id/1418423712/photo/young-glamorous-female-fashion-model-in-navy-blue-smart-casual-dress.webp?a=1&b=1&s=612x612&w=0&k=20&c=Im2oXJPfCl1fLzEmoBnqFF4azh0agfJxVd0XeeNyrTE=" },
    { color: "Maroon", price: 3099, image: "https://images.unsplash.com/photo-1671571943786-f1cea5dbabc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcm9vbiUyMGRyZXNzJTIwd29tZW58ZW58MHx8MHx8fDA%3D" }
  ],

  features: [
    "Elegant slim fit design",
    "Wrinkle-resistant fabric",
    "Comfortable for long office wear",
    "Hidden back zipper",
    "Perfect for office & formal events"
  ],

  specs: [
    { label: "Fabric", value: "Polyester Blend" },
    { label: "Pattern", value: "Solid" },
    { label: "Fit", value: "Slim Fit" },
    { label: "Sleeve", value: "Half Sleeve" },
    { label: "Length", value: "Knee Length" },
    { label: "Occasion", value: "Formal / Office Wear" }
  ]
},
{
  id: "2",
  title: "Men's Casual Shirt",
  description: "Comfortable and stylish casual shirt.",
  price: 1999,
  category: "fashion",
  subCategory: "Men",
  image: "https://media.istockphoto.com/id/2148419703/photo/portrait-of-a-young-indian-man-in-glasses-and-a-white-shirt-standing-near-an-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ov-4immlwIJdFndC0NYpPwhIHL85itRXnbWdwnIKe8k=",
  rating: 4.2,

  brand: "Raymond",
  fabric: "100% Cotton",
  color: "Green / Blue / White",
  sizes: ["S", "M", "L", "XL"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Green", price: 1999, image: "https://media.istockphoto.com/id/1396138223/photo/portrait-of-a-handsome-man-in-a-shirt-standing-in-front-of-a-white-background.jpg?s=1024x1024&w=is&k=20&c=skRsc7bk1FCIWnAeHTU-ued-_M5Xw76DhG11BHNYE5A=" },
    { color: "Blue", price: 1899, image: "https://media.istockphoto.com/id/1195166190/photo/male-model-in-a-blue-suit-casual-outfit.jpg?s=1024x1024&w=is&k=20&c=xtOd7zCWJbmWJKk4HWt7GXXild2krWmS8QAvzD3AU3g=" },
    { color: "White", price: 1799, image: "https://media.istockphoto.com/id/2148419703/photo/portrait-of-a-young-indian-man-in-glasses-and-a-white-shirt-standing-near-an-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ov-4immlwIJdFndC0NYpPwhIHL85itRXnbWdwnIKe8k=" }
  ],

  features: [
    "Breathable cotton fabric",
    "Regular fit for daily comfort",
    "Button-down front",
    "Perfect for casual and office wear",
    "All-season comfortable shirt"
  ],

  specs: [
    { label: "Fabric", value: "Cotton" },
    { label: "Pattern", value: "Solid" },
    { label: "Fit", value: "Regular Fit" },
    { label: "Sleeve", value: "Full Sleeve" },
    { label: "Collar", value: "Spread Collar" },
    { label: "Occasion", value: "Casual / Office" }
  ]
},
{
  id: "3",
  title: "Girl's T-Shirt",
  description: "Fun and colorful t-shirt for kids.",
  price: 999,
  category: "fashion",
  subCategory: "Children",
  image: "https://media.istockphoto.com/id/1143044466/photo/portrait-of-a-young-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=LIjS37du0HBBmlQTeINxm-ivdeUQmbow29Cc7cOwCRg=",
  rating: 4.0,

  brand: "BabyHug",
  fabric: "Cotton",
  color: "Pink / Yellow / Sky Blue",
  sizes: ["0-1yr", "1-3yr", "3-5yr", "5-8yr"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Pink", price: 999, image: "https://media.istockphoto.com/id/1143044466/photo/portrait-of-a-young-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=LIjS37du0HBBmlQTeINxm-ivdeUQmbow29Cc7cOwCRg=" },
    { color: "Yellow", price: 949, image: "https://images.unsplash.com/photo-1700751615484-6b4427a1dacd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwY2hpbGRyZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" },
    { color: "Sky Blue", price: 979, image: "https://images.unsplash.com/photo-1763089402397-3862c71b03f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjBza3klMjBibHVlJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" }
  ],

  features: [
    "Soft cotton fabric safe for kids",
    "Stretchable and comfortable",
    "Colorful printed design",
    "Skin-friendly material",
    "Perfect for daily wear"
  ],

  specs: [
    { label: "Fabric", value: "Cotton" },
    { label: "Fit", value: "Comfort Fit" },
    { label: "Sleeve", value: "Half Sleeve" },
    { label: "Neck", value: "Round Neck" },
    { label: "Pattern", value: "Printed" },
    { label: "Occasion", value: "Daily Wear" }
  ]
},
{
  id: "4",
  title: "Nike Air Max",
  description: "Comfortable and stylish running shoes.",
  price: 7999,
  category: "fashion",
  subCategory: "Men",
  image: "https://images.unsplash.com/photo-1610870372593-a8647b04451f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHJlZCUyMHNob2V8ZW58MHx8MHx8fDA%3D",
  rating: 4.5,

  brand: "Nike",
  fabric: "Mesh & Synthetic",
  color: "Red / Black / White",
  sizes: ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Red", price: 7999, image: "https://images.unsplash.com/photo-1610870372593-a8647b04451f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHJlZCUyMHNob2V8ZW58MHx8MHx8fDA%3D" },
    { color: "Black", price: 7899, image: "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMGJsYWNrc2hvZXxlbnwwfHwwfHx8MA%3D%3D" },
    { color: "White", price: 8099, image: "https://images.unsplash.com/photo-1580902215262-9b941bc6eab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D" }
  ],

  features: [
    "Air Max cushioning for comfort",
    "Breathable mesh upper",
    "Durable rubber outsole",
    "Lightweight running shoes",
    "Suitable for running and casual wear"
  ],

  specs: [
    { label: "Upper", value: "Mesh & Synthetic" },
    { label: "Midsole", value: "Air Max Cushioning" },
    { label: "Outsole", value: "Rubber" },
    { label: "Weight", value: "300g per shoe" },
    { label: "Use", value: "Running / Casual" }
  ]
}
,
  {
    id: "5",
    title: "Puma Running Shoes",
    description: "Lightweight and comfortable running shoes designed for optimal performance, breathability, and support during training or casual wear.",
    price: 6999,
   category: "fashion",
   subCategory: "Men",
    image: "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVtYSUyMGJsYWNrJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.0,

    brand: "Puma",
    fabric: "Engineered mesh upper",
    color: "White / Red / Black",
    sizes: ["7 UK", "8 UK", "9 UK", "10 UK", "11 UK", "12 UK"],
    stock: 25,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",
    // 🔥 NEW VARIANTS SYSTEM
  variants: [
    {
      color: "Black",
      price: 6999,
      image: "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVtYSUyMGJsYWNrJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      color: "Red",
      price: 6899,
      image: "https://images.unsplash.com/photo-1626298038175-e9f383124e1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVtYSUyMHJlZCUyMHNob2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      color: "White",
      price: 7099,
      image: "https://images.unsplash.com/photo-1608230616491-5d696aa9fe52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVtYSUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],

    features: [
      "Lightweight EVA midsole for cushioning",
      "Breathable mesh upper for ventilation",
      "Rubber outsole for enhanced grip",
      "Lace-up closure for secure fit",
      "Flexible design for natural movement"
    ],

    specs: [
      { label: "Weight", value: "290g per shoe" },
      { label: "Heel-to-Toe Drop", value: "8mm" },
      { label: "Outsole", value: "Durable rubber" },
      { label: "Midsole", value: "EVA foam" },
      { label: "Use", value: "Running / Casual Wear" }
    ]
  },
  
  {
    id: "7",
    title: "Reebok Classic",
    description: "Timeless and stylish sneakers featuring a retro design, premium leather upper, and superior cushioning for all-day comfort and everyday street style.",
    price: 4999,
    category: "fashion",
    subCategory: "Men",
    image: "https://images.unsplash.com/photo-1582231640349-6ea6881fabeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVlYm9rJTIwQ2xhc3NpYyUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.3,

    brand: "Reebok",
    fabric: "Leather upper with synthetic lining",
    color: "White / Grey / Black",
    sizes: ["7 UK", "8 UK", "9 UK", "10 UK", "11 UK", "12 UK"],
    stock: 30,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "White",
        price: 4999,
        image: "https://images.unsplash.com/photo-1582231640349-6ea6881fabeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVlYm9rJTIwQ2xhc3NpYyUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "Black",
        price: 4899,
        image: "https://images.unsplash.com/photo-1673557475656-d580caccefa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVlYm9rJTIwQ2xhc3NpYyUyMGJsYWNrJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "Grey",
        price: 4799,
        image: "https://images.unsplash.com/photo-1704949841973-9db544ac35ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJlZWJvayUyMENsYXNzaWMlMjBncmV5JTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    features: [
      "Premium leather upper for durability",
      "Cushioned EVA midsole for comfort",
      "High-abrasion rubber outsole",
      "Classic lace-up design",
      "Iconic retro streetwear look"
    ],

    specs: [
      { label: "Weight", value: "320g per shoe" },
      { label: "Outsole", value: "Rubber" },
      { label: "Midsole", value: "EVA foam" },
      { label: "Closure", value: "Lace-up" },
      { label: "Use", value: "Casual / Everyday Wear" }
    ]
  },

  {
    id: "11",
    title: "Men's Casual Shirt",
    description: "Slim fit cotton shirt designed for modern style and comfort. Ideal for casual outings, office wear, or semi-formal occasions.",
    price: 1499,
    category: "fashion",
    subCategory: "Men",
    image: "https://plus.unsplash.com/premium_photo-1727942411342-b16f0d576bfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJ3MlMjBDYXN1YWwlMjBTaGlydCUyMHNreSUyMGJsdWV8ZW58MHx8MHx8fDA%3D",
    rating: 4.2,

    brand: "Generic",
    fabric: "100% Cotton",
    color: "Sky Blue / White / Navy",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 50,
    discount: 5,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Sky Blue",
        price: 1499,
        image: "https://plus.unsplash.com/premium_photo-1727942411342-b16f0d576bfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJ3MlMjBDYXN1YWwlMjBTaGlydCUyMHNreSUyMGJsdWV8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "White",
        price: 1399,
        image: "https://images.unsplash.com/photo-1669791777188-301b370d05f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lbidzJTIwQ2FzdWFsJTIwU2hpcnQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "Navy",
        price: 1499,
        image: "https://images.unsplash.com/photo-1769032214032-a91aa5bbf0d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWVuJ3MlMjBDYXN1YWwlMjBTaGlydCUyMG5hdnl8ZW58MHx8MHx8fDA%3D"
      }
    ],

    features: [
      "Breathable cotton fabric",
      "Slim fit modern design",
      "Button-down collar",
      "Wrinkle-resistant finish",
      "Suitable for office & casual wear"
    ],

    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Fit", value: "Slim" },
      { label: "Sleeve Type", value: "Full Sleeve" },
      { label: "Closure", value: "Buttons" },
      { label: "Use", value: "Casual / Semi-formal" }
    ]
  },

  {
    id: "12",
    title: "Women's Casual Dress",
    description: "Stylish and comfortable casual dress crafted from soft breathable fabric, perfect for daily wear, outings, or relaxed evenings.",
    price: 1999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1768289223084-1b57698e9f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4ncyUyMENhc3VhbCUyMERyZXNzJTIwcmVkfGVufDB8fDB8fHww",
    rating: 4.0,

    brand: "Generic",
    fabric: "Cotton blend",
    color: "Red / Black / Navy",
    sizes: ["S", "M", "L", "XL"],
    stock: 40,
    discount: 8,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Red",
        price: 1999,
        image: "https://images.unsplash.com/photo-1768289223084-1b57698e9f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4ncyUyMENhc3VhbCUyMERyZXNzJTIwcmVkfGVufDB8fDB8fHww"
      },
      {
        color: "Black",
        price: 1899,
        image: "https://images.unsplash.com/photo-1647370929006-17064fcdcad2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V29tZW4ncyUyMENhc3VhbCUyMERyZXNzJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Navy",
        price: 1999,
        image: "https://media.istockphoto.com/id/1303006702/photo/young-confident.webp?a=1&b=1&s=612x612&w=0&k=20&c=wTk8WtcjUTvZdj5IzrQmV8mTbuZBEkdsdFOWCjEjG84="
      }
    ],

    features: [
      "Soft breathable fabric",
      "Elegant casual styling",
      "Comfortable knee-length fit",
      "Lightweight and airy",
      "Perfect for daily wear"
    ],

    specs: [
      { label: "Fabric", value: "Cotton blend" },
      { label: "Fit", value: "Regular" },
      { label: "Length", value: "Knee-length" },
      { label: "Sleeve Type", value: "Short Sleeve" },
      { label: "Use", value: "Casual / Everyday Wear" }
    ]
  },

  {
    id: "13",
    title: "Boy's T-Shirt",
    description: "Fun and vibrant t-shirt designed for kids with soft cotton fabric, ensuring comfort and durability for active play.",
    price: 999,
    category: "fashion",
    subCategory: "Children",
    image: "https://images.unsplash.com/photo-1772510750155-2a4c79d296c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveSUyMGNoaWxkJTIwZHJlc3MlMjB5ZWxsb3d8ZW58MHx8MHx8fDA%3D",
    rating: 4.0,

    brand: "Generic",
    fabric: "100% Cotton",
    color: "Yellow / Blue / Green",
    sizes: ["2-3 Years", "4-5 Years", "6-7 Years", "8-9 Years"],
    stock: 60,
    discount: 5,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Yellow",
        price: 999,
        image: "https://images.unsplash.com/photo-1772510750155-2a4c79d296c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveSUyMGNoaWxkJTIwZHJlc3MlMjB5ZWxsb3d8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Blue",
        price: 949,
        image: "https://images.unsplash.com/photo-1758782213286-26f295563f43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95JTIwY2hpbGQlMjBkcmVzcyUyMGJsdWV8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Green",
        price: 999,
        image: "https://images.unsplash.com/photo-1727924571257-4235cd4db29e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMGNoaWxkJTIwZHJlc3MlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    features: [
      "Soft skin-friendly cotton",
      "Bright playful colors",
      "Comfortable regular fit",
      "Easy to wash",
      "Durable for daily use"
    ],

    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Fit", value: "Regular" },
      { label: "Sleeve Type", value: "Short Sleeve" },
      { label: "Closure", value: "Pull-on" },
      { label: "Use", value: "Play / Casual Wear" }
    ]
  },

  {
    id: "14",
    title: "Men's Formal Suit",
    description: "Premium formal suit crafted with precision tailoring and high-quality fabric, perfect for weddings, business meetings, and formal occasions.",
    price: 4999,
    category: "fashion",
    subCategory: "Men",
    image: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJ3MlMjBGb3JtYWwlMjBTdWl0JTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,

    brand: "Generic",
    fabric: "Wool blend",
    color: "Black / Navy / Charcoal",
    sizes: ["38", "40", "42", "44", "46"],
    stock: 20,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 4999,
        image: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJ3MlMjBGb3JtYWwlMjBTdWl0JTIwYmxhY2t8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Navy",
        price: 4899,
        image: "https://media.istockphoto.com/id/1032564422/photo/your-style-is-your-brand.webp?a=1&b=1&s=612x612&w=0&k=20&c=o1PC31Dit91bpyZG66_5kUx9_8vkTwaviF9MjFQ3Nco="
      },
      {
        color: "Charcoal",
        price: 4999,
        image: "https://media.istockphoto.com/id/486810104/photo/black-suit-business-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=_C8Ji8_ObGq3F99mhPE26_HUQUGWPY8RDTObUUMcR1w="
      }
    ],

    features: [
      "Premium wool-blend fabric",
      "Slim tailored fit",
      "Structured blazer design",
      "Includes matching trousers",
      "Perfect for formal events"
    ],

    specs: [
      { label: "Fabric", value: "Wool blend" },
      { label: "Fit", value: "Slim" },
      { label: "Jacket Type", value: "Single-breasted" },
      { label: "Occasion", value: "Formal / Business" },
      { label: "Set Includes", value: "Blazer + Trouser" }
    ]
  },
  
  {
    id: "15",
    title: "Mobile Phone",
    description: "Modern smartphone packed with a powerful processor, immersive display, and high-resolution cameras, ideal for gaming, photography, and daily multitasking.",
    price: 19999,
    category: "electronics",
    subCategory: "Mobile",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Samsung / Realme / Xiaomi",
    model: "2025 Edition",
    color: "Black / Blue / Silver",
    storage: "128GB",
    ram: "6GB",
    display: "6.5 inch Full HD+ AMOLED",
    battery: "5000 mAh",
    stock: 50,
    discount: 10,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Silver",
        price: 20499,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "6.5 inch Full HD+ AMOLED Display",
      "5000mAh long-lasting battery",
      "50MP AI dual camera",
      "Fast charging support",
      "Side-mounted fingerprint sensor"
    ],

    specs: [
      { label: "Display", value: "6.5 inch FHD+ AMOLED" },
      { label: "RAM", value: "6GB" },
      { label: "Storage", value: "128GB" },
      { label: "Battery", value: "5000mAh" },
      { label: "Processor", value: "Octa-core 5G" }
    ]
  },

  {
    id: "16",
    title: "Laptop",
    description: "High-performance laptop designed for productivity, programming, and light gaming with fast SSD storage and smooth multitasking.",
    price: 49999,
    category: "electronics",
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6 inch Full HD",
    graphics: "Intel Integrated Graphics",
    stock: 20,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Silver",
        price: 49999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 48999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM for heavy multitasking",
      "512GB SSD for fast performance",
      "Full HD anti-glare display",
      "Backlit keyboard for night use"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Integrated Intel UHD" }
    ]
  },

  {
    id: "17",
    title: "Wireless Earbuds",
    description: "Premium wireless earbuds with immersive sound, active noise cancellation, and long battery life for music and calls on the go.",
    price: 9999,
    category: "electronics",
    subCategory: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Boat / Realme / Noise",
    battery: "24 Hours Backup",
    connectivity: "Bluetooth 5.2",
    color: "Black / White",
    stock: 40,
    discount: 18,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 9999,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 9799,
        image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Active Noise Cancellation (ANC)",
      "Deep bass stereo sound",
      "Touch controls",
      "IPX4 water resistance",
      "Fast charging support"
    ],

    specs: [
      { label: "Battery", value: "24 Hours" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Noise Cancellation", value: "Active ANC" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "18",
    title: "Smartwatch",
    description: "Smart fitness watch with health tracking, smart notifications, and stylish design, perfect for everyday wear and workouts.",
    price: 19999,
    category: "electronics",
    subCategory: "Wearables",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Noise / Boat / Firebolt",
    display: "1.8 inch HD Display",
    battery: "7 Days Backup",
    connectivity: "Bluetooth",
    waterResistant: "Yes",
    stock: 35,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Heart rate monitoring",
      "Step & calorie tracking",
      "Sleep monitoring",
      "Call & app notifications",
      "Multiple sports modes"
    ],

    specs: [
      { label: "Display", value: "1.8 inch HD" },
      { label: "Battery", value: "Up to 7 Days" },
      { label: "Water Resistance", value: "Yes (IP Rated)" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Warranty", value: "1 Year" }
    ]
  }
  ,
  {
    id: "19",
    title: "Sports Running Shoes",
    description: "High-performance running shoes built for speed, comfort, and durability. Designed with breathable materials and responsive cushioning for running, gym workouts, and daily sports activities.",
    price: 8999,
    category: "Sports",
    subCategory: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Nike / Adidas / Puma",
    material: "Mesh & Synthetic",
    color: "Black / White / Blue / Red",
    sizes: ["6", "7", "8", "9", "10", "11"],
    stock: 35,
    discount: 15,
    delivery: "2-4 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 8999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 8799,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 8899,
        image: "https://images.unsplash.com/photo-1528701800489-20be3c9b5f34?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Red",
        price: 8999,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Breathable mesh upper",
      "Lightweight performance design",
      "Responsive cushioned sole",
      "Anti-slip rubber outsole",
      "Ideal for running, gym & training"
    ],

    specs: [
      { label: "Material", value: "Mesh & Synthetic" },
      { label: "Sole", value: "Rubber" },
      { label: "Closure", value: "Lace-up" },
      { label: "Fit", value: "Regular" },
      { label: "Use", value: "Running / Gym / Sports" }
    ]
  },

  {
    id: "20",
    title: "Basketball Sneakers",
    description: "High-performance basketball sneakers offering superior ankle support, grip, and shock absorption for intense matches on indoor and outdoor courts.",
    price: 7999,
    category: "Sports",
    subCategory: "Basketball",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "Nike / Adidas / Under Armour",
    material: "Synthetic & Mesh",
    color: "Black / Red / White",
    sizes: ["7", "8", "9", "10", "11", "12"],
    stock: 25,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 7999,
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Red",
        price: 7799,
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 7999,
        image: "https://images.unsplash.com/photo-1606813909028-3e1c2a74a2c2?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "High ankle support",
      "Shock-absorbing cushioning",
      "Durable synthetic upper",
      "Non-slip grip outsole",
      "Designed for court performance"
    ],

    specs: [
      { label: "Material", value: "Synthetic & Mesh" },
      { label: "Sole", value: "Rubber" },
      { label: "Ankle Type", value: "High-top" },
      { label: "Fit", value: "Regular" },
      { label: "Use", value: "Basketball" }
    ]
  },

  {
    id: "21",
    title: "Tennis Shoes",
    description: "Lightweight and flexible tennis shoes built for speed, agility, and stability during matches and training sessions.",
    price: 6999,
    category: "Sports",
    subCategory: "Tennis",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60",
    rating: 4.0,

    brand: "Puma / Adidas / Nike",
    material: "Mesh & Synthetic",
    color: "White / Blue / Green",
    sizes: ["6", "7", "8", "9", "10"],
    stock: 30,
    discount: 8,
    delivery: "2-4 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "White",
        price: 6999,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 6799,
        image: "https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Green",
        price: 6899,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Lightweight and flexible",
      "Breathable mesh upper",
      "Enhanced court grip",
      "Shock-absorbing sole",
      "Built for agility and speed"
    ],

    specs: [
      { label: "Material", value: "Mesh & Synthetic" },
      { label: "Sole", value: "Rubber" },
      { label: "Closure", value: "Lace-up" },
      { label: "Fit", value: "Regular" },
      { label: "Use", value: "Tennis" }
    ]
  },

  {
    id: "22",
    title: "Track Suits",
    description: "Comfortable and stylish track suits designed for workouts, sports, and casual wear with breathable and flexible fabric.",
    price: 2999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "Nike",
    fabric: "Polyester Blend",
    color: "Gray / Black / Pink",
    sizes: ["S", "M", "L", "XL"],
    stock: 30,
    discount: 10,
    delivery: "2-4 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Gray",
        price: 2999,
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Black",
        price: 2899,
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Pink",
        price: 2999,
        image: "https://images.unsplash.com/photo-1520975922203-bc9d5a5d3d77?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Breathable fabric",
      "Stretchable waistband",
      "Lightweight design",
      "Flexible movement",
      "Ideal for workouts & casual wear"
    ],

    specs: [
      { label: "Fabric", value: "Polyester Blend" },
      { label: "Fit", value: "Regular" },
      { label: "Waist", value: "Elastic" },
      { label: "Pockets", value: "Side Pockets" },
      { label: "Use", value: "Sports / Casual" }
    ]
  },

  {
    id: "23",
    title: "Yoga Pants",
    description: "Stretchable and comfortable yoga pants designed for flexibility, breathability, and all-day comfort during workouts or casual wear.",
    price: 1999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1506629905607-d9d2e3a7d1d5?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "Adidas",
    fabric: "Cotton Spandex",
    color: "Black / Grey / Navy",
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 25,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 1999,
        image: "https://images.unsplash.com/photo-1506629905607-d9d2e3a7d1d5?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 1899,
        image: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Navy",
        price: 1999,
        image: "https://images.unsplash.com/photo-1520975922284-9f3f7f1d0f59?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "High stretchability",
      "Moisture-wicking fabric",
      "Comfortable elastic waistband",
      "Body-hugging fit",
      "Perfect for yoga & gym"
    ],

    specs: [
      { label: "Fabric", value: "Cotton Spandex" },
      { label: "Fit", value: "Slim Fit" },
      { label: "Waist", value: "Elastic" },
      { label: "Length", value: "Full Length" },
      { label: "Use", value: "Fitness / Casual" }
    ]
  }
  ,
  
  {
    id: "24",
    title: "Sarees",
    description: "Elegant and traditional sarees crafted with premium fabric and intricate detailing, perfect for weddings, festivals, and special occasions.",
    price: 2999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "FabIndia",
    fabric: "Silk Blend",
    color: "Red / Green / Blue",
    sizes: ["Free Size"],
    stock: 40,
    discount: 15,
    delivery: "3-6 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Red",
        price: 2999,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Green",
        price: 2899,
        image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 3099,
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Elegant embroidery work",
      "Soft and lightweight fabric",
      "Traditional ethnic design",
      "Includes matching blouse piece",
      "Perfect for festive and wedding wear"
    ],

    specs: [
      { label: "Fabric", value: "Silk Blend" },
      { label: "Pattern", value: "Embroidered" },
      { label: "Occasion", value: "Festive / Wedding" },
      { label: "Length", value: "6.3 meters" },
      { label: "Blouse Included", value: "Yes" }
    ]
  },

  {
    id: "25",
    title: "Panjabi Suits",
    description: "Traditional and stylish Panjabi suits designed with elegant patterns and premium fabric, ideal for festivals, weddings, and cultural events.",
    price: 3999,
    category: "fashion",
    subCategory: "Men",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f4017c?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "Manyavar",
    fabric: "Cotton Silk",
    color: "Beige / Maroon / White",
    sizes: ["M", "L", "XL", "XXL"],
    stock: 15,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Beige",
        price: 3999,
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f4017c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Maroon",
        price: 3899,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 3799,
        image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Premium cotton-silk fabric",
      "Elegant traditional styling",
      "Comfortable and breathable",
      "Perfect for festive occasions",
      "Fine stitching and finishing"
    ],

    specs: [
      { label: "Fabric", value: "Cotton Silk" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Occasion", value: "Festive / Traditional" },
      { label: "Sleeve", value: "Full Sleeve" },
      { label: "Neck", value: "Mandarin Collar" }
    ]
  },

  {
    id: "26",
    title: "Mobile Phone",
    description: "Advanced smartphone with powerful performance, immersive display, and high-quality camera, perfect for gaming, photography, and daily use.",
    price: 19999,
    category: "electronics",
    subCategory: "Mobile",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Samsung / Realme / Xiaomi",
    model: "2025 Edition",
    color: "Black / Blue / Silver",
    storage: "128GB",
    ram: "6GB",
    display: "6.5 inch AMOLED FHD+",
    battery: "5000 mAh",
    stock: 50,
    discount: 10,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Silver",
        price: 20499,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "AMOLED Full HD+ display",
      "5000mAh battery",
      "50MP AI camera",
      "Fast charging",
      "Fingerprint unlock"
    ],

    specs: [
      { label: "Display", value: "6.5 inch AMOLED" },
      { label: "RAM", value: "6GB" },
      { label: "Storage", value: "128GB" },
      { label: "Battery", value: "5000mAh" },
      { label: "Processor", value: "Octa-core 5G" }
    ]
  },

  {
    id: "27",
    title: "Laptop",
    description: "Powerful and reliable laptop built for work, study, coding, and entertainment with fast performance and sleek design.",
    price: 49999,
    category: "electronics",
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6 inch Full HD",
    graphics: "Intel UHD Graphics",
    stock: 20,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Silver",
        price: 49999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 48999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM multitasking",
      "Fast SSD storage",
      "Full HD display",
      "Backlit keyboard"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Intel UHD" }
    ]
  },

  {
    id: "28",
    title: "Wireless Earbuds",
    description: "Premium wireless earbuds delivering immersive sound, deep bass, and active noise cancellation for calls and music.",
    price: 9999,
    category: "electronics",
    subCategory: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Boat / Realme / Noise",
    battery: "24 Hours Backup",
    connectivity: "Bluetooth 5.2",
    color: "Black / White",
    stock: 40,
    discount: 18,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 9999,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 9799,
        image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Active noise cancellation",
      "Deep bass sound",
      "Touch controls",
      "Water resistant",
      "Fast charging"
    ],

    specs: [
      { label: "Battery", value: "24 Hours" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Noise Cancellation", value: "ANC" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "29",
    title: "Smartwatch",
    description: "Smartwatch with advanced fitness tracking, notifications, and stylish design for everyday use.",
    price: 19999,
    category: "electronics",
    subCategory: "Mobile Accessories",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Noise / Boat / Firebolt",
    display: "1.8 inch HD Display",
    battery: "7 Days Backup",
    connectivity: "Bluetooth",
    waterResistant: "Yes",
    stock: 35,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Heart rate monitor",
      "Step tracking",
      "Sleep analysis",
      "Call & notifications",
      "Multiple sports modes"
    ],

    specs: [
      { label: "Display", value: "1.8 inch HD" },
      { label: "Battery", value: "Up to 7 Days" },
      { label: "Water Resistance", value: "Yes" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Warranty", value: "1 Year" }
    ]
  }

  ,
  
  {
    id: "30",
    title: "Sarees",
    description: "Elegant sarees crafted with premium silk blend fabric, featuring intricate embroidery and vibrant colors, perfect for festive occasions and weddings.",
    price: 2999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "FabIndia",
    fabric: "Silk Blend",
    color: "Red / Green / Blue",
    sizes: ["Free Size"],
    stock: 45,
    discount: 15,
    delivery: "3-6 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Red",
        price: 2999,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Green",
        price: 2899,
        image: "https://images.unsplash.com/photo-1771654805171-5c5141289116?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWVuJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Blue",
        price: 3099,
        image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMHNhcmVlfGVufDB8fDB8fHww"
      }
    ],

    features: [
      "Premium silk blend fabric",
      "Elegant embroidery work",
      "Soft and lightweight",
      "Includes blouse piece",
      "Perfect for festive & wedding wear"
    ],

    specs: [
      { label: "Fabric", value: "Silk Blend" },
      { label: "Pattern", value: "Embroidered" },
      { label: "Length", value: "6.3 meters" },
      { label: "Blouse Included", value: "Yes" },
      { label: "Occasion", value: "Festive / Wedding" }
    ]
  },

  {
    id: "31",
    title: "Panjabi Suits",
    description: "Stylish traditional Panjabi suits made with premium cotton silk fabric, offering comfort and elegance for festive and cultural occasions.",
    price: 3999,
    category: "fashion",
    subCategory: "Men",
    image: "https://media.istockphoto.com/id/1058374456/photo/two-indian-stylish-mans-friends-in-traditional-clothes.webp?a=1&b=1&s=612x612&w=0&k=20&c=hv-iFj7qIyeY5vLmTcnfrcHdWl3cTpHykU3nq6v6qlw=",
    rating: 4.4,

    brand: "Manyavar",
    fabric: "Cotton Silk",
    color: "Beige / Maroon / White",
    sizes: ["M", "L", "XL", "XXL"],
    stock: 20,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Beige",
        price: 3999,
        image: "https://media.istockphoto.com/id/960277518/photo/sikh-man-posing.webp?a=1&b=1&s=612x612&w=0&k=20&c=rSaJpvBvWH9Cwpv-gAlZk6cmEMRf5Exj8ec07xSqzBk="
      },
      {
        color: "Maroon",
        price: 3899,
        image: "https://images.unsplash.com/photo-1634843824979-c89d2910b80f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbmphYmklMjBzdWl0cyUyMG1lbiUyME1hcm9vbiUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "White",
        price: 3799,
        image: "https://images.unsplash.com/photo-1774527929750-f2f32fbb3b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbmphYmklMjBzdWl0cyUyMG1lbiUyME1hcm9vbiUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    features: [
      "Premium cotton silk fabric",
      "Elegant traditional look",
      "Comfortable fit",
      "Durable stitching",
      "Perfect for festivals and weddings"
    ],

    specs: [
      { label: "Fabric", value: "Cotton Silk" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Sleeve", value: "Full Sleeve" },
      { label: "Neck", value: "Mandarin Collar" },
      { label: "Occasion", value: "Festive / Traditional" }
    ]
  },

  {
    id: "32",
    title: "Mobile Phone",
    description: "Next-gen smartphone with high-speed performance, stunning display, and advanced camera features for everyday use and gaming.",
    price: 19999,
    category: "electronics",
    subCategory: "Mobile",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Samsung / Realme / Xiaomi",
    model: "2025 Edition",
    color: "Black / Blue / Silver",
    storage: "128GB",
    ram: "6GB",
    display: "6.5 inch AMOLED FHD+",
    battery: "5000 mAh",
    stock: 55,
    discount: 10,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Silver",
        price: 20499,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "AMOLED display",
      "50MP AI camera",
      "Fast charging",
      "Long battery life",
      "Fingerprint unlock"
    ],

    specs: [
      { label: "Display", value: "6.5 inch AMOLED" },
      { label: "RAM", value: "6GB" },
      { label: "Storage", value: "128GB" },
      { label: "Battery", value: "5000mAh" },
      { label: "Processor", value: "Octa-core 5G" }
    ]
  },

  {
    id: "33",
    title: "Laptop",
    description: "High-performance laptop designed for productivity, coding, and entertainment with powerful specs and sleek design.",
    price: 49999,
    category: "electronics",
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6 inch Full HD",
    graphics: "Intel UHD Graphics",
    stock: 25,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Silver",
        price: 49999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 48999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM",
      "Fast SSD storage",
      "Full HD display",
      "Backlit keyboard"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Intel UHD" }
    ]
  },
  {
    id: "76",
    title: "Mobile Phone",
    description: "Next-gen smartphone with high-speed performance, stunning display, and advanced camera features for everyday use and gaming.",
    category: "electronics",
    subCategory: "Mobile",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Samsung / Realme / Xiaomi",
    model: "2025 Edition",
    display: "6.5 inch AMOLED FHD+",
    battery: "5000 mAh",
    stock: 55,
    discount: 10,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    // VARIANTS (Color + RAM + Storage)
    variants: [
      {
        color: "Black",
        ram: "6GB",
        storage: "128GB",
        price: 19999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
        stock: 10
      },
      {
        color: "Black",
        ram: "8GB",
        storage: "128GB",
        price: 20999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
        stock: 8
      },
      {
        color: "Blue",
        ram: "6GB",
        storage: "128GB",
        price: 19499,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        stock: 12
      },
      {
        color: "Blue",
        ram: "8GB",
        storage: "256GB",
        price: 21999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        stock: 7
      },
      {
        color: "Silver",
        ram: "8GB",
        storage: "256GB",
        price: 22499,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=60",
        stock: 6
      }
    ],

    features: [
      "AMOLED display",
      "50MP AI camera",
      "Fast charging",
      "Long battery life",
      "Fingerprint unlock"
    ],

    specs: [
      { label: "Display", value: "6.5 inch AMOLED" },
      { label: "Processor", value: "Octa-core 5G" },
      { label: "Battery", value: "5000mAh" },
      { label: "Camera", value: "50MP AI Camera" },
      { label: "OS", value: "Android 14" },
      { label: "Network", value: "5G" }
    ],
    price: 0
  },
  {
    id: "77",
    title: "Laptop",
    description: "High-performance laptop designed for productivity, coding, and entertainment with powerful specs and sleek design.",
    category: "electronics",
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    display: "15.6 inch Full HD",
    graphics: "Intel UHD Graphics",
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    // VARIANTS (Color + RAM + Storage)
    variants: [
      {
        color: "Silver",
        ram: "8GB",
        storage: "512GB SSD",
        price: 49999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
        stock: 10
      },
      {
        color: "Silver",
        ram: "16GB",
        storage: "512GB SSD",
        price: 52999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
        stock: 6
      },
      {
        color: "Grey",
        ram: "16GB",
        storage: "512GB SSD",
        price: 48999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        stock: 5
      },
      {
        color: "Grey",
        ram: "16GB",
        storage: "1TB SSD",
        price: 55999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        stock: 4
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM",
      "Fast SSD storage",
      "Full HD display",
      "Backlit keyboard"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Intel UHD" },
      { label: "Battery", value: "6 Hours Backup" },
      { label: "Weight", value: "1.7kg" },
      { label: "OS", value: "Windows 11" }
    ],
    price: 0
  },

  {
    id: "34",
    title: "Wireless Earbuds",
    description: "Wireless earbuds with premium sound quality, deep bass, and noise cancellation for music lovers and professionals.",
    price: 9999,
    category: "electronics",
    subCategory: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Boat / Realme / Noise",
    battery: "24 Hours Backup",
    connectivity: "Bluetooth 5.2",
    color: "Black / White",
    stock: 45,
    discount: 18,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 9999,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 9799,
        image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Active noise cancellation",
      "Deep bass sound",
      "Touch controls",
      "Water resistant",
      "Fast charging"
    ],

    specs: [
      { label: "Battery", value: "24 Hours" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Noise Cancellation", value: "ANC" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "35",
    title: "Smartwatch",
    description: "Advanced smartwatch with fitness tracking, notifications, and stylish design for modern lifestyle.",
    price: 19999,
    category: "electronics",
    subCategory: "Wearables",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Noise / Boat / Firebolt",
    display: "1.8 inch HD Display",
    battery: "7 Days Backup",
    connectivity: "Bluetooth",
    waterResistant: "Yes",
    stock: 40,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Heart rate monitor",
      "Step tracking",
      "Sleep monitoring",
      "Call notifications",
      "Multiple sports modes"
    ],

    specs: [
      { label: "Display", value: "1.8 inch HD" },
      { label: "Battery", value: "Up to 7 Days" },
      { label: "Water Resistance", value: "Yes" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Warranty", value: "1 Year" }
    ]
  },
  
  {
    id: "44",
    title: "Kids Educational Toys",
    description: "Fun and educational toys designed to improve creativity, learning, and motor skills in children.",
    price: 999,
    category: "toys",
    subCategory: "Kids",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&auto=format&fit=crop&q=60",
    rating: 4.1,

    brand: "Funskool",
    material: "Plastic",
    ageGroup: "3+ Years",
    stock: 50,
    discount: 5,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { name: "Puzzle", price: 999, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=60" },
      { type: "Blocks", price: 1099, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=60" }
    ],

    features: [
      "Safe for kids",
      "Educational learning toy",
      "Colorful design",
      "Durable build",
      "Boosts creativity"
    ],

    specs: [
      { label: "Material", value: "Plastic" },
      { label: "Age Group", value: "3+ Years" },
      { label: "Battery", value: "No" },
      { label: "Type", value: "Educational" },
      { label: "Safety", value: "Non-toxic" }
    ]
  },

  {
    id: "45",
    title: "Board Games Set",
    description: "Classic board games set perfect for family entertainment and group fun.",
    price: 1499,
    category: "toys",
    subCategory: "Games",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b33d88?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "Hasbro",
    material: "Cardboard & Plastic",
    stock: 50,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { type: "Chess", price: 1499, image: "https://images.unsplash.com/photo-1606503153255-59d8b8b33d88?w=600" },
      { type: "Ludo", price: 1299, image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600" }
    ],

    features: [
      "Fun for family",
      "Multiple games included",
      "Durable material",
      "Improves strategy",
      "Group entertainment"
    ],

    specs: [
      { label: "Players", value: "2-6" },
      { label: "Material", value: "Cardboard & Plastic" },
      { label: "Age Group", value: "6+ Years" },
      { label: "Duration", value: "30-60 mins" },
      { label: "Use", value: "Family / Party" }
    ]
  },

  {
    id: "47",
    title: "LED Table Lamp",
    description: "Modern LED lamp with adjustable brightness and eye protection, ideal for study and office use.",
    price: 1299,
    category: "Home",
    subCategory: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=60",
    rating: 4.4,

    brand: "Philips / Wipro",
    material: "Plastic & Metal",
    color: "White / Black",
    power: "10W",
    stock: 40,
    discount: 12,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { color: "White", price: 1299, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600" },
      { color: "Black", price: 1249, image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=600" }
    ],

    features: [
      "Energy efficient LED",
      "Adjustable brightness",
      "Eye protection light",
      "Touch control",
      "Modern design"
    ],

    specs: [
      { label: "Power", value: "10W" },
      { label: "Light Type", value: "LED" },
      { label: "Control", value: "Touch" },
      { label: "Material", value: "Plastic & Metal" },
      { label: "Warranty", value: "6 Months" }
    ]
  },

  {
    id: "48",
    title: "Acoustic Guitar",
    description: "High-quality acoustic guitar with rich sound, perfect for beginners and professionals.",
    price: 5999,
    category: "Instrument",
    subCategory: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Yamaha / Kadence",
    material: "Wood",
    color: "Brown / Black",
    stock: 15,
    discount: 8,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { color: "Brown", price: 5999, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600" },
      { color: "Black", price: 6199, image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600" }
    ],

    features: [
      "Rich sound quality",
      "Steel strings",
      "Durable wooden body",
      "Comfortable neck",
      "Beginner friendly"
    ],

    specs: [
      { label: "Type", value: "Acoustic" },
      { label: "Strings", value: "6" },
      { label: "Material", value: "Wood" },
      { label: "Skill Level", value: "All Levels" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "49",
    title: "Skin Care Kit",
    description: "Complete skincare kit for glowing and healthy skin with daily essentials.",
    price: 1899,
    category: "Beauty",
    subCategory: "Skin Care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=60",
    rating: 4.4,

    brand: "Lakme / Garnier / Mamaearth",
    skinType: "All Skin Types",
    stock: 50,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "No Replacement",

    variants: [
      { type: "Basic Kit", price: 1899, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600" },
      { type: "Advanced Kit", price: 2299, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600" }
    ],

    features: [
      "Face wash included",
      "Moisturizer included",
      "Sunscreen included",
      "Daily use",
      "Improves glow"
    ],

    specs: [
      { label: "Skin Type", value: "All" },
      { label: "Use", value: "Daily" },
      { label: "Organic", value: "Yes" },
      { label: "Gender", value: "Unisex" },
      { label: "Warranty", value: "No Warranty" }
    ]
  },

  {
    id: "50",
    title: "Remote Control Car",
    description: "High-speed RC car with strong build and long battery life for kids entertainment.",
    price: 1499,
    category: "toys",
    subCategory: "Kids",
    image: "https://images.unsplash.com/photo-1601758123927-196a33e53c0a?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "ToyZone",
    material: "Plastic",
    color: "Red / Blue",
    battery: "Rechargeable",
    ageGroup: "5+ Years",
    stock: 35,
    discount: 10,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { color: "Red", price: 1499, image: "https://images.unsplash.com/photo-1601758123927-196a33e53c0a?w=600" },
      { color: "Blue", price: 1449, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600" }
    ],

    features: [
      "Remote controlled",
      "Rechargeable battery",
      "High speed",
      "Durable build",
      "Kid-friendly"
    ],

    specs: [
      { label: "Range", value: "10m" },
      { label: "Battery", value: "Rechargeable" },
      { label: "Material", value: "Plastic" },
      { label: "Age Group", value: "5+" },
      { label: "Warranty", value: "6 Months" }
    ]
  },{
  id: "105",
  title: "iPhone 14",
  description: "Powerful smartphone with A15 Bionic chip and stunning display.",
  price: 79999,
  category: "electronics",
  subCategory: "mobile",
  image: "https://images.unsplash.com/photo-1664478546381-1f6d7c3c7eca?w=600",
  rating: 4.8,

  brand: "Apple",
  display: "6.1 inch Super Retina XDR",
  camera: "12MP Dual Camera",
  battery: "3279 mAh",
  processor: "A15 Bionic",

  stock: 20,
  discount: 5,
  delivery: "2-3 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      storage: "128GB",
      price: 79999,
      image: "https://images.unsplash.com/photo-1664478546381-1f6d7c3c7eca?w=600"
    },
    {
      storage: "256GB",
      price: 89999,
      image: "https://images.unsplash.com/photo-1664478546381-1f6d7c3c7eca?w=600"
    }
  ],

  features: [
    "A15 Bionic Chip",
    "Super Retina Display",
    "Face ID",
    "5G Supported",
    "Premium Build"
  ],

  specs: [
    { label: "Display", value: "6.1 inch" },
    { label: "Processor", value: "A15" },
    { label: "Camera", value: "12MP Dual" },
    { label: "Battery", value: "3279 mAh" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "73",
  title: "Studio Microphone",
  description: "High-quality condenser microphone for recording and streaming.",
  price: 3499,
  category: "electronics",
  subCategory: "Mobile Accessories",
  image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600",
  rating: 4.5,

  brand: "Blue",
  connectivity: "USB / XLR",
  color: "Black",

  stock: 25,
  discount: 12,
  delivery: "2-3 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      variantType: "USB",
      price: 3499,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600"
    },
    {
      variantType: "XLR",
      price: 4299,
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600"
    }
  ],

  features: [
    "Studio quality sound",
    "Noise reduction",
    "Plug and play",
    "Podcast ready",
    "Durable build"
  ],

  specs: [
    { label: "Type", value: "Condenser" },
    { label: "Connectivity", value: "USB/XLR" },
    { label: "Frequency", value: "20Hz-20kHz" },
    { label: "Use", value: "Recording" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "75",
  title: "Face Wash",
  description: "Gentle face wash for daily skincare routine.",
  price: 299,
  category: "beauty",
  subCategory: "skin care",
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
  rating: 4.3,

  brand: "Himalaya",
  skinType: "All Skin Types",

  stock: 60,
  discount: 10,
  delivery: "2-3 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      size: "100ml",
      price: 249,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600"
    },
    {
      size: "150ml",
      price: 299,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600"
    }
  ],

  features: [
    "Removes dirt",
    "Gentle on skin",
    "Daily use",
    "Fresh fragrance",
    "Oil control"
  ],

  specs: [
    { label: "Skin Type", value: "All" },
    { label: "Form", value: "Gel" },
    { label: "Use", value: "Daily" },
    { label: "Quantity", value: "150ml" },
    { label: "Warranty", value: "No Warranty" }
  ]
},


  
  
  
  
// {
//   id: "101",
//   title: "Toy Train Set",
//   description: "Classic toy train set with tracks and multiple coaches.",
//   price: 1199,
//   category: "Toys",
//   subCategory: "Vehicles",
//   image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=60",
//   rating: 4.4,

//   brand: "ToyWorld",
//   material: ["Plastic"],
//   pieces: 30,
//   ageGroup: "3+ Years",
//   stock: 25,
//   discount: 12,
//   delivery: "3-5 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Classic train toy",
//     "Includes tracks and coaches",
//     "Battery operated engine",
//     "Durable plastic",
//     "Easy to assemble"
//   ],

//   specs: [
//     { label: "Type", value: "Train Set" },
//     { label: "Material", value: "Plastic" },
//     { label: "Number of Pieces", value: "30" },
//     { label: "Age Group", value: "3+ Years" },
//     { label: "Battery", value: "Yes" }
//   ]
// },
// {
//   id: "102",
//   title: "Kids Drawing Board",
//   description: "Magnetic drawing board that helps kids practice creativity.",
//   price: 649,
//   category: "Toys",
//   subCategory: "Educational",
//   image: "https://plus.unsplash.com/premium_photo-1684586995852-8e5bdeb16866?q=80&w=1170&auto=format&fit=crop",
//   rating: 4.3,

//   brand: "EduDraw",
//   material: ["Plastic"],
//   size: "Medium",
//   ageGroup: "3+ Years",
//   stock: 40,
//   discount: 10,
//   delivery: "2-4 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Magnetic drawing board",
//     "Reusable writing surface",
//     "Improves creativity",
//     "Lightweight and portable",
//     "Safe for kids"
//   ],

//   specs: [
//     { label: "Type", value: "Drawing Board" },
//     { label: "Material", value: "Plastic" },
//     { label: "Board Type", value: "Magnetic" },
//     { label: "Age Group", value: "3+ Years" },
//     { label: "Warranty", value: "No Warranty" }
//   ]
// },
// {
//   id: "103",
//   title: "Mini Basketball Hoop Toy",
//   description: "Indoor mini basketball hoop set for kids fun activities.",
//   price: 899,
//   category: "Toys",
//   subCategory: "Sports Toys",
//   image: "https://media.istockphoto.com/id/1334360516/photo/cute-baby-boy-having-fun-while-playing-basketball-with-parents-at-home.jpg",
//   rating: 4.2,

//   brand: "SportyFun",
//   material:[ "Plastic"],
//   items: "Hoop + Ball + Net",
//   ageGroup: "5+ Years",
//   stock: 30,
//   discount: 11,
//   delivery: "3-5 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Indoor basketball hoop",
//     "Wall mount design",
//     "Improves physical activity",
//     "Fun sports toy",
//     "Easy installation"
//   ],

//   specs: [
//     { label: "Type", value: "Basketball Hoop Toy" },
//     { label: "Material", value: "Plastic" },
//     { label: "Items Included", value: "Hoop + Ball + Net" },
//     { label: "Age Group", value: "5+ Years" },
//     { label: "Warranty", value: "No Warranty" }
//   ]
// },
// {
//   id: "104",
//   title: "Toy Dinosaur Figure Set",
//   description: "Realistic dinosaur figure toys perfect for kids who love dinosaurs.",
//   price: 749,
//   category: "Toys",
//   subCategory: "Action Figures",
//   image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=60",
//   rating: 4.5,

//   brand: "DinoWorld",
//   material: ["Rubber & Plastic"],
//   pieces: 12,
//   ageGroup: "4+ Years",
//   stock: 35,
//   discount: 9,
//   delivery: "3-5 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Realistic dinosaur figures",
//     "Educational toy",
//     "Durable material",
//     "Safe for kids",
//     "Perfect for dinosaur lovers"
//   ],

//   specs: [
//     { label: "Type", value: "Dinosaur Figures" },
//     { label: "Material", value: "Rubber & Plastic" },
//     { label: "Number of Pieces", value: "12" },
//     { label: "Age Group", value: "4+ Years" },
//     { label: "Warranty", value: "No Warranty" }
//   ]
// },
// {
//   id: "105",
//   title: "iPhone 14 Smartphone",
//   description: "Powerful smartphone with A15 Bionic chip and stunning display.",
//   price: 79999,
//   category: "Electronics",
//   subCategory: "Mobile",
//   image: "https://images.unsplash.com/photo-1664478546381-1f6d7c3c7eca?w=600&auto=format&fit=crop&q=60",
//   rating: 4.8,

//   brand: "Apple",
//   storage: "128GB",
//   ram: "6GB",
//   display: "6.1 inch Super Retina XDR",
//   camera: "12MP + 12MP Dual Camera",
//   battery: "3279 mAh",
//   processor: "A15 Bionic Chip",
//   warranty: "1 Year Warranty",
//   stock: 20,
//   discount: 5,
//   delivery: "2-3 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "A15 Bionic Chip",
//     "Super Retina XDR Display",
//     "Dual Camera System",
//     "Face ID",
//     "5G Supported"
//   ],

//   specs: [
//     { label: "Storage", value: "128GB" },
//     { label: "RAM", value: "6GB" },
//     { label: "Display", value: "6.1 inch Super Retina XDR" },
//     { label: "Camera", value: "12MP + 12MP" },
//     { label: "Battery", value: "3279 mAh" },
//     { label: "Processor", value: "A15 Bionic" },
//     { label: "Warranty", value: "1 Year" }
//   ]
// },
// {
//   id: "106",
//   title: "Samsung Galaxy S22",
//   description: "Premium Android smartphone with high performance and great camera.",
//   price: 69999,
//   category: "Electronics",
//   subCategory: "Mobile",
//   image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=60",
//   rating: 4.6,

//   brand: "Samsung",
//   storage: "128GB",
//   ram: "8GB",
//   display: "6.1 inch AMOLED",
//   camera: "50MP + 12MP + 10MP",
//   battery: "3700 mAh",
//   processor: "Snapdragon 8 Gen 1",
//   warranty: "1 Year Warranty",
//   stock: 15,
//   discount: 10,
//   delivery: "2-3 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Dynamic AMOLED Display",
//     "50MP Triple Camera",
//     "8GB RAM",
//     "5G Supported",
//     "Fast Charging"
//   ],

//   specs: [
//     { label: "Storage", value: "128GB" },
//     { label: "RAM", value: "8GB" },
//     { label: "Display", value: "6.1 inch AMOLED" },
//     { label: "Camera", value: "50MP + 12MP + 10MP" },
//     { label: "Battery", value: "3700 mAh" },
//     { label: "Processor", value: "Snapdragon 8 Gen 1" },
//     { label: "Warranty", value: "1 Year" }
//   ]
// },
// {
//   id: "107",
//   title: "OnePlus 11 5G",
//   description: "Fast and smooth smartphone with powerful Snapdragon processor.",
//   price: 56999,
//   category: "Electronics",
//   subCategory: "Mobile",
//   image: "https://images.unsplash.com/photo-1678911820864-e0c9e3cfd540?w=600&auto=format&fit=crop&q=60",
//   rating: 4.7,

//   brand: "OnePlus",
//   storage: "256GB",
//   ram: "12GB",
//   display: "6.7 inch AMOLED",
//   camera: "50MP + 48MP + 32MP",
//   battery: "5000 mAh",
//   processor: "Snapdragon 8 Gen 2",
//   warranty: "1 Year Warranty",
//   stock: 18,
//   discount: 12,
//   delivery: "2-3 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "120Hz AMOLED Display",
//     "Snapdragon 8 Gen 2",
//     "Fast Charging",
//     "Triple Camera",
//     "5G Supported"
//   ],

//   specs: [
//     { label: "Storage", value: "256GB" },
//     { label: "RAM", value: "12GB" },
//     { label: "Display", value: "6.7 inch AMOLED" },
//     { label: "Camera", value: "50MP + 48MP + 32MP" },
//     { label: "Battery", value: "5000 mAh" },
//     { label: "Processor", value: "Snapdragon 8 Gen 2" },
//     { label: "Warranty", value: "1 Year" }
//   ]
// },
// {
//   id: "108",
//   title: "Realme Narzo 60",
//   description: "Budget friendly smartphone with great battery life.",
//   price: 14999,
//   category: "Electronics",
//   subCategory: "Mobile",
//   image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
//   rating: 4.3,

//   brand: "Realme",
//   storage: "128GB",
//   ram: "6GB",
//   display: "6.5 inch IPS LCD",
//   camera: "64MP + 2MP",
//   battery: "5000 mAh",
//   processor: "MediaTek Helio G96",
//   warranty: "1 Year Warranty",
//   stock: 25,
//   discount: 8,
//   delivery: "2-4 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Large Display",
//     "64MP Camera",
//     "5000 mAh Battery",
//     "Budget Phone",
//     "Fast Charging"
//   ],

//   specs: [
//     { label: "Storage", value: "128GB" },
//     { label: "RAM", value: "6GB" },
//     { label: "Display", value: "6.5 inch IPS LCD" },
//     { label: "Camera", value: "64MP + 2MP" },
//     { label: "Battery", value: "5000 mAh" },
//     { label: "Processor", value: "MediaTek Helio G96" },
//     { label: "Warranty", value: "1 Year" }
//   ]
// },
// {
//   id: "109",
//   title: "Canon EOS DSLR Camera",
//   description: "Professional DSLR camera for high quality photography.",
//   price: 45999,
//   category: "Electronics",
//   subCategory: "Camera",
//   image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=60",
//   rating: 4.7,

//   brand: "Canon",
//   resolution: "24.1 MP",
//   sensor: "APS-C CMOS",
//   video: "Full HD",
//   connectivity: "WiFi",
//   warranty: "2 Years Warranty",
//   stock: 10,
//   discount: 10,
//   delivery: "3-5 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "24.1 MP Camera",
//     "Full HD Video Recording",
//     "WiFi Connectivity",
//     "Professional Photography",
//     "Interchangeable Lens"
//   ],

//   specs: [
//     { label: "Resolution", value: "24.1 MP" },
//     { label: "Sensor", value: "APS-C CMOS" },
//     { label: "Video", value: "Full HD" },
//     { label: "Connectivity", value: "WiFi" },
//     { label: "Warranty", value: "2 Years" }
//   ]
// },
// {
//   id: "110",
//   title: "Sony Alpha Mirrorless Camera",
//   description: "Compact mirrorless camera with excellent image quality.",
//   price: 74999,
//   category: "Electronics",
//   subCategory: "Camera",
//   image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&auto=format&fit=crop&q=60",
//   rating: 4.8,

//   brand: "Sony",
//   resolution: "24.2 MP",
//   sensor: "APS-C CMOS",
//   video: "4K Video",
//   connectivity: "WiFi + Bluetooth",
//   warranty: "2 Years Warranty",
//   stock: 8,
//   discount: 8,
//   delivery: "3-5 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "24.2 MP Sensor",
//     "4K Video Recording",
//     "Fast Auto Focus",
//     "WiFi & Bluetooth",
//     "Compact Design"
//   ],

//   specs: [
//     { label: "Resolution", value: "24.2 MP" },
//     { label: "Sensor", value: "APS-C CMOS" },
//     { label: "Video", value: "4K" },
//     { label: "Connectivity", value: "WiFi + Bluetooth" },
//     { label: "Warranty", value: "2 Years" }
//   ]
// },
// {
//   id: "111",
//   title: "Nikon Z50 Camera",
//   description: "Lightweight mirrorless camera perfect for travel photography.",
//   price: 68999,
//   category: "Electronics",
//   subCategory: "Camera",
//   image: "https://images.unsplash.com/photo-1519183071298-a2962be96f83?w=600&auto=format&fit=crop&q=60",
//   rating: 4.6,

//   brand: "Nikon",
//   resolution: "20.9 MP",
//   sensor: "APS-C CMOS",
//   video: "4K Video",
//   connectivity: "WiFi + Bluetooth",
//   warranty: "2 Years Warranty",
//   stock: 12,
//   discount: 9,
//   delivery: "3-5 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "20.9 MP Sensor",
//     "4K Video Recording",
//     "Compact Mirrorless Camera",
//     "Travel Friendly",
//     "WiFi & Bluetooth"
//   ],

//   specs: [
//     { label: "Resolution", value: "20.9 MP" },
//     { label: "Sensor", value: "APS-C CMOS" },
//     { label: "Video", value: "4K" },
//     { label: "Connectivity", value: "WiFi + Bluetooth" },
//     { label: "Warranty", value: "2 Years" }
//   ]
// }
// ,{
//   id: "112",
//   title: "GoPro Action Camera",
//   description: "Waterproof action camera for adventure and sports shooting.",
//   price: 32999,
//   category: "Electronics",
//   subCategory: "Camera",
//   image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60",
//   rating: 4.5,

//   brand: "GoPro",
//   resolution: "27 MP",
//   sensor: "CMOS Sensor",
//   video: "5.3K Video",
//   connectivity: "WiFi + Bluetooth",
//   warranty: "1 Year Warranty",
//   stock: 18,
//   discount: 12,
//   delivery: "3-5 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "27 MP Photo Resolution",
//     "5.3K Video Recording",
//     "Waterproof Camera",
//     "HyperSmooth Stabilization",
//     "WiFi & Bluetooth"
//   ],

//   specs: [
//     { label: "Resolution", value: "27 MP" },
//     { label: "Sensor", value: "CMOS" },
//     { label: "Video", value: "5.3K" },
//     { label: "Connectivity", value: "WiFi + Bluetooth" },
//     { label: "Warranty", value: "1 Year" }
//   ]

// },{
//   id: "120",
//   title: "Non Stick Frying Pan",
//   description: "Durable non-stick frying pan perfect for everyday cooking.",
//   price: 899,
//   category: "Kitchen",
//   subCategory: "Cookware",
//   image: "https://plus.unsplash.com/premium_photo-1716488286931-79cef654e08c?q=80&w=1180&auto=format&fit=crop",
//   rating: 4.4,

//   brand: "Prestige",
//   material:[ "Aluminium"],
//   // coating: "Non-stick",
//   warranty: "6 Months Warranty",
//   stock: 40,
//   discount: 10,
//   delivery: "2-4 Days Delivery",
//   replacement: "5 Days Replacement",

//   features: [
//     "Non-stick Coating",
//     "Aluminium Body",
//     "Heat Resistant Handle",
//     "Induction Compatible",
//     "Easy to Clean"
//   ],

//   specs: [
//     { label: "Material", value: "Aluminium" },
//     { label: "Coating", value: "Non-stick" },
//     { label: "Compatibility", value: "Gas & Induction" },
//     { label: "Dishwasher Safe", value: "Yes" },
//     { label: "Warranty", value: "6 Months" }
//   ]
// },
// {
//   id: "121",
//   title: "Stainless Steel Cooking Pot",
//   description: "High quality stainless steel pot for boiling and cooking.",
//   price: 1299,
//   category: "Kitchen",
//   subCategory: "Cookware",
//   image: "https://plus.unsplash.com/premium_photo-1718735910395-94a28fbc9f6b",
//   rating: 4.5,

//   brand: "Pigeon",
//   material:[ "Stainless Steel"],
//   capacity: "3 Litres",
//   warranty: "1 Year Warranty",
//   stock: 35,
//   discount: 8,
//   delivery: "2-4 Days Delivery",
//   replacement: "5 Days Replacement",

//   features: [
//     "Stainless Steel Body",
//     "Induction Compatible",
//     "Rust Resistant",
//     "Strong Handles",
//     "Dishwasher Safe"
//   ],

//   specs: [
//     { label: "Material", value: "Stainless Steel" },
//     { label: "Capacity", value: "3 Litres" },
//     { label: "Compatibility", value: "Gas & Induction" },
//     { label: "Rust Resistant", value: "Yes" },
//     { label: "Warranty", value: "1 Year" }
//   ]
// },{
//   id: "122",
//   title: "Knife Set",
//   description: "Sharp stainless steel kitchen knife set.",
//   price: 799,
//   category: "Kitchen",
//   subCategory: "Tools",
//   image: "https://images.unsplash.com/photo-1596633609591-e4e1e9e06b7f",
//   rating: 4.3,

//   brand: "Pigeon",
//   material: ["Stainless Steel"],
//   // pieces: "5 Pieces",
//   warranty: "6 Months Warranty",
//   stock: 50,
//   discount: 15,
//   delivery: "2-3 Days Delivery",
//   replacement: "5 Days Replacement",

//   features: [
//     "5 Piece Knife Set",
//     "Sharp Stainless Steel Blades",
//     "Ergonomic Handle",
//     "Rust Resistant",
//     "Easy to Clean"
//   ],

//   specs: [
//     { label: "Material", value: "Stainless Steel" },
//     { label: "Pieces", value: "5" },
//     { label: "Rust Resistant", value: "Yes" },
//     { label: "Dishwasher Safe", value: "Yes" },
//     { label: "Warranty", value: "6 Months" }
//   ]
// },{
//   id: "123",
//   title: "Cutting Board",
//   description: "Strong wooden cutting board for vegetables and meat.",
//   price: 399,
//   category: "Kitchen",
//   subCategory: "Tools",
//   image: "https://plus.unsplash.com/premium_photo-1714702846875-ca3a149c0592",
//   rating: 4.2,

//   brand: "Solimo",
//   material: ["Wood"],
//   warranty: "6 Months Warranty",
//   stock: 60,
//   discount: 5,
//   delivery: "2-3 Days Delivery",
//   replacement: "5 Days Replacement",

//   features: [
//     "Strong Wooden Board",
//     "Non-slip Base",
//     "Reversible Use",
//     "Knife Friendly Surface",
//     "Easy to Wash"
//   ],

//   specs: [
//     { label: "Material", value: "Wood" },
//     { label: "Non-slip", value: "Yes" },
//     { label: "Reversible", value: "Yes" },
//     { label: "Eco Friendly", value: "Yes" },
//     { label: "Warranty", value: "6 Months" }
//   ]
// },{
//   id: "130",
//   title: "iPhone 13",
//   description: "Powerful Apple smartphone with A15 Bionic chip.",
//   price: 69999,
//   category: "Electronics",
//   subCategory: "Mobile",
//   image: "data:image/webp;base64,...",
//   rating: 4.8,

//   brand: "Apple",
//   storage: "128GB",
//   display: "6.1 inch Super Retina XDR",
//   processor: "A15 Bionic",
//   camera: "12MP Dual Camera",
//   battery: "3240mAh",
//   warranty: "1 Year Warranty",
//   stock: 20,
//   discount: 6,
//   delivery: "2-4 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "A15 Bionic Chip",
//     "Super Retina XDR Display",
//     "12MP Dual Camera",
//     "Face ID",
//     "Fast Charging Support"
//   ],

//   specs: [
//     { label: "Storage", value: "128GB" },
//     { label: "Display", value: "6.1 inch" },
//     { label: "Processor", value: "A15 Bionic" },
//     { label: "Camera", value: "12MP Dual" },
//     { label: "Battery", value: "3240mAh" }
//   ]
// },{
//   id: "131",
//   title: "Samsung Galaxy S23",
//   description: "Premium Android smartphone with great performance.",
//   price: 74999,
//   category: "Electronics",
//   subCategory: "Mobile",
//   image: "data:image/webp;base64,...",
//   rating: 4.7,

//   brand: "Samsung",
//   storage: "256GB",
//   display: "6.1 inch Dynamic AMOLED",
//   processor: "Snapdragon 8 Gen 2",
//   camera: "50MP + 12MP + 10MP",
//   battery: "3900mAh",
//   warranty: "1 Year Warranty",
//   stock: 15,
//   discount: 10,
//   delivery: "2-4 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Snapdragon 8 Gen 2 Processor",
//     "Dynamic AMOLED Display",
//     "50MP Triple Camera",
//     "5G Supported",
//     "Fast Charging"
//   ],

//   specs: [
//     { label: "Storage", value: "256GB" },
//     { label: "Display", value: "6.1 inch AMOLED" },
//     { label: "Processor", value: "Snapdragon 8 Gen 2" },
//     { label: "Camera", value: "50MP Triple Camera" },
//     { label: "Battery", value: "3900mAh" }
//   ]
// },{
//   id: "132",
//   title: "OnePlus Nord CE",
//   description: "Fast and smooth 5G smartphone.",
//   price: 27999,
//   category: "Electronics",
//   subCategory: "Mobile",
//   image: "https://oasis.opstatics.com/content/dam/oasis/page/2021/ebba/spec/Silver-Ray.png",
//   rating: 4.5,

//   brand: "OnePlus",
//   storage: "128GB",
//   display: "6.43 inch AMOLED",
//   processor: "Snapdragon 750G",
//   camera: "64MP + 8MP + 2MP",
//   battery: "4500mAh",
//   warranty: "1 Year Warranty",
//   stock: 25,
//   discount: 12,
//   delivery: "2-4 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "AMOLED Display",
//     "64MP Triple Camera",
//     "5G Supported",
//     "Fast Charging",
//     "Slim Design"
//   ],

//   specs: [
//     { label: "Storage", value: "128GB" },
//     { label: "Display", value: "6.43 inch AMOLED" },
//     { label: "Processor", value: "Snapdragon 750G" },
//     { label: "Camera", value: "64MP Triple Camera" },
//     { label: "Battery", value: "4500mAh" }
//   ]
// },{
//   id: "133",
//   title: "Coffee",
//   description: "Authentic coffee",
//   price: 499,
//   category: "Food",
//   subCategory: "Beverages",
//   image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
//   rating: 4.5,

//   brand: "Nescafe",
//   weight: "200g",
//   type: "Instant Coffee",
//   flavor: "Classic",
//   warranty: "No Warranty",
//   stock: 100,
//   discount: 5,
//   delivery: "2-3 Days Delivery",
//   replacement: "No Replacement",

//   features: [
//     "Rich Aroma",
//     "Instant Coffee Powder",
//     "Premium Quality Beans",
//     "Easy to Prepare",
//     "Strong Flavor"
//   ],

//   specs: [
//     { label: "Weight", value: "200g" },
//     { label: "Type", value: "Instant Coffee" },
//     { label: "Flavor", value: "Classic" },
//     { label: "Shelf Life", value: "12 Months" },
//     { label: "Brand", value: "Nescafe" }
//   ]
// },

//   {
//     id: "134",
//     title: "Men's Casual Shirt",
//     description: "Comfortable cotton casual shirt for men.",
//     price: 999,
//     category: "fashion",
//     subCategory: "Men",
//     image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
//     rating: 4.2,
//     brand: "Levi's",
//     fabric: "100% Cotton",
//     color: "Blue",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     stock: 35,
//     discount: 10,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",
//     features: [
//       "Soft and breathable cotton",
//       "Regular fit for comfort",
//       "Durable stitching",
//       "Versatile for casual wear"
//     ],
//     specs: [
//       { label: "Fabric", value: "100% Cotton" },
//       { label: "Fit", value: "Regular Fit" },
//       { label: "Sleeve", value: "Full Sleeve" },
//       { label: "Collar", value: "Classic Collar" },
//       { label: "Occasion", value: "Casual / Daily Wear" }
//     ]
//   },
//   {
//     id: "135",
//     title: "Women's Handbag",
//     description: "Stylish handbag for women.",
//     price: 1499,
//     category: "fashion",
//     subCategory: "Women",
//     image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
//     rating: 4.4,
//     brand: "Michael Kors",
//     material: ["PU Leather"],
//     color: "Black",
//     sizes: ["One Size"],
//     stock: 40,
//     discount: 12,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",
//     features: [
//       "Elegant design with durable material",
//       "Multiple compartments for storage",
//       "Adjustable strap for comfort",
//       "Perfect for casual and formal use"
//     ],
//     specs: [
//       { label: "Material", value: "PU Leather" },
//       { label: "Compartments", value: "3" },
//       { label: "Closure Type", value: "Zipper" },
//       { label: "Occasion", value: "Casual / Formal" },
//       { label: "Size", value: "Medium" }
//     ]
//   },
//   {
//     id: "136",
//     title: "Kids T-shirt",
//     description: "Soft cotton t-shirt for children.",
//     price: 499,
//     category: "fashion",
//     subCategory: "Children",
//     image: "https://images.unsplash.com/photo-1585386959984-a41552231658",
//     rating: 4.1,
//     brand: "H&M",
//     fabric: "100% Cotton",
//     color: "Yellow",
  
//     stock: 50,
//     discount: 8,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",
//     features: [
//       "Soft and breathable fabric",
//       "Easy to wash and maintain",
//       "Comfortable fit for children",
//       "Bright and playful design"
//     ],
//     specs: [
//       { label: "Fabric", value: "100% Cotton" },
//       { label: "Fit", value: "Regular Fit" },
//       { label: "Sleeve", value: "Short Sleeve" },
//       { label: "Neck", value: "Round Neck" },
//       { label: "Occasion", value: "Casual / Playtime" }
//     ]
//   }
// ,
// {
//   id: "137",
//   title: "Gaming Laptop",
//   description: "High performance gaming laptop.",
//   price: 75000,
//   category: "Electronics",
//   subCategory: "Laptop",
//   image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
//   rating: 4.6,

//   brand: "ASUS",
//   storage: "512GB SSD",
//   display: "15.6 inch Full HD",
//   processor: "Intel i7 12th Gen",
//   graphics: "NVIDIA RTX 3050",
//   ram: "16GB",
//   battery: "6000mAh",
//   warranty: "1 Year Warranty",
//   stock: 10,
//   discount: 15,
//   delivery: "2-4 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Intel i7 12th Gen Processor",
//     "16GB RAM",
//     "512GB SSD Storage",
//     "NVIDIA RTX 3050 Graphics",
//     "Full HD Display"
//   ],

//   specs: [
//     { label: "Processor", value: "Intel i7 12th Gen" },
//     { label: "RAM", value: "16GB" },
//     { label: "Storage", value: "512GB SSD" },
//     { label: "Graphics", value: "RTX 3050" },
//     { label: "Display", value: "15.6 inch FHD" }
//   ]
// },{
//   id: "138",
//   title: "Wireless Mouse",
//   description: "Smooth wireless mouse.",
//   price: 799,
//   category: "Electronics",
//   subCategory: "Accessories",
//   image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
//   rating: 4.3,

//   brand: "Logitech",
//   connectivity: "Wireless",
//   battery: "AA Battery",
//   warranty: "1 Year Warranty",
//   stock: 50,
//   discount: 20,
//   delivery: "2-3 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Wireless Connectivity",
//     "Ergonomic Design",
//     "Long Battery Life",
//     "Smooth Tracking",
//     "USB Receiver Included"
//   ],

//   specs: [
//     { label: "Connectivity", value: "Wireless" },
//     { label: "Battery", value: "AA Battery" },
//     { label: "DPI", value: "1600 DPI" },
//     { label: "Ergonomic", value: "Yes" },
//     { label: "Warranty", value: "1 Year" }
//   ]
// }
// ,{
//   id: "139",
//   title: "Fiction Story Book",
//   description: "Interesting fiction novel.",
//   price: 399,
//   category: "Books",
//   subCategory: "Fiction",
//   image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
//   rating: 4.5,

//   brand: "Penguin",
//   author: "John Smith",
//   pages: 320,
//   language: "English",
//   warranty: "No Warranty",
//   stock: 100,
//   discount: 10,
//   delivery: "3-5 Days Delivery",
//   replacement: "No Replacement",

//   features: [
//     "Interesting Storyline",
//     "Easy to Read",
//     "Premium Quality Paper",
//     "Best Selling Novel",
//     "English Language"
//   ],

//   specs: [
//     { label: "Author", value: "John Smith" },
//     { label: "Pages", value: "320" },
//     { label: "Language", value: "English" },
//     { label: "Publisher", value: "Penguin" },
//     { label: "Genre", value: "Fiction" }
//   ],
//   variants: []
// },{
//   id: "140",
//   title: "Math Education Book",
//   description: "Helpful education book.",
//   price: 299,
//   category: "Books",
//   subCategory: "Education",
//   image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
//   rating: 4.2,

//   brand: "Oxford",
//   author: "R.D. Sharma",
//   pages: 450,
//   language: "English",
//   warranty: "No Warranty",
//   stock: 80,
//   discount: 12,
//   delivery: "3-5 Days Delivery",
//   replacement: "No Replacement",

//   features: [
//     "Step by Step Solutions",
//     "Practice Problems",
//     "Easy Explanations",
//     "For Students",
//     "English Language"
//   ],

//   specs: [
//     { label: "Author", value: "R.D. Sharma" },
//     { label: "Pages", value: "450" },
//     { label: "Language", value: "English" },
//     { label: "Publisher", value: "Oxford" },
//     { label: "Subject", value: "Mathematics" }
//   ],
//   variants: []
// }
// ,
// {
//   id: "141",
//   title: "Face Wash",
//   description: "Gentle skin care face wash.",
//   price: 249,
//   category: "Beauty",
//   subCategory: "Skin care",
//   image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
//   rating: 4.1,

//   brand: "Himalaya",
//   skinType: "All Skin Types",
//   weight: "100ml",
//   warranty: "No Warranty",
//   stock: 120,
//   discount: 8,
//   delivery: "2-3 Days Delivery",
//   replacement: "No Replacement",

//   features: [
//     "Gentle On Skin",
//     "Deep Cleansing",
//     "Removes Oil & Dirt",
//     "Suitable For All Skin Types",
//     "Daily Use"
//   ],

//   specs: [
//     { label: "Skin Type", value: "All Skin Types" },
//     { label: "Weight", value: "100ml" },
//     { label: "Organic", value: "Yes" },
//     { label: "Usage", value: "Daily" },
//     { label: "Brand", value: "Himalaya" }
//   ],
//   variants: []
// },{
//   id: "142",
//   title: "Lipstick",
//   description: "Long lasting makeup lipstick.",
//   price: 599,
//   category: "Beauty",
//   subCategory: "Makeup",
//   image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
//   rating: 4.4,

//   brand: "Lakme",
//   color: "Red",
//   type: "Matte",
//   weight: "4g",
//   warranty: "No Warranty",
//   stock: 70,
//   discount: 10,
//   delivery: "2-3 Days Delivery",
//   replacement: "No Replacement",

//   features: [
//     "Long Lasting",
//     "Matte Finish",
//     "Smooth Texture",
//     "Highly Pigmented",
//     "Lightweight"
//   ],

//   specs: [
//     { label: "Color", value: "Red" },
//     { label: "Type", value: "Matte" },
//     { label: "Weight", value: "4g" },
//     { label: "Skin Type", value: "All" },
//     { label: "Brand", value: "Lakme" }
//   ],
//   variants: []
// },

//   {
//     id: "141",
//     title: "Face Wash",
//     description: "Gentle skin care face wash for daily use.",
//     price: 249,
//     category: "Beauty",
//     subCategory: "Skin care",
//     image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
//     rating: 4.1,

//     brand: "Himalaya",
//     skinType: "All Skin Types",
//     weight: "100ml",
//     warranty: "No Warranty",
//     stock: 120,
//     discount: 8,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Gentle On Skin",
//       "Deep Cleansing",
//       "Removes Oil & Dirt",
//       "Suitable For All Skin Types",
//       "Daily Use"
//     ],

//     specs: [
//       { label: "Skin Type", value: "All Skin Types" },
//       { label: "Weight", value: "100ml" },
//       { label: "Organic", value: "Yes" },
//       { label: "Usage", value: "Daily" },
//       { label: "Brand", value: "Himalaya" }
//     ],
//     variants: []
//   },
//   {
//     id: "142",
//     title: "Lipstick",
//     description: "Long lasting makeup lipstick with smooth matte finish.",
//     price: 599,
//     category: "Beauty",
//     subCategory: "Makeup",
//     image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
//     rating: 4.4,

//     brand: "Lakme",
//     color: "Red",
//     type: "Matte",
//     weight: "4g",
//     warranty: "No Warranty",
//     stock: 70,
//     discount: 10,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Long Lasting",
//       "Matte Finish",
//       "Smooth Texture",
//       "Highly Pigmented",
//       "Lightweight"
//     ],

//     specs: [
//       { label: "Color", value: "Red" },
//       { label: "Type", value: "Matte" },
//       { label: "Weight", value: "4g" },
//       { label: "Skin Type", value: "All" },
//       { label: "Brand", value: "Lakme" }
//     ],
//     variants: []
//   },
//   {
//     id: "143",
//     title: "Shampoo",
//     description: "Smooth hair care shampoo suitable for all hair types.",
//     price: 349,
//     category: "Beauty",
//     subCategory: "Hair care",
//     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
//     rating: 4.2,

//     brand: "Dove",
//     hairType: "All Hair Types",
//     weight: "340ml",
//     warranty: "No Warranty",
//     stock: 90,
//     discount: 8,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Smooth & Silky Hair",
//       "Daily Use Shampoo",
//       "Suitable For All Hair Types",
//       "Deep Nourishment",
//       "Pleasant Fragrance"
//     ],

//     specs: [
//       { label: "Hair Type", value: "All Hair Types" },
//       { label: "Weight", value: "340ml" },
//       { label: "Organic", value: "No" },
//       { label: "Usage", value: "Daily" },
//       { label: "Brand", value: "Dove" }
//     ],
//     variants: []
//   },
//   {
//     id: "144",
//     title: "Chess Board",
//     description: "Indoor wooden chess board game for 2 players.",
//     price: 699,
//     category: "Sports",
//     subCategory: "Indoor",
//     image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461",
//     rating: 4.3,

//     brand: "Funskool",
//     material: "Wood",
//     players: "2 Players",
//     warranty: "No Warranty",
//     stock: 40,
//     discount: 5,
//     delivery: "3-5 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Wooden Chess Board",
//       "Foldable Board",
//       "Smooth Finish",
//       "Indoor Game",
//       "Portable"
//     ],

//     specs: [
//       { label: "Material", value: "Wood" },
//       { label: "Players", value: "2" },
//       { label: "Board Type", value: "Foldable" },
//       { label: "Portable", value: "Yes" },
//       { label: "Brand", value: "Funskool" }
//     ],
//     variants: []
//   },
//   {
//     id: "145",
//     title: "Football",
//     description: "Durable outdoor football for standard play.",
//     price: 899,
//     category: "Sports",
//     subCategory: "Outdoor",
//     image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
//     rating: 4.5,

//     brand: "Nivia",
//     size: "Size 5",
//     material: "Rubber",
//     warranty: "No Warranty",
//     stock: 60,
//     discount: 10,
//     delivery: "3-5 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Durable Material",
//       "Perfect For Outdoor",
//       "Standard Size 5",
//       "Good Grip",
//       "Lightweight"
//     ],

//     specs: [
//       { label: "Size", value: "5" },
//       { label: "Material", value: "Rubber" },
//       { label: "Water Resistant", value: "Yes" },
//       { label: "Use", value: "Outdoor" },
//       { label: "Brand", value: "Nivia" }
//     ],
//     variants: []
//   },
//   {
//     id: "146",
//     title: "Dumbbells",
//     description: "10kg gym dumbbells set for home and gym use.",
//     price: 1999,
//     category: "Sports",
//     subCategory: "Gym",
//     image: "https://imaes.unsplash.com/photo-1599058917765-a780eda07a3e",
//     rating: 4.6,

//     brand: "Protoner",
//     weightSet: "10kg Set",
//     material: "Cast Iron",
//     warranty: "6 Months Warranty",
//     stock: 30,
//     discount: 12,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "10kg Dumbbell Set",
//       "Cast Iron Material",
//       "Non-slip Grip",
//       "Gym & Home Use",
//       "Durable"
//     ],

//     specs: [
//       { label: "Weight", value: "10kg" },
//       { label: "Material", value: "Cast Iron" },
//       { label: "Grip", value: "Non-slip" },
//       { label: "Use", value: "Gym/Home" },
//       { label: "Warranty", value: "6 Months" }
//     ],
//     variants: []
//   },
//   {
//     id: "147",
//     title: "Table Lamp",
//     description: "Decorative LED table lamp with energy-saving design.",
//     price: 1299,
//     category: "Home",
//     subCategory: "Lighting",
//     image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
//     rating: 4.2,

//     brand: "Philips",
//     material: "Metal & Plastic",
//     bulbType: "LED",
//     warranty: "1 Year Warranty",
//     stock: 45,
//     discount: 10,
//     delivery: "2-4 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "LED Light",
//       "Modern Design",
//       "Energy Saving",
//       "Long Lasting",
//       "Table Decor Lamp"
//     ],

//     specs: [
//       { label: "Bulb Type", value: "LED" },
//       { label: "Material", value: "Metal & Plastic" },
//       { label: "Power", value: "10W" },
//       { label: "Energy Saving", value: "Yes" },
//       { label: "Warranty", value: "1 Year" }
//     ],
//     variants: []
//   }
//   ,
//   {
//     id: "143",
//     title: "Shampoo",
//     description: "Smooth hair care shampoo.",
//     price: 349,
//     category: "Beauty",
//     subCategory: "Hair care",
//     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
//     rating: 4.2,

//     brand: "Dove",
//     hairType: "All Hair Types",
//     weight: "340ml",
//     warranty: "No Warranty",
//     stock: 90,
//     discount: 8,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Smooth & Silky Hair",
//       "Daily Use Shampoo",
//       "Suitable For All Hair Types",
//       "Deep Nourishment",
//       "Pleasant Fragrance"
//     ],

//     specs: [
//       { label: "Hair Type", value: "All Hair Types" },
//       { label: "Weight", value: "340ml" },
//       { label: "Organic", value: "No" },
//       { label: "Usage", value: "Daily" },
//       { label: "Brand", value: "Dove" }
//     ],
//     variants: []
//   },{
//     id: "144",
//     title: "Chess Board",
//     description: "Indoor chess board game.",
//     price: 699,
//     category: "Sports",
//     subCategory: "Indoor",
//     image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461",
//     rating: 4.3,

//     brand: "Funskool",
//     // material: "Wood",
//     players: "2 Players",
//     warranty: "No Warranty",
//     stock: 40,
//     discount: 5,
//     delivery: "3-5 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Wooden Chess Board",
//       "Foldable Board",
//       "Smooth Finish",
//       "Indoor Game",
//       "Portable"
//     ],

//     specs: [
//       { label: "Material", value: "Wood" },
//       { label: "Players", value: "2" },
//       { label: "Board Type", value: "Foldable" },
//       { label: "Portable", value: "Yes" },
//       { label: "Brand", value: "Funskool" }
//     ],
//     variants: []
//   },{
//     id: "145",
//     title: "Football",
//     description: "Outdoor football.",
//     price: 899,
//     category: "Sports",
//     subCategory: "Outdoor",
//     image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
//     rating: 4.5,

//     brand: "Nivia",
//     size: "Size 5",
//     // material: "Rubber",
//     warranty: "No Warranty",
//     stock: 60,
//     discount: 10,
//     delivery: "3-5 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Durable Material",
//       "Perfect For Outdoor",
//       "Standard Size 5",
//       "Good Grip",
//       "Lightweight"
//     ],

//     specs: [
//       { label: "Size", value: "5" },
//       { label: "Material", value: "Rubber" },
//       { label: "Water Resistant", value: "Yes" },
//       { label: "Use", value: "Outdoor" },
//       { label: "Brand", value: "Nivia" }
//     ],
//     variants: []
//   },{
//     id: "146",
//     title: "Dumbbells",
//     description: "Gym dumbbells set.",
//     price: 1999,
//     category: "Sports",
//     subCategory: "Gym",
//     image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
//     rating: 4.6,

//     brand: "Protoner",
//     weightSet: "10kg Set",
//     // material: "Cast Iron",
//     warranty: "6 Months Warranty",
//     stock: 30,
//     discount: 12,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "10kg Dumbbell Set",
//       "Cast Iron Material",
//       "Non-slip Grip",
//       "Gym & Home Use",
//       "Durable"
//     ],

//     specs: [
//       { label: "Weight", value: "10kg" },
//       { label: "Material", value: "Cast Iron" },
//       { label: "Grip", value: "Non-slip" },
//       { label: "Use", value: "Gym/Home" },
//       { label: "Warranty", value: "6 Months" }
//     ],
//     variants: []
//   },{
//     id: "147",
//     title: "Table Lamp",
//     description: "Decorative lighting lamp.",
//     price: 1299,
//     category: "Home",
//     subCategory: "Lighting",
//     image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
//     rating: 4.2,

//     brand: "Philips",
//     // material: "Metal & Plastic",
//     bulbType: "LED",
//     warranty: "1 Year Warranty",
//     stock: 45,
//     discount: 10,
//     delivery: "2-4 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "LED Light",
//       "Modern Design",
//       "Energy Saving",
//       "Long Lasting",
//       "Table Decor Lamp"
//     ],

//     specs: [
//       { label: "Bulb Type", value: "LED" },
//       { label: "Material", value: "Metal & Plastic" },
//       { label: "Power", value: "10W" },
//       { label: "Energy Saving", value: "Yes" },
//       { label: "Warranty", value: "1 Year" }
//     ],
//     variants: []
//   },{
//     id: "148",
//     title: "Wall Decor",
//     description: "Beautiful wall decor item.",
//     price: 999,
//     category: "Home",
//     subCategory: "Decor",
//     image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
//     rating: 4.3,

//     brand: "Home Centre",
//     // material: "Wood & Metal",
//     warranty: "No Warranty",
//     stock: 35,
//     discount: 10,
//     delivery: "3-5 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Modern Design",
//       "Wall Mounted",
//       "Premium Finish",
//       "Lightweight",
//       "Living Room Decor"
//     ],

//     specs: [
//       { label: "Material", value: "Wood & Metal" },
//       { label: "Mount Type", value: "Wall" },
//       { label: "Style", value: "Modern" },
//       { label: "Weight", value: "500g" },
//       { label: "Brand", value: "Home Centre" }
//     ],
//     variants: []
//   },{
//     id: "149",
//     title: "Storage Box",
//     description: "Home storage box.",
//     price: 599,
//     category: "Home",
//     subCategory: "Storage",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
//     rating: 4.1,

//     brand: "Nilkamal",
//     // material: "Plastic",
//     capacity: "30 Litres",
//     warranty: "6 Months Warranty",
//     stock: 50,
//     discount: 8,
//     delivery: "2-4 Days Delivery",
//     replacement: "5 Days Replacement",

//     features: [
//       "Large Storage Capacity",
//       "Durable Plastic",
//       "Stackable",
//       "Lightweight",
//       "Multipurpose Use"
//     ],

//     specs: [
//       { label: "Material", value: "Plastic" },
//       { label: "Capacity", value: "30 Litres" },
//       { label: "Stackable", value: "Yes" },
//       { label: "Weight", value: "900g" },
//       { label: "Warranty", value: "6 Months" }
//     ],
//     variants: []
//   },{
//     id: "150",
//     title: "Acoustic Guitar",
//     description: "6-string acoustic guitar.",
//     price: 4999,
//     category: "Instrument",
//     subCategory: "Guitar",
//     image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
//     rating: 4.5,

//     brand: "Yamaha",
//     strings: "6 Strings",
//     // material: "Wood",
//     warranty: "1 Year Warranty",
//     stock: 20,
//     discount: 10,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "6 Steel Strings",
//       "Rich Sound Quality",
//       "Wooden Body",
//       "Beginner Friendly",
//       "Lightweight"
//     ],

//     specs: [
//       { label: "Strings", value: "6" },
//       { label: "Material", value: "Wood" },
//       { label: "Type", value: "Acoustic" },
//       { label: "Weight", value: "2kg" },
//       { label: "Warranty", value: "1 Year" }
//     ],
//     variants: []
//   },{
//     id: "151",
//     title: "Keyboard Piano",
//     description: "Electronic keyboard piano.",
//     price: 6999,
//     category: "Instrument",
//     subCategory: "Keyboard",
//     image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a",
//     rating: 4.4,

//     brand: "Casio",
//     // keys: "61 Keys",
//     power: "Electric",
//     warranty: "1 Year Warranty",
//     stock: 18,
//     discount: 12,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "61 Keys Keyboard",
//       "Multiple Tones",
//       "Recording Feature",
//       "Built-in Speakers",
//       "Beginner Friendly"
//     ],

//     specs: [
//       { label: "Keys", value: "61" },
//       { label: "Power", value: "Electric" },
//       { label: "Speaker", value: "Built-in" },
//       { label: "Recording", value: "Yes" },
//       { label: "Warranty", value: "1 Year" }
//     ],
//     variants: []
//   },{
//     id: "152",
//     title: "Drum Set",
//     description: "Full drum set.",
//     price: 12000,
//     category: "Instrument",
//     subCategory: "Drums",
//     image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7",
//     rating: 4.6,

//     brand: "Kadence",
//     pieces: 5,
//     // material: "Wood & Metal",
//     warranty: "1 Year Warranty",
//     stock: 10,
//     discount: 15,
//     delivery: "5-7 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "5 Piece Drum Set",
//       "Strong Build Quality",
//       "Deep Bass Sound",
//       "Beginner & Professional Use",
//       "Adjustable Stand"
//     ],

//     specs: [
//       { label: "Pieces", value: "5" },
//       { label: "Material", value: "Wood & Metal" },
//       { label: "Bass Drum", value: "Yes" },
//       { label: "Stand", value: "Adjustable" },
//       { label: "Warranty", value: "1 Year" }
//     ],
//     variants: []
//   },{
//     id: "153",
//     title: "Water Bottle",
//     description: "Durable and reusable water bottle.",
//     price: 299,
//     category: "Home",
//     subCategory: "Storage",
//     image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba",
//     rating: 4.3,

//     brand: "Milton",
//     // material: "Steel",
//     capacity: "1 Litre",
//     warranty: "6 Months Warranty",
//     stock: 100,
//     discount: 5,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "1 Litre Capacity",
//       "Leak Proof",
//       "Durable Steel",
//       "Reusable Bottle",
//       "Travel Friendly"
//     ],

//     specs: [
//       { label: "Material", value: "Steel" },
//       { label: "Capacity", value: "1 Litre" },
//       { label: "Leak Proof", value: "Yes" },
//       { label: "Reusable", value: "Yes" },
//       { label: "Warranty", value: "6 Months" }
//     ],
//     variants: []
//   },{
//     id: "154",
//     title: "Coffee",
//     description: "Authentic coffee.",
//     price: 499,
//     category: "Food",
//     subCategory: "Beverages",
//     image: "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db",
//     rating: 4.5,

//     brand: "Nescafe",
//     weight: "200g",
//     type: "Instant Coffee",
//     flavor: "Classic",
//     stock: 120,
//     discount: 5,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Rich Aroma",
//       "Instant Coffee",
//       "Strong Taste",
//       "Premium Beans",
//       "Easy to Prepare"
//     ],

//     specs: [
//       { label: "Weight", value: "200g" },
//       { label: "Type", value: "Instant" },
//       { label: "Flavor", value: "Classic" },
//       { label: "Shelf Life", value: "12 Months" },
//       { label: "Brand", value: "Nescafe" }
//     ],
//     variants: []
//   },{
//     id: "155",
//     title: "Cookies",
//     description: "Delicious chocolate cookies.",
//     price: 199,
//     category: "Food",
//     subCategory: "Snacks",
//     image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
//     rating: 4.4,

//     brand: "Oreo",
//     weight: "300g",
//     flavor: "Chocolate",
//     stock: 150,
//     discount: 5,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Chocolate Flavor",
//       "Crunchy Cookies",
//       "Kids Favorite",
//       "Ready to Eat",
//       "Premium Quality"
//     ],

//     specs: [
//       { label: "Weight", value: "300g" },
//       { label: "Flavor", value: "Chocolate" },
//       { label: "Type", value: "Cookies" },
//       { label: "Shelf Life", value: "6 Months" },
//       { label: "Brand", value: "Oreo" }
//     ],
//     variants: []
//   },{
//     id: "156",
//     title: "Yoga Mat",
//     description: "Comfortable yoga mat for exercise.",
//     price: 999,
//     category: "Health",
//     subCategory: "Fitness",
//     image: "https://images.unsplash.com/photo-1591291621164-2c6367723315",
//     rating: 4.6,

//     brand: "Boldfit",
//     material: ["EVA Foam"],
//     thickness: "6mm",
//     warranty: "6 Months Warranty",
//     stock: 60,
//     discount: 10,
//     delivery: "3-5 Days Delivery",
//     replacement: "7 Days Replacement",

//     features: [
//       "Anti-slip Surface",
//       "6mm Thick Mat",
//       "Lightweight",
//       "Easy to Carry",
//       "Workout & Yoga Use"
//     ],

//     specs: [
//       { label: "Material", value: "EVA Foam" },
//       { label: "Thickness", value: "6mm" },
//       { label: "Anti-slip", value: "Yes" },
//       { label: "Washable", value: "Yes" },
//       { label: "Warranty", value: "6 Months" }
//     ],
//     variants: []
//   },{
//   id: "157",
//   title: "Wooden Study Table",
//   description: "Spacious wooden study table for home and office use.",
//   price: 4599,
//   category: "Furniture",
//   subCategory: "Table",
//   rating: 4.3,
//   image: "https://images.unsplash.com/photo-1592078615290-033ee584e267",

//   brand: "IKEA",
//   material: ["Engineered Wood"],
//   warranty: "1 Year Warranty",
//   stock: 20,
//   discount: 12,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Spacious Table Top",
//     "Strong Wooden Build",
//     "Modern Design",
//     "Study & Office Use",
//     "Easy Assembly"
//   ],

//   specs: [
//     { label: "Material", value: "Engineered Wood" },
//     { label: "Width", value: "120 cm" },
//     { label: "Height", value: "75 cm" },
//     { label: "Drawers", value: "Yes" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "158",
//   title: "Office Chair",
//   description: "Ergonomic office chair with lumbar support.",
//   price: 3299,
//   category: "Furniture",
//   subCategory: "Chair",
//   rating: 4.2,
//   image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],

//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "159",
//   title: "Queen Size Bed",
//   description: "Comfortable queen size wooden bed.",
//   price: 12499,
//   category: "Furniture",
//   subCategory: "Bed",
//   rating: 4.5,
//   image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
//   brand: "IKEA",
//   material: "Wood",
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ], specs: [
//     { label: "Material", value: "Wood" },
//     { label: "Size", value: "Queen/King/Single" },
//     { label: "Storage", value: "Yes/No" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "160",
//   title: "King Size Bed",
//   description: "Luxury king size bed for master bedroom.",
//   price: 18999,
//   category: "Furniture",
//   subCategory: "Bed",
//   rating: 4.6,
//   image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
//   brand: "IKEA",
//   material: "Wood",
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ], specs: [
//     { label: "Material", value: "Wood" },
//     { label: "Size", value: "Queen/King/Single" },
//     { label: "Storage", value: "Yes/No" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "161",
//   title: "Coffee Table",
//   description: "Modern coffee table for living room.",
//   price: 2499,
//   category: "Furniture",
//   subCategory: "Table",
//   rating: 4.1,
//   image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
//   brand: "IKEA",
//   material: "Wood",
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "162",
//   title: "Bedside Table",
//   description: "Compact bedside table with drawer.",
//   price: 1999,
//   category: "Furniture",
//   subCategory: "Table",
//   rating: 4.0,
//   image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "163",
//   title: "Dining Table",
//   description: "4-seater wooden dining table.",
//   price: 8999,
//   category: "Furniture",
//   subCategory: "Table",
//   rating: 4.4,
//   image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "164",
//   title: "Study Chair",
//   description: "Comfortable chair for study and work.",
//   price: 2199,
//   category: "Furniture",
//   subCategory: "Chair",
//   rating: 4.1,
//   image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "165",
//   title: "Recliner Chair",
//   description: "Luxury recliner chair for relaxation.",
//   price: 8999,
//   category: "Furniture",
//   subCategory: "Chair",
//   rating: 4.7,
//   image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "166",
//   title: "Gaming Chair",
//   description: "Ergonomic gaming chair with headrest.",
//   price: 7499,
//   category: "Furniture",
//   subCategory: "Chair",
//   rating: 4.6,
//   image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "167",
//   title: "Single Bed",
//   description: "Single bed for kids room.",
//   price: 7999,
//   category: "Furniture",
//   subCategory: "Bed",
//   rating: 4.2,
//   image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",

//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood" },
//     { label: "Size", value: "Queen/King/Single" },
//     { label: "Storage", value: "Yes/No" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },

//   {
//     id: "141",
//     title: "Face Wash",
//     description: "Gentle skin care face wash for daily use.",
//     price: 249,
//     category: "Beauty",
//     subCategory: "Skin care",
//     image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
//     rating: 4.1,

//     brand: "Himalaya",
//     skinType: "All Skin Types",
//     weight: "100ml",
//     warranty: "No Warranty",
//     stock: 120,
//     discount: 8,
//     delivery: "2-3 Days Delivery",
//     replacement: "No Replacement",

//     features: [
//       "Gentle On Skin",
//       "Deep Cleansing",
//       "Removes Oil & Dirt",
//       "Suitable For All Skin Types",
//       "Daily Use"
//     ],

//     specs: [
//       { label: "Skin Type", value: "All Skin Types" },
//       { label: "Weight", value: "100ml" },
//       { label: "Organic", value: "Yes" },
//       { label: "Usage", value: "Daily" },
//       { label: "Brand", value: "Himalaya" }
//     ],

//     // Variants (required field)
//     variants: [
//       {
//         size: "100ml",
//         price: 249,
//         image: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
//       },
//       {
//         size: "200ml",
//         price: 399,
//         image: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
//       }
//     ]
//   }
// ,
// {
//   id: "168",
//   title: "Wooden Table",
//   description: "Multipurpose wooden table.",
//   price: 3499,
//   category: "Furniture",
//   subCategory: "Table",
//   rating: 4.3,
//   image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "169",
//   title: " Black Arm Chair",
//   description: "Comfortable arm chair for living room.",
//   price: 5599,
//   category: "Furniture",
//   subCategory: "Chair",
//   rating: 4.4,
//   image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood/Metal" },
//     { label: "Weight Capacity", value: "120kg" },
//     { label: "Assembly", value: "Required" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// },
// {
//   id: "170",
//   title: "Bunk Bed",
//   description: "Space saving bunk bed for kids.",
//   price: 15999,
//   category: "Furniture",
//   subCategory: "Bed",
//   rating: 4.5,
//   image: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
//   brand: "IKEA",
//   material: ["Wood", "Metal", "Fabric"],
//   warranty: "1 Year Warranty",
//   stock: 15 - 40,
//   discount: 10 - 18,
//   delivery: "5-7 Days Delivery",
//   replacement: "7 Days Replacement",

//   features: [
//     "Premium Build Quality",
//     "Modern Design",
//     "Durable Material",
//     "Easy Assembly",
//     "Home & Office Use"
//   ],

//   specs: [
//     { label: "Material", value: "Wood" },
//     { label: "Size", value: "Queen/King/Single" },
//     { label: "Storage", value: "Yes/No" },
//     { label: "Finish", value: "Matte" },
//     { label: "Warranty", value: "1 Year" }
//   ],
//   variants: []
// }
// ,{
//   id: "171",
//   title: "Arm Chair",
//   description: "Comfortable arm chair for living room.",
//   price: 5599,
//   category: "Furniture",
//   subCategory: "Chair",
//   rating: 4.4,
//   image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",

//   features: [
//     "Ergonomic Design",
//     "Premium Cushion",
//     "Solid Wood Frame",
//     "5 Years Warranty",
//     "Free Installation",
//     "10 Days Replacement"
//   ],
//   variants: []
// },
]
