"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import NavDropdown, { DropdownItem } from "./NavDropdown"
import MobileMenu from "./MobileMenu"
import ProfileMenu from "@/components/ProfileMenu"
import { Heart } from "lucide-react"
import { useWishlist } from "@/context/WishlistContext"

export default function Navbar() {
  const { cart } = useCart()
  const router = useRouter()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)

  // Update Navbar (Login + Wishlist)
  useEffect(() => {
    const updateNavbar = () => {
      // Wishlist count
      const wishlist = localStorage.getItem("wishlist")
      setWishlistCount(wishlist ? JSON.parse(wishlist).length : 0)

      // Login status
      const loginStatus =
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn")

      setIsLoggedIn(loginStatus === "true")
    }

    updateNavbar()

    // Listen events
    window.addEventListener("storage", updateNavbar)
    window.addEventListener("wishlistUpdated", updateNavbar)
    window.addEventListener("loginUpdated", updateNavbar)
    window.addEventListener("cartUpdated", updateNavbar)

    return () => {
      window.removeEventListener("storage", updateNavbar)
      window.removeEventListener("wishlistUpdated", updateNavbar)
      window.removeEventListener("loginUpdated", updateNavbar)
      window.removeEventListener("cartUpdated", updateNavbar)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    sessionStorage.removeItem("isLoggedIn")

    window.dispatchEvent(new Event("loginUpdated"))

    setIsLoggedIn(false)
    router.push("/login")
  }

  const productMenu: DropdownItem[] = [
    { label: "Fashion", href: "/products/fashion", children: false },
    { label: "Sports", href: "/products/sports", children: false },
    { label: "Electronics", href: "/products/electronics", children: false },
    { label: "Decor", href: "/products/home", children: false },
    { label: "Toys", href: "/products/toys", children: false },
    { label: "Health", href: "/products/health", children: false },
    { label: "Beauty", href: "/products/beauty", children: false },
    { label: "Books", href: "/products/books", children: false },
    { label: "Furniture", href: "/products/furniture", children: false },
    { label: "Kitchen", href: "/products/kitchen", children: false },
    { label: "Instrument", href: "/products/instrument", children: false },
  ]

  return (
    <nav className="bg-blue-600 text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold">
         Pakhi's 
        </Link>

        <div className="flex items-center gap-6 md:gap-8 relative">
          
          <Link href="/" className="font-medium hover:text-yellow-300">
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <span className="font-medium hover:text-yellow-300 cursor-pointer">
              Products
            </span>
            <NavDropdown items={productMenu} />
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative font-medium hover:text-yellow-300">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <Link href="/contact" className="font-medium hover:text-yellow-300">
            Contact
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist" className="relative">
            <Heart size={26} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Login / Profile / Logout */}
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium"
            >
              Login
            </Link>
          ) : (
            <>
              <ProfileMenu />
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {mobileOpen && <MobileMenu items={productMenu} />}
    </nav>
  )
}







































// "use client"

// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { useCart } from "@/context/CartContext"
// import NavDropdown, { DropdownItem } from "./NavDropdown"
// import MobileMenu from "./MobileMenu"
// import ProfileMenu from "@/components/ProfileMenu"
// import { Heart } from "lucide-react"

// export default function Navbar() {
//   const { cart } = useCart()
//   const router = useRouter()

//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [wishlistCount, setWishlistCount] = useState(0)
//   useEffect(() => {
//   const updateWishlistCount = () => {
//     const wishlist = localStorage.getItem("wishlist")
//     if (wishlist) {
//       setWishlistCount(JSON.parse(wishlist).length)
//     } else {
//       setWishlistCount(0)
//     }
//   }

//   updateWishlistCount()

//   window.addEventListener("storage", updateWishlistCount)

//   return () => {
//     window.removeEventListener("storage", updateWishlistCount)
//   }
// }, [])














// useEffect(() => {
//   const updateNavbar = () => {
//     const wishlist = localStorage.getItem("wishlist")
//     setWishlistCount(wishlist ? JSON.parse(wishlist).length : 0)

//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn")

//     setIsLoggedIn(loginStatus === "true")
//   }

//   updateNavbar()

//   // Important events
//   window.addEventListener("storage", updateNavbar)
//   window.addEventListener("wishlistUpdated", updateNavbar)
//   window.addEventListener("loginUpdated", updateNavbar)
//   window.addEventListener("cartUpdated", updateNavbar)

//   return () => {
//     window.removeEventListener("storage", updateNavbar)
//     window.removeEventListener("wishlistUpdated", updateNavbar)
//     window.removeEventListener("loginUpdated", updateNavbar)
//     window.removeEventListener("cartUpdated", updateNavbar)
//   }
// }, [])









//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn")
//     sessionStorage.removeItem("isLoggedIn")
//     setIsLoggedIn(false)
//     router.push("/login")
//   }

//   const productMenu: DropdownItem[] = [
//     { label: "Fashion", href: "/products/fashion", children: false },
//     { label: "Sports", href: "/products/sports", children: false },
//     { label: "Electronics", href: "/products/electronics", children: false },
//     { label: "Decor", href: "/products/home", children: false },
//     { label: "Toys", href: "/products/toys", children: false },
//     { label: "Health", href: "/products/health", children: false },
//     { label: "Beauty", href: "/products/beauty", children: false },
//     { label: "Books", href: "/products/books", children: false },
//     { label: "Furniture", href: "/products/furniture", children: false },
//     { label: "Kitchen", href: "/products/kitchen", children: false },
//     { label: "Instrument", href: "/products/instrument", children: false },
//   ]

//   return (
//     <nav className="bg-blue-600 text-white relative">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         <Link href="/" className="text-2xl font-bold">
//           Flipkart
//         </Link>

//         <div className="flex items-center gap-6 md:gap-8 relative">
          
//           <Link href="/" className="font-medium hover:text-yellow-300">
//             Home
//           </Link>

//           {/* Products Dropdown */}
//           <div className="relative group">
//             <span className="font-medium hover:text-yellow-300 cursor-pointer">
//               Products
//             </span>
//             <NavDropdown items={productMenu} />
//           </div>

//           {/* Cart */}
//           <Link href="/cart" className="relative font-medium hover:text-yellow-300">
//             Cart
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </Link>

//           <Link href="/contact" className="font-medium hover:text-yellow-300">
//             Contact
//           </Link>
//           <Link href="/wishlist" className="relative">
//   <Heart size={26} />
//   {wishlistCount > 0 && (
//     <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//       {wishlistCount}
//     </span>
//   )}
// </Link>

//           {/* Login / Profile / Logout */}
//           {!isLoggedIn ? (
//             <Link
//               href="/login"
//               className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium"
//             >
//               Login
//             </Link>
//           ) : (
//             <>
//               <ProfileMenu />
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-xl"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {mobileOpen && <MobileMenu items={productMenu} />}
//     </nav>
//   )
// }









































// "use client"

// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { useCart } from "@/context/CartContext"
// import NavDropdown, { DropdownItem } from "./NavDropdown"
// import MobileMenu from "./MobileMenu"
// import { User } from "lucide-react"
// import ProfileMenu from "@/components/ProfileMenu"

// export default function Navbar() {

//   const { cart } = useCart()
//   const router = useRouter()

//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   useEffect(() => {

//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn")

//     if (loginStatus === "true") {
//       setIsLoggedIn(true)
//     }

//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn")
//     sessionStorage.removeItem("isLoggedIn")
//     setIsLoggedIn(false)
//     router.push("/login")
//     router.push("/profile")
//   }

//   const productMenu: DropdownItem[] = [
//     {
//       label: "Fashion",
//       href: "/products/fashion",
//       children: false
//     },
//     {
//       label: "Sports",
//       href: "/products/sports",
//       children: false
//     },
//     {
//       label: "Electronics",
//       href: "/products/electronics",
//       children: false
//     },
    

//   { label: "Decor", href: "/products/home", children: false },
//   { label: "Toys", href: "/products/toys", children: false },
//   { label: "Health", href: "/products/health", children: false },
//   { label: "Beauty", href: "/products/beauty", children: false },
//   { label: "Books", href: "/products/books", children: false },
//   { label: "Furniture", href: "/products/furniture", children: false },
//   { label: "Kitchen", href: "/products/kitchen", children: false },
//   { label: "Instrument", href: "/products/instrument", children: false },
  
  
  

//   ]
// return (
//   <nav className="bg-blue-600 text-white relative">

//     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//       <Link href="/" className="text-2xl font-bold">
//         Flipkart
//       </Link>

//       <div className="flex items-center gap-6 md:gap-8 relative">

      
//         <Link href="/" className="font-medium hover:text-yellow-300">
//           Home
//         </Link>

   
//         <div className="relative group">
//           <span className="font-medium hover:text-yellow-300 cursor-pointer">
//             Products
//           </span>

//           <NavDropdown items={productMenu} />
//         </div>

//         <Link href="/cart" className="relative font-medium hover:text-yellow-300">
//           Cart

//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
//               {cart.length}
//             </span>
//           )}
//         </Link>

// {/*      
//         <Link href="/contact" className="font-medium hover:text-yellow-300">
//           Contact
//         </Link>

//        <Link
//   href="/profile"
//   className="font-medium hover:text-yellow-300 flex items-center gap-1"
// >
//   <User size={20} /> */}
// {/* </Link> */}
// <Link href="/contact" className="font-medium hover:text-yellow-300">
//   Contact
// </Link>

// <ProfileMenu />
//         {isLoggedIn && (
//           <button
//             onClick={handleLogout}
//             className="font-medium hover:text-yellow-300"
//           >
//             Logout
//           </button>
//         )}

//       </div>

//       {/* <button
//         className="md:hidden text-xl"
//         onClick={() => setMobileOpen(!mobileOpen)}
//       >
//         ☰
//       </button> */}
//       {/* {isLoggedIn && (
//   <button
//     onClick={handleLogout}
//     className="font-medium hover:text-yellow-300 flex items-center gap-2"
//   >
//      <User size={18} /> Admin
//   </button>
// )} */}

//     </div>

//     {mobileOpen && <MobileMenu items={productMenu} />}

//   </nav>
// )
//   // return (
//   //   <nav className="bg-blue-600 text-white relative">

//   //     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//   //       <Link href="/" className="text-2xl font-bold">
//   //         Flipkart
//   //       </Link>

//   //       <div className="hidden md:flex items-center gap-8 relative">

//   //         {isLoggedIn && (
//   //           <Link href="/" className="font-medium hover:text-yellow-300">
//   //             Home
//   //           </Link>
//   //         )}

//   //         {/* {!isLoggedIn && (
//   //           <>
//   //             <Link href="/login" className="font-medium hover:text-yellow-300">
//   //               Sign In
//   //             </Link>

//   //             <Link href="/signup" className="font-medium hover:text-yellow-300">
//   //               Sign Up
//   //             </Link>
//   //           </>
//   //         )} */}

//   //         {isLoggedIn && (
//   //           <div className="relative group">
//   //             <span className="font-medium hover:text-yellow-300 cursor-pointer">
//   //               Products
//   //             </span>

//   //             <NavDropdown items={productMenu} />
//   //           </div>
//   //         )}

//   //         {isLoggedIn && (
//   //           <Link href="/cart" className="relative font-medium hover:text-yellow-300">
//   //             Cart

//   //             {cart.length > 0 && (
//   //               <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
//   //                 {cart.length}
//   //               </span>
//   //             )}
//   //           </Link>
//   //         )}

//   //         {isLoggedIn && (
//   //           <Link href="/contact" className="font-medium hover:text-yellow-300">
//   //             Contact
//   //           </Link>
//   //         )}

//   //         {isLoggedIn && (
//   //           <button
//   //             onClick={handleLogout}
//   //             className="font-medium hover:text-yellow-300"
//   //           >
//   //             Logout
//   //           </button>
//   //         )}

//   //       </div>

//   //       <button
//   //         className="md:hidden text-xl"
//   //         onClick={() => setMobileOpen(!mobileOpen)}
//   //       >
//   //         ☰
//   //       </button>

//   //     </div>

//   //     {mobileOpen && <MobileMenu items={productMenu} />}

//   //   </nav>
//   // )
// }














