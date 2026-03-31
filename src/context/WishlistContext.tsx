"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: any) => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const addToWishlist = (product: any) => {
    const exists = wishlist.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === product.selectedColor &&
        item.selectedSize === product.selectedSize
    );

    if (exists) return;

    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (
    id: string,
    color?: string,
    size?: string
  ) => {
    const updatedWishlist = wishlist.filter(
      (item) =>
        !(
          item.id === id &&
          item.selectedColor === color &&
          item.selectedSize === size
        )
    );

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);



// "use client"

// import { createContext, useContext, useState, useEffect } from "react"

// const WishlistContext = createContext<any>(null)

// export const WishlistProvider = ({ children }: any) => {
//   const [wishlist, setWishlist] = useState<any[]>([])

//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist")
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist))
//     }
//   }, [])

//   const addToWishlist = (product: any) => {
//     const updatedWishlist = [...wishlist, product]
//     setWishlist(updatedWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//   }

//   const removeFromWishlist = (id: string) => {
//     const updatedWishlist = wishlist.filter((item) => item.id !== id)
//     setWishlist(updatedWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//   }

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   )
// }

// export const useWishlist = () => useContext(WishlistContext)