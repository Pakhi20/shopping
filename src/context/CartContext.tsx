"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: any) => {
    setCart((prev: CartItem[]) => {
      const existingItem = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
          selectedSize: product.selectedSize,
          selectedColor: product.selectedColor,
        },
      ];
    });
  };

  const increaseQty = (id: string, size?: string, color?: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: string, size?: string, color?: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string, size?: string, color?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);




// "use client";
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext<any>(null);

// export interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
//   quantity: number;
//   selectedSize?: string;
//   selectedColor?: string;
// }

// export const CartProvider = ({ children }: any) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (product: any) => {
//     setCart((prev: CartItem[]) => {
//       const existingItem = prev.find(
//         (item) =>
//           item.id === product.id &&
//           item.selectedSize === product.selectedSize &&
//           item.selectedColor === product.selectedVariant?.color
//       );

//       if (existingItem) {
//         return prev.map((item) =>
//           item.id === product.id &&
//           item.selectedSize === product.selectedSize &&
//           item.selectedColor === product.selectedVariant?.color
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [
//         ...prev,
//         {
//           id: product.id,
//           title: product.title,
//           price: product.price,
//           image: product.image,
//           quantity: 1,
//           selectedSize: product.selectedSize,
//           selectedColor: product.selectedVariant?.color,
//         },
//       ];
//     });
//   };

//   const increaseQty = (id: string, size?: string, color?: string) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id &&
//         item.selectedSize === size &&
//         item.selectedColor === color
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (id: string, size?: string, color?: string) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id &&
//           item.selectedSize === size &&
//           item.selectedColor === color
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const removeFromCart = (id: string, size?: string, color?: string) => {
//     setCart((prev) =>
//       prev.filter(
//         (item) =>
//           !(
//             item.id === id &&
//             item.selectedSize === size &&
//             item.selectedColor === color
//           )
//       )
//     );
//   };

//   const clearCart = () => setCart([]);

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increaseQty,
//         decreaseQty,
//         totalPrice,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);






// "use client";
// import { createContext, useContext, useState } from "react";
// // import { CartItem } from "@/types/product";

// const CartContext = createContext<any>(null);


// export interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
//   quantity: number;
//   selectedSize?: string;
// }

// export const CartProvider = ({ children }: any) => {
//   const [cart, setCart] = useState<CartItem[]>([]);






//   const addToCart = (product: any) => {
//   setCart((prev: CartItem[]) => {
//     const existingItem = prev.find(
//       (item) =>
//         item.id === product.id &&
//         item.selectedSize === product.selectedSize
//     );

//     if (existingItem) {
//       return prev.map((item) =>
//         item.id === product.id &&
//         item.selectedSize === product.selectedSize
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     }

//     return [
//       ...prev,
//       {
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         quantity: 1,
//         selectedSize: product.selectedSize, // SAVE SIZE
//       },
//     ];
//   });
// };






//   // const addToCart = (product: any) => {
//   //   setCart((prev) => {
//   //     const existing = prev.find(
//   //       (item) =>
//   //         item.id === product.id &&
//   //         item.selectedSize === product.selectedSize
//   //     );

//   //     if (existing) {
//   //       return prev.map((item) =>
//   //         item.id === product.id &&
//   //         item.selectedSize === product.selectedSize
//   //           ? { ...item, quantity: item.quantity + 1 }
//   //           : item
//   //       );
//   //     }

//   //     return [
//   //       ...prev,
//   //       {
//   //         id: product.id,
//   //         title: product.title,
//   //         price: product.price,
//   //         image: product.image,
//   //         selectedSize: product.selectedSize,
//   //         quantity: 1,
//   //       },
//   //     ];
//   //   });
//   // };

//   const increaseQty = (id: string) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id: string) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => setCart([]);

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increaseQty,
//         decreaseQty,
//         totalPrice,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);





































































































































































// "use client"

// import React, { createContext, useContext, useReducer } from "react"
// import { Product } from "@/types/product"

// interface CartItem extends Product {
//   quantity: number
// }

// interface CartState {
//   cart: CartItem[]
// }

// type CartAction =
//   | { type: "ADD_TO_CART"; payload: Product }
//   | { type: "REMOVE_FROM_CART"; payload: string }
//   | { type: "INCREASE_QTY"; payload: string }
//   | { type: "DECREASE_QTY"; payload: string }
//   | { type: "CLEAR_CART" }

// interface CartContextType {
//   cart: CartItem[]
//   addToCart: (product: Product) => void
//   removeFromCart: (id: string) => void
//   increaseQty: (id: string) => void
//   decreaseQty: (id: string) => void
//   clearCart: () => void
//   totalPrice: number
//   totalItems: number
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// const cartReducer = (state: CartState, action: CartAction): CartState => {
//   switch (action.type) {

//     case "ADD_TO_CART":
//       const existing = state.cart.find(
//         (item) => item.id === action.payload.id
//       )

//       if (existing) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         }
//       }

//       return {
//         cart: [...state.cart, { ...action.payload, quantity: 1 }],
//       }

//     case "REMOVE_FROM_CART":
//       return {
//         cart: state.cart.filter((item) => item.id !== action.payload),
//       }

//     case "INCREASE_QTY":
//       return {
//         cart: state.cart.map((item) =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       }

//     case "DECREASE_QTY":
//       return {
//         cart: state.cart
//           .map((item) =>
//             item.id === action.payload
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           )
//           .filter((item) => item.quantity > 0),
//       }

//     case "CLEAR_CART":
//       return { cart: [] }

//     default:
//       return state
//   }
// }

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {

//   const [state, dispatch] = useReducer(cartReducer, { cart: [] })

//   const addToCart = (product: Product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product })
//   }

//   const removeFromCart = (id: string) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: id })
//   }

//   const increaseQty = (id: string) => {
//     dispatch({ type: "INCREASE_QTY", payload: id })
//   }

//   const decreaseQty = (id: string) => {
//     dispatch({ type: "DECREASE_QTY", payload: id })
//   }

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" })
//   }

//   const totalPrice = state.cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   )

//   const totalItems = state.cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   )

//   return (
//     <CartContext.Provider
//       value={{
//         cart: state.cart,
//         addToCart,
//         removeFromCart,
//         increaseQty,
//         decreaseQty,
//         clearCart,
//         totalPrice,
//         totalItems,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)

//   if (!context) {
//     throw new Error("useCart must be used within CartProvider")
//   }

//   return context
// }





























// "use client"

// import React, { createContext, useContext, useReducer } from "react"
// import { Product } from "@/types/product"

// interface CartItem extends Product {
//   quantity: number
// }

// interface CartState {
//   cart: CartItem[]
// }

// type CartAction =
//   | { type: "ADD_TO_CART"; payload: Product }
//   | { type: "REMOVE_FROM_CART"; payload: string }
//   | { type: "INCREASE_QTY"; payload: string }
//   | { type: "DECREASE_QTY"; payload: string }

// interface CartContextType {
//   cart: CartItem[]
//   addToCart: (product: Product) => void
//   removeFromCart: (id: string) => void
//   increaseQty: (id: string) => void
//   decreaseQty: (id: string) => void
//   totalPrice: number
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// const cartReducer = (state: CartState, action: CartAction): CartState => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existing = state.cart.find(
//         (item) => item.id === action.payload.id
//       )

//       if (existing) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         }
//       }

//       return {
//         cart: [...state.cart, { ...action.payload, quantity: 1 }],
//       }

//     case "REMOVE_FROM_CART":
//       return {
//         cart: state.cart.filter((item) => item.id !== action.payload),
//       }

//     case "INCREASE_QTY":
//   return {
//     cart: state.cart.map(item =>
//       item.id === action.payload
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     ),
//   }

// case "DECREASE_QTY":
//   return {
//     cart: state.cart
//       .map(item =>
//         item.id === action.payload
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//       .filter(item => item.quantity > 0),
//   }

//     default:
//       return state
//   }
// }

// export const CartProvider = ({
//   children,
// }: {
//   children: React.ReactNode
// }) => {
//   const [state, dispatch] = useReducer(cartReducer, { cart: [] })

//   const addToCart = (product: Product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product })
//   }

//   const removeFromCart = (id: string) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: id })
//   }

//   const increaseQty = (id: string) => {
//   dispatch({ type: "INCREASE_QTY", payload: id })
// }

// const decreaseQty = (id: string) => {
//   dispatch({ type: "DECREASE_QTY", payload: id })
// }

//   const totalPrice = state.cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   )

//   return (
//     <CartContext.Provider
//   value={{
//     cart: state.cart,
//     addToCart,
//     removeFromCart,
//     increaseQty,
//     decreaseQty,
//     totalPrice,
//   }}
// >
      
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider")
//   }
//   return context
// }

// export default CartContext;

