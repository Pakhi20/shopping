"use client"

import { useEffect, useState } from "react"
import { products } from "@/data/products"
import { Product } from "@/types/product"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { DeleteIcon, Heart, ShoppingBasketIcon } from "lucide-react"

export default function WishlistPage() {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])
  const { addToCart } = useCart()
  const router = useRouter()

  const loadWishlist = () => {
    const wishlist = localStorage.getItem("wishlist")
    if (wishlist) {
      const ids = JSON.parse(wishlist)
      const filtered = products.filter((p) => ids.includes(p.id))
      setWishlistProducts(filtered)
    } else {
      setWishlistProducts([])
    }
  }

  useEffect(() => {
    loadWishlist()

    // Navbar sync
    window.addEventListener("wishlistUpdated", loadWishlist)

    return () => {
      window.removeEventListener("wishlistUpdated", loadWishlist)
    }
  }, [])

  // Remove from wishlist
  const removeFromWishlist = (id: string) => {
    const wishlist = localStorage.getItem("wishlist")
    if (!wishlist) return

    const updated = JSON.parse(wishlist).filter((item: string) => item !== id)
    localStorage.setItem("wishlist", JSON.stringify(updated))

    setWishlistProducts((prev) => prev.filter((p) => p.id !== id))

    // Update navbar count
    window.dispatchEvent(new Event("wishlistUpdated"))
  }

  // Move to cart
  const moveToCart = (product: Product) => {
    addToCart(product)
    removeFromWishlist(product.id)

    // Update navbar cart + wishlist
    window.dispatchEvent(new Event("wishlistUpdated"))

    router.push("/cart")
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {wishlistProducts.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-blue-600 font-bold">₹{product.price}</p>

              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => moveToCart(product)}
                  
                   className="flex flex-1 mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg transition items-center justify-center gap-2"
                >
                  <ShoppingBasketIcon size={18} />
                 <span>Move to Cart</span> 
                </button>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  
                  className="flex flex-1 mt-6 w-full bg-red-500 text-white py-3 rounded-xl font-semibold text-lg transition items-center justify-center gap-2"
                >
                  <DeleteIcon size ={18}/>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
















































































// "use client"

// import { useEffect, useState } from "react"
// import { products } from "@/data/products"
// import { Product } from "@/types/product"
// import Image from "next/image"
// import { useCart } from "@/context/CartContext"

// export default function WishlistPage() {
//   const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])
//   const { addToCart } = useCart()

//   useEffect(() => {
//     const wishlist = localStorage.getItem("wishlist")
//     if (wishlist) {
//       const ids = JSON.parse(wishlist)
//       const filtered = products.filter((p) => ids.includes(p.id))
//       setWishlistProducts(filtered)
//     }
//   }, [])

//   // Remove from wishlist
//   const removeFromWishlist = (id: string) => {
//     const wishlist = localStorage.getItem("wishlist")
//     if (!wishlist) return

//     const updated = JSON.parse(wishlist).filter((item: string) => item !== id)
//     localStorage.setItem("wishlist", JSON.stringify(updated))

//     setWishlistProducts((prev) => prev.filter((p) => p.id !== id))
//   }

//   // Move to cart
//   const moveToCart = (product: Product) => {
//     addToCart(product)
//     removeFromWishlist(product.id)
//   }

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

//       {wishlistProducts.length === 0 ? (
//         <p>No items in wishlist</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {wishlistProducts.map((product) => (
//             <div key={product.id} className="bg-white p-4 rounded-xl shadow">
//               <div className="relative w-full h-48 mb-4">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <h2 className="font-semibold">{product.title}</h2>
//               <p className="text-blue-600 font-bold">₹{product.price}</p>

//               <div className="flex gap-3 mt-3">
//                 <button
//                   onClick={() => moveToCart(product)}
//                   className="flex-1 bg-green-600 text-white py-2 rounded"
//                 >
//                   Move to Cart
//                 </button>

//                 <button
//                   onClick={() => removeFromWishlist(product.id)}
//                   className="flex-1 bg-red-500 text-white py-2 rounded"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }











// "use client"

// import { useEffect, useState } from "react"
// import { products } from "@/data/products"
// import { Product } from "@/types/product"
// import { useRouter } from "next/navigation"

// export default function WishlistPage() {

//   const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])
//   const router = useRouter()

//   useEffect(() => {
//     const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     const filtered = products.filter(p => wishlistIds.includes(p.id))
//     setWishlistProducts(filtered)
//   }, [])

//   const removeFromWishlist = (id: string) => {
//     const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     const updated = wishlistIds.filter((pid: string) => pid !== id)
//     localStorage.setItem("wishlist", JSON.stringify(updated))

//     setWishlistProducts(prev => prev.filter(p => p.id !== id))
//   }

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

//       {wishlistProducts.length === 0 ? (
//         <p>No items in wishlist</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-6">
//           {wishlistProducts.map(product => (
//             <div key={product.id} className="bg-white p-4 shadow rounded">
//               <img src={product.image} className="h-40 w-full object-contain"/>
//               <h2 className="font-semibold mt-2">{product.title}</h2>
//               <p className="text-green-600 font-bold">₹{product.price}</p>

//               <button
//                 onClick={() => removeFromWishlist(product.id)}
//                 className="mt-2 text-red-500"
//               >
//                 Remove
//               </button>

//               <button
//                 onClick={() => router.push("/cart")}
//                 className="w-full mt-2 bg-green-600 text-white py-2 rounded"
//               >
//                 Move to Cart
//               </button>

//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }







