"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Product, Variant } from "@/types/product";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { ShoppingBasket, ShoppingBag } from "lucide-react";

export default function AddToCartButton({
  product,
  size,
  variant,
}: {
  product: Product;
  size?: string;
  variant: Variant;
}) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [actionType, setActionType] = useState<"cart" | "buy">("cart");

  const handleAction = (type: "cart" | "buy") => {
    const loginStatus =
      localStorage.getItem("isLoggedIn") ||
      sessionStorage.getItem("isLoggedIn");

    if (loginStatus !== "true") {
      setActionType(type);
      setShowLoginModal(true);
      return;
    }

    if (product.sizes && !size) {
      alert("Please select size");
      return;
    }

    addToCart({
      ...product,
      selectedSize: size,
      selectedColor: variant.color,
      price: variant.price,
      image: variant.image,
    });

    window.dispatchEvent(new Event("cartUpdated"));

    if (type === "buy") {
      router.push("/checkout");
    } else {
      router.push("/cart");
    }
  };

  const handleLoginSuccess = () => {
    addToCart({
      ...product,
      selectedSize: size,
      selectedColor: variant.color,
      price: variant.price,
      image: variant.image,
    });

    window.dispatchEvent(new Event("cartUpdated"));

    if (actionType === "buy") {
      router.push("/checkout");
    } else {
      router.push("/cart");
    }
  };

  return (
    <>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => handleAction("cart")}
          className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center"
        >
          <ShoppingBasket className="mr-2" size={18} />
          <span>Add to Cart</span>
        </button>

        <button
          onClick={() => handleAction("buy")}
          className="flex-1 bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center"
        >
          <ShoppingBag className="mr-2" size={18} />
          <span>Buy Now</span>
        </button>
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
}


// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/context/CartContext";
// import { Product } from "@/types/product";
// import { useState } from "react";
// import LoginModal from "./LoginModal";
// import { ShoppingBasket, ShoppingBag } from "lucide-react";

// export default function AddToCartButton({
//   product,
//   size,
//   variant,
// }: {
//   product: Product;
//   size?: string;
//   variant?: any;
// }) {
//   const { addToCart } = useCart();
//   const router = useRouter();
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [actionType, setActionType] = useState<"cart" | "buy">("cart");

//   const handleAction = (type: "cart" | "buy") => {
//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn");

//     if (loginStatus !== "true") {
//       setActionType(type);
//       setShowLoginModal(true);
//       return;
//     }

//     // ✅ Size validation
//     if (product.sizes && !size) {
//       alert("Please select size");
//       return;
//     }

//     // ✅ Variant validation
//     if (product.variants && !variant) {
//       alert("Please select color");
//       return;
//     }

//     // ✅ Final cart product
//     const cartItem = {
//       ...product,
//       selectedSize: size,
//       selectedVariant: variant,
//       price: variant?.price || product.price,
//       image: variant?.images?.[0] || product.image,
//     };

//     addToCart(cartItem);
//     window.dispatchEvent(new Event("cartUpdated"));

//     if (type === "buy") {
//       router.push("/checkout");
//     } else {
//       router.push("/cart");
//     }
//   };

//   const handleLoginSuccess = () => {
//     const cartItem = {
//       ...product,
//       selectedSize: size,
//       selectedVariant: variant,
//       price: variant?.price || product.price,
//       image: variant?.images?.[0] || product.image,
//     };

//     addToCart(cartItem);
//     window.dispatchEvent(new Event("cartUpdated"));

//     if (actionType === "buy") {
//       router.push("/checkout");
//     } else {
//       router.push("/cart");
//     }
//   };

//   return (
//     <>
//       <div className="mt-6 flex gap-4">
//         <button
//           onClick={() => handleAction("cart")}
//           className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center"
//         >
//           <ShoppingBasket className="mr-2" size={18} />
//           <span>Add to Cart</span>
//         </button>

//         <button
//           onClick={() => handleAction("buy")}
//           className="flex-1 bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center"
//         >
//           <ShoppingBag className="mr-2" size={18} />
//           <span>Buy Now</span>
//         </button>
//       </div>

//       <LoginModal
//         isOpen={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         onSuccess={handleLoginSuccess}
//       />
//     </>
//   );
// }







// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/context/CartContext";
// import { Product } from "@/types/product";
// import { useState } from "react";
// import LoginModal from "./LoginModal";
// import { ShoppingBasket, ShoppingBag } from "lucide-react";

// export default function AddToCartButton({
//   product,
//   size,
// }: {
//   product: Product;
//   size?: string;
// }) {
//   const { addToCart } = useCart();
//   const router = useRouter();
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [actionType, setActionType] = useState<"cart" | "buy">("cart");

//   const handleAction = (type: "cart" | "buy") => {
//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn");

//     if (loginStatus !== "true") {
//       setActionType(type);
//       setShowLoginModal(true);
//       return;
//     }

//     if (product.sizes && !size) {
//       alert("Please select size");
//       return;
//     }

//     addToCart({ ...product, selectedSize: size });
//     window.dispatchEvent(new Event("cartUpdated"));

//     if (type === "buy") {
//       router.push("/checkout");
//     } else {
//       router.push("/cart");
//     }
//   };

//   const handleLoginSuccess = () => {
//     addToCart({ ...product, selectedSize: size });
//     window.dispatchEvent(new Event("cartUpdated"));

//     if (actionType === "buy") {
//       router.push("/checkout");
//     } else {
//       router.push("/cart");
//     }
//   };

//   return (
//     <>
//       <div className="mt-6 flex gap-4">
//         <button
//           onClick={() => handleAction("cart")}
//           className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center"
//         >
//           <ShoppingBasket className="mr-2" size={18} />
//           <span>Add to Cart</span>
//         </button>

//         <button
//           onClick={() => handleAction("buy")}
//           className="flex-1 bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center"
//         >
//           <ShoppingBag className="mr-2" size={18} />
//           <span>Buy Now</span>
//         </button>
//       </div>

//       <LoginModal
//         isOpen={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         onSuccess={handleLoginSuccess}
//       />
//     </>
//   );
// }













































// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/context/CartContext";
// import { Product } from "@/types/product";
// import { useState } from "react";
// import LoginModal from "./LoginModal";
// import { ShoppingBasket, ShoppingBasketIcon } from "lucide-react";

// export default function AddToCartButton({
//   product,
//   size,
// }: {
//   product: Product;
//   size?: string;
// }) {
//   const { addToCart } = useCart();
//   const router = useRouter();
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const handleAddToCart = () => {
//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn");

//     if (loginStatus !== "true") {
//       setShowLoginModal(true);
//       return;
//     }

//     if (product.sizes && !size) {
//       alert("Please select size");
//       return;
//     }

//     addToCart({ ...product, selectedSize: size });
//     router.push("/cart");
//   };

//   return (
//     <>
//      <div className="mt-6 flex gap-4">
//   <button
//     onClick={handleAddToCart}
//     className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center"
//   >
//     <ShoppingBasketIcon className="mr-2" size={18} />
//     <span>Add to Cart</span>
//   </button>

//   <button
//     onClick={handleAddToCart}
//     className="flex-1 bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center"
//   >
//     <ShoppingBasket className="mr-2" size={18} />
//     <span>Buy Now</span>
//   </button>
// </div>

//       <LoginModal
//         isOpen={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         onSuccess={handleAddToCart}
//       />
//     </>
//   );
// }











































// "use client"

// import { useRouter } from "next/navigation"
// import { useCart } from "@/context/CartContext"
// import { Product } from "@/types/product"
// import { useState } from "react"
// import LoginModal from "./LoginModal"
// import { ShoppingBasketIcon } from "lucide-react"

// export default function AddToCartButton({ product }: { product: Product }) {
//   const { addToCart } = useCart()
//   const router = useRouter()

//   const [showLoginModal, setShowLoginModal] = useState(false)

//   const handleAddToCart = () => {
//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn")

//     if (loginStatus !== "true") {
//       setShowLoginModal(true)
//       return
//     }

//     addToCart(product)

//     // Update navbar cart
//     window.dispatchEvent(new Event("cartUpdated"))

//     router.push("/cart")
//   }

//   const handleLoginSuccess = () => {
//     addToCart(product)
//     window.dispatchEvent(new Event("cartUpdated"))
//     router.push("/cart")
//   }

//   return (
//     <>
//      <button
//   onClick={handleAddToCart}
//   className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2"
// >
//   <ShoppingBasketIcon size={18} />
//   <span>Add to Cart</span>
// </button>

//       <LoginModal
//         isOpen={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         onSuccess={handleLoginSuccess}
//       />
//     </>
//   )
// }