"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";
import { Product, Variant } from "@/types/product";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedVariant, setSelectedVariant] =
    useState<Variant | null>(null);

  const { addToWishlist, removeFromWishlist, wishlist } =
    useWishlist();

  // Load product
  useEffect(() => {
    const foundProduct = products.find(
      (p) => p.id.toString() === id.toString()
    );

    if (foundProduct) {
      setProduct(foundProduct);

      // default variant
      if (foundProduct.variants?.length) {
        const firstVariant = foundProduct.variants[0];
        setSelectedVariant(firstVariant);
        setSelectedColor(firstVariant.color || "");
        setSelectedRam(firstVariant.ram || "");
        setSelectedStorage(firstVariant.storage || "");
      }

      // default size
      if (foundProduct.sizes?.length) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  // Update variant when Color / RAM / Storage changes
  useEffect(() => {
    if (!product) return;

    const matched = product.variants.find(
      (v) =>
        v.color === selectedColor &&
        v.ram === selectedRam &&
        v.storage === selectedStorage
    );

    if (matched) {
      setSelectedVariant(matched);
    }
  }, [selectedColor, selectedRam, selectedStorage, product]);

  if (!product || !selectedVariant) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  // Unique options
  const colors: string[] = [
    ...new Set(
      product.variants
        .map((v) => v.color)
        .filter((c): c is string => Boolean(c))
    ),
  ];

  const rams: string[] = [
    ...new Set(
      product.variants
        .map((v) => v.ram)
        .filter((r): r is string => Boolean(r))
    ),
  ];

  const storages: string[] = [
    ...new Set(
      product.variants
        .map((v) => v.storage)
        .filter((s): s is string => Boolean(s))
    ),
  ];

  // Wishlist check
  const isInWishlist = wishlist.some(
    (item: any) =>
      item.id === product.id &&
      item.selectedColor === selectedColor &&
      item.selectedRam === selectedRam &&
      item.selectedStorage === selectedStorage &&
      item.selectedSize === selectedSize
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">

        {/* LEFT SIDE */}
        <div>
          <div className="relative w-full h-[400px]">
            <Image
              src={selectedVariant.image || product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* COLOR */}
          {colors.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium">Select Color</h3>
              <div className="flex gap-2 mt-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 border rounded ${
                      selectedColor === color
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RAM */}
          {rams.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium">Select RAM</h3>
              <div className="flex gap-2 mt-2">
                {rams.map((ram) => (
                  <button
                    key={ram}
                    onClick={() => setSelectedRam(ram)}
                    className={`px-3 py-1 border rounded ${
                      selectedRam === ram
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {ram}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STORAGE */}
          {storages.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium">Select Storage</h3>
              <div className="flex gap-2 mt-2">
                {storages.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`px-3 py-1 border rounded ${
                      selectedStorage === storage
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SIZE (For clothes only) */}
          {product.sizes && (
            <div className="mt-4">
              <h3 className="font-medium">Select Size</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-3 py-1 rounded ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-3">
            <AddToCartButton
              product={product}
              size={selectedSize}
              variant={selectedVariant}
            />

            <button
              onClick={() =>
                isInWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist({
                      ...product,
                      selectedColor,
                      selectedRam,
                      selectedStorage,
                      selectedSize,
                      price: selectedVariant.price,
                      image: selectedVariant.image,
                    })
              }
              // className="bg-pink-500 text-white py-2 rounded-lg"
            >
              {/* {isInWishlist
                ? "❤️ Remove from Wishlist"
                : "🤍 Add to Wishlist"} */}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-2xl font-semibold">
            {product.title}
          </h1>

          <p className="text-green-600 text-2xl font-bold mt-2">
            ₹{selectedVariant.price}
          </p>

          <p className="mt-1">⭐ {product.rating}</p>

          {/* EXTRA DETAILS */}
          <div className="mt-4 space-y-1 text-sm text-gray-700">
            {product.brand && (
              <p><b>Brand:</b> {product.brand}</p>
            )}
            {product.fabric && (
              <p><b>Fabric:</b> {product.fabric}</p>
            )}
            {product.delivery && (
              <p><b>Delivery:</b> {product.delivery}</p>
            )}
            {product.replacement && (
              <p><b>Replacement:</b> {product.replacement}</p>
            )}
          </div>

          {/* FEATURES */}
          {product.features && (
            <div className="mt-4">
              <h3 className="font-semibold">Highlights</h3>
              <ul className="list-disc pl-5">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* SPECS */}
          {product.specs && (
            <div className="mt-4">
              <h3 className="font-semibold">
                Specifications
              </h3>
              {product.specs.map((s, i) => (
                <div key={i} className="flex border-b">
                  <div className="w-1/3 bg-gray-100 p-2">
                    {s.label}
                  </div>
                  <div className="w-2/3 p-2">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}






















// "use client";

// import { use, useEffect, useState } from "react";
// import Image from "next/image";
// import { products } from "@/data/products";
// import AddToCartButton from "@/components/AddToCartButton";
// import { Product, Variant } from "@/types/product";
// import { useWishlist } from "@/context/WishlistContext";

// export default function ProductDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const resolvedParams = use(params);
//   const id = resolvedParams.id;

//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedVariant, setSelectedVariant] =
//     useState<Variant | null>(null);

//   const { addToWishlist, removeFromWishlist, wishlist } =
//     useWishlist();

//   // Load product
//   useEffect(() => {
//     const foundProduct = products.find(
//       (p) => p.id.toString() === id.toString()
//     );

//     if (foundProduct) {
//       setProduct(foundProduct);

//       // default variant
//       if (foundProduct.variants?.length) {
//         const firstVariant = foundProduct.variants[0];
//         setSelectedVariant(firstVariant);
//         setSelectedColor(firstVariant.color || "");
//       }

//       // default size
//       if (foundProduct.sizes?.length) {
//         setSelectedSize(foundProduct.sizes[0]);
//       }
//     }
//   }, [id]);

//   // Update variant when color changes
//   useEffect(() => {
//     if (!product) return;

//     const matched = product.variants.find(
//       (v) => v.color === selectedColor
//     );

//     if (matched) {
//       setSelectedVariant(matched);
//     }
//   }, [selectedColor, product]);

//   if (!product || !selectedVariant) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   // Unique colors
//   const colors: string[] = [
//     ...new Set(
//       product.variants
//         .map((v) => v.color)
//         .filter((c): c is string => Boolean(c))
//     ),
//   ];

//   // Wishlist check
//   const isInWishlist = wishlist.some(
//     (item: any) =>
//       item.id === product.id &&
//       item.selectedColor === selectedColor &&
//       item.selectedSize === selectedSize
//   );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">

//         {/* LEFT SIDE */}
//         <div>
//           <div className="relative w-full h-[400px]">
//             <Image
//               src={selectedVariant.image || product.image}
//               alt={product.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           {/* COLOR */}
//           <div className="mt-4">
//             <h3 className="font-medium">Select Color</h3>
//             <div className="flex gap-2 mt-2">
//               {colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`px-3 py-1 border rounded ${
//                     selectedColor === color
//                       ? "border-blue-500 bg-blue-100"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* SIZE */}
//           {product.sizes && (
//             <div className="mt-4">
//               <h3 className="font-medium">Select Size</h3>
//               <div className="flex gap-2 mt-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`border px-3 py-1 rounded ${
//                       selectedSize === size
//                         ? "border-blue-500 bg-blue-100"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* BUTTONS */}
//           <div className="mt-6 flex flex-col gap-3">
//             <AddToCartButton
//               product={product}
//               size={selectedSize}
//               variant={selectedVariant}
//             />

//             <button
//               onClick={() =>
//                 isInWishlist
//                   ? removeFromWishlist(product.id)
//                   : addToWishlist({
//                       ...product,
//                       selectedColor,
//                       selectedSize,
//                       price: selectedVariant.price,
//                       image: selectedVariant.image,
//                     })
//               }
//               className="bg-pink-500 text-white py-2 rounded-lg"
//             >
//               {isInWishlist
//                 ? "❤️ Remove from Wishlist"
//                 : "🤍 Add to Wishlist"}
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div>
//           <h1 className="text-2xl font-semibold">
//             {product.title}
//           </h1>

//           <p className="text-green-600 text-2xl font-bold mt-2">
//             ₹{selectedVariant.price}
//           </p>

//           <p className="mt-1">⭐ {product.rating}</p>

//           {/* EXTRA DETAILS */}
//           <div className="mt-4 space-y-1 text-sm text-gray-700">
//             {product.brand && (
//               <p><b>Brand:</b> {product.brand}</p>
//             )}
//             {product.fabric && (
//               <p><b>Fabric:</b> {product.fabric}</p>
//             )}
//             {product.delivery && (
//               <p><b>Delivery:</b> {product.delivery}</p>
//             )}
//             {product.replacement && (
//               <p><b>Replacement:</b> {product.replacement}</p>
//             )}
//           </div>

//           {/* FEATURES */}
//           {product.features && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Highlights</h3>
//               <ul className="list-disc pl-5">
//                 {product.features.map((f) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* SPECS */}
//           {product.specs && (
//             <div className="mt-4">
//               <h3 className="font-semibold">
//                 Specifications
//               </h3>
//               {product.specs.map((s, i) => (
//                 <div key={i} className="flex border-b">
//                   <div className="w-1/3 bg-gray-100 p-2">
//                     {s.label}
//                   </div>
//                   <div className="w-2/3 p-2">
//                     {s.value}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <p className="mt-4">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import Image from "next/image";
// import { products } from "@/data/products";
// import AddToCartButton from "@/components/AddToCartButton";
// import { useState, useEffect } from "react";
// import { Product, Variant } from "@/types/product";
// import { useWishlist } from "@/context/WishlistContext";

// export default function ProductDetails({ params }: any) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

//   const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

//   // LOAD PRODUCT
//   useEffect(() => {
//     const foundProduct = products.find(
//       (p) => p.id.toString() === params.id.toString()
//     );

//     if (foundProduct) {
//       setProduct(foundProduct);

//       // First variant auto select
//       if (foundProduct.variants?.length) {
//         const firstVariant = foundProduct.variants[0];
//         setSelectedVariant(firstVariant);
//         // setSelectedColor(firstVariant.color);
//         setSelectedColor(firstVariant.color || "");
//       }

//       // First size auto select
//       if (foundProduct.sizes?.length) {
//         setSelectedSize(foundProduct.sizes[0]);
//       }
//     }
//   }, [params]);

//   // Update variant when color changes
//   useEffect(() => {
//     if (!product) return;

//     const matchedVariant = product.variants.find(
//       (v) => v.color === selectedColor
//     );

//     if (matchedVariant) {
//       setSelectedVariant(matchedVariant);
//     }
//   }, [selectedColor, product]);

//   if (!product || !selectedVariant) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   // Unique colors
//   // const colors: string[] = [
//   //   ...new Set(product.variants.map((v) => v.color)),
//   // ];

//   const colors: string[] = [
//   ...new Set(
//     product.variants
//       .map((v) => v.color)
//       .filter((color): color is string => Boolean(color))
//   ),
// ];

//   // Wishlist check (same product + color + size)
//   const isInWishlist = wishlist.some(
//     (item: any) =>
//       item.id === product.id &&
//       item.selectedColor === selectedColor &&
//       item.selectedSize === selectedSize
//   );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
        
//         {/* LEFT */}
//         <div>
//           <div className="relative w-full h-100">
//             <Image
//               src={selectedVariant.image || product.image}
//               alt={product.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           {/* COLOR */}
//           <div className="mt-4">
//             <h3 className="font-medium">Select Color</h3>
//             <div className="flex gap-2 mt-2">
//               {colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`px-3 py-1 border rounded ${
//                     selectedColor === color
//                       ? "border-blue-500 bg-blue-100"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* SIZE */}
//           {product.sizes && (
//             <div className="mt-4">
//               <h3 className="font-medium">Select Size</h3>
//               <div className="flex gap-2 mt-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`border px-3 py-1 rounded ${
//                       selectedSize === size
//                         ? "border-blue-500 bg-blue-100"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* CART + WISHLIST */}
//           <div className="mt-6 flex flex-col gap-3">
//             <AddToCartButton
//               product={product}
//               size={selectedSize}
//               variant={selectedVariant}
//             />

//             <button
//               onClick={() =>
//                 isInWishlist
//                   ? removeFromWishlist(product.id, selectedColor, selectedSize)
//                   : addToWishlist({
//                       ...product,
//                       selectedColor,
//                       selectedSize,
//                       price: selectedVariant.price,
//                       image: selectedVariant.image,
//                     })
//               }
//               className="bg-pink-500 text-white py-2 rounded-lg"
//             >
//               {isInWishlist
//                 ? "❤️ Remove from Wishlist"
//                 : "🤍 Add to Wishlist"}
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <h1 className="text-2xl font-semibold">{product.title}</h1>

//           <p className="text-green-600 text-2xl font-bold mt-2">
//             ₹{selectedVariant.price}
//           </p>

//           <p className="mt-1">⭐ {product.rating}</p>

//           {/* EXTRA DETAILS */}
//           <div className="mt-4 space-y-1 text-sm text-gray-700">
//             <p><b>Brand:</b> {product.brand}</p>
//             <p><b>Fabric:</b> {product.fabric}</p>
//             <p><b>Delivery:</b> {product.delivery}</p>
//             <p><b>Replacement:</b> {product.replacement}</p>
//           </div>

//           {/* FEATURES */}
//           {product.features && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Highlights</h3>
//               <ul className="list-disc pl-5">
//                 {product.features.map((f) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* SPECS */}
//           {product.specs && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Specifications</h3>
//               {product.specs.map((s, i) => (
//                 <div key={i} className="flex border-b">
//                   <div className="w-1/3 bg-gray-100 p-2">{s.label}</div>
//                   <div className="w-2/3 p-2">{s.value}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <p className="mt-4">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
















// "use client";

// import Image from "next/image";
// import { products } from "@/data/products";
// import AddToCartButton from "@/components/AddToCartButton";
// import { useState, useEffect } from "react";
// import { useWishlist } from "@/context/WishlistContext";

// export default function ProductDetails({ params }: any) {
//   const [product, setProduct] = useState<any>(null);

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedVariant, setSelectedVariant] = useState<any>(null);

//   const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

//   // 🔥 LOAD PRODUCT
//   useEffect(() => {
//     const loadProduct = async () => {
//       const resolvedParams = await params;

//       const foundProduct = products.find(
//         (p) => p.id.toString() === resolvedParams.id.toString()
//       );

//       if (foundProduct) {
//         setProduct(foundProduct);

//         // 👉 first variant auto select
//         if (foundProduct.variants?.length) {
//           const firstVariant = foundProduct.variants[0];
//           setSelectedVariant(firstVariant);
//           setSelectedColor(firstVariant.color);
//         }

//         // 👉 first size auto select
//         if (foundProduct.sizes?.length) {
//           setSelectedSize(foundProduct.sizes[0]);
//         }
//       }
//     };

//     loadProduct();
//   }, [params]);

//   // 🔥 UPDATE VARIANT WHEN COLOR CHANGES
//   useEffect(() => {
//     if (!product) return;

//     const matched = product.variants?.find(
//       (v: any) => v.color === selectedColor
//     );

//     if (matched) {
//       setSelectedVariant(matched);
//     }
//   }, [selectedColor, product]);

//   if (!product || !selectedVariant) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   // 🔥 UNIQUE COLORS
//   // const colors = [...new Set(product.variants.map((v: any) => v.color))];
//   const colors: string[] = product?.variants
//   ? [...new Set(product.variants.map((v: any) => v.color))]
//   : [];

//   // 🔥 WISHLIST CHECK
//   const isInWishlist = wishlist.some(
//     (item: any) => item.id === product.id
//   );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
        
//         {/* LEFT */}
//         <div>
//           <div className="relative w-full h-[400px]">
//             <Image
//               src={selectedVariant.image || product.image}
//               alt={product.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           {/* COLOR */}
//           {/* <div className="mt-4">
//             <h3 className="font-medium">Select Color</h3>
//             <div className="flex gap-2 mt-2">
//               {colors.map((color: string) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`px-3 py-1 border rounded ${
//                     selectedColor === color
//                       ? "border-blue-500 bg-blue-100"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           </div> */}

// {colors.length > 0 && (
//   <div className="mt-4">
//     <h3 className="font-medium">Select Color</h3>
//     <div className="flex gap-2 mt-2">
//       {colors.map((color) => (
//         <button
//           key={color}
//           onClick={() => setSelectedColor(color)}
//           className={`px-3 py-1 border rounded ${
//             selectedColor === color
//               ? "border-blue-500 bg-blue-100"
//               : "border-gray-300"
//           }`}
//         >
//           {color}
//         </button>
//       ))}
//     </div>
//   </div>
// )}
//           {/* SIZE */}
//           {product.sizes && (
//             <div className="mt-4">
//               <h3 className="font-medium">Select Size</h3>
//               <div className="flex gap-2 mt-2">
//                 {product.sizes.map((size: string) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`border px-3 py-1 rounded ${
//                       selectedSize === size
//                         ? "border-blue-500 bg-blue-100"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* CART + WISHLIST */}
//           <div className="mt-6 flex flex-col gap-3">
//             <AddToCartButton
//               product={product}
//               size={selectedSize}
//               variant={selectedVariant}
//             />

//             <button
//               onClick={() =>
//                 isInWishlist
//                   ? removeFromWishlist(product.id)
//                   : addToWishlist({
//                       ...product,
//                       selectedColor,
//                       selectedSize,
//                       selectedVariant,
//                     })
//               }
//               className="bg-pink-500 text-white py-2 rounded-lg"
//             >
//               {isInWishlist
//                 ? "❤️ Remove from Wishlist"
//                 : "🤍 Add to Wishlist"}
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <h1 className="text-2xl font-semibold">{product.title}</h1>

//           <p className="text-green-600 text-2xl font-bold mt-2">
//             ₹{selectedVariant.price}
//           </p>

//           <p className="mt-1">⭐ {product.rating}</p>

//           {/* EXTRA DETAILS */}
//           <div className="mt-4 space-y-1 text-sm text-gray-700">
//             <p><b>Brand:</b> {product.brand}</p>
//             <p><b>Fabric:</b> {product.fabric}</p>
//             <p><b>Delivery:</b> {product.delivery}</p>
//             <p><b>Replacement:</b> {product.replacement}</p>
//           </div>

//           {/* FEATURES */}
//           {product.features && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Highlights</h3>
//               <ul className="list-disc pl-5">
//                 {product.features.map((f: string) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* SPECS */}
//           {product.specs && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Specifications</h3>
//               {product.specs.map((s: any, i: number) => (
//                 <div key={i} className="flex border-b">
//                   <div className="w-1/3 bg-gray-100 p-2">{s.label}</div>
//                   <div className="w-2/3 p-2">{s.value}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <p className="mt-4">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }






// "use client";

// import Image from "next/image";
// import { products } from "@/data/products";
// import AddToCartButton from "@/components/AddToCartButton";
// import { useState, useEffect } from "react";

// export default function ProductDetails({ params }: any) {
//   const [product, setProduct] = useState<any>(null);
//   const [selectedSize, setSelectedSize] = useState("");

//   useEffect(() => {
//     const loadProduct = async () => {
//       const resolvedParams = await params;
//       const foundProduct = products.find(
//         (p) => p.id.toString() === resolvedParams.id.toString()
//       );
//       setProduct(foundProduct);
//     };

//     loadProduct();
//   }, [params]);

//   if (!product) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">

//         <div>
//           <div className="relative w-full h-100">
//             <Image src={product.image} alt={product.title} fill />
//           </div>

//           <AddToCartButton product={product} size={selectedSize} variant={selectedVariant} />
//         </div>

//         <div>
//           <h1 className="text-2xl font-semibold">{product.title}</h1>
//           <p className="text-green-600 text-xl">₹{product.price}</p>
//           <p>⭐ {product.rating}</p>

//           {product.sizes && (
//             <div className="mt-4">
//               <h3>Select Size</h3>
//               <div className="flex gap-2 mt-2">
//                 {product.sizes.map((size: string) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`border px-3 py-1 rounded ${
//                       selectedSize === size
//                         ? "border-blue-500 bg-blue-100"
//                         : ""
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {product.features && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Highlights</h3>
//               <ul className="list-disc pl-5">
//                 {product.features.map((f: string) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {product.specs && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Specifications</h3>
//               {product.specs.map((s: any, i: number) => (
//                 <div key={i} className="flex border-b">
//                   <div className="w-1/3 bg-gray-100 p-2">{s.label}</div>
//                   <div className="w-2/3 p-2">{s.value}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <p className="mt-4">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
































































































// import Image from "next/image"
// import Link from "next/link"
// import { products } from "@/data/products"
// import AddToCartButton from "../../../components/AddToCartButton"
// import { ShoppingBagIcon } from "lucide-react"

// type Props = {
//   params: Promise<{ id: string }>
// }


// export default async function ProductDetails({ params }: Props) {
//   const { id } = await params
//   const product = products.find((p) => p.id === id)

//   if (!product) {
//     return <div className="p-10 text-center">Product not found</div>
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white p-6 rounded-lg shadow grid md:grid-cols-2 gap-10">
        
//         {/* LEFT - IMAGE */}
//         <div>
//           <div className="relative w-full h-100 bg-gray-100 rounded-lg overflow-hidden">
//             <Image
//               src={product.image}
//               alt={product.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//          <div className="flex gap-4 mt-3">
//   <AddToCartButton product={product} />

//   <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2">
//     <ShoppingBagIcon size={18} />
//     <span>Buy Now</span>
//   </button>
// </div>
//         </div>

//         {/* RIGHT - DETAILS */}
//         <div>
//           <h1 className="text-2xl font-semibold">{product.title}</h1>

//           <p className="text-green-600 font-medium mt-1">
//             ⭐ {product.rating} Rating
//           </p>

//           <div className="mt-4">
//             <p className="text-3xl font-bold text-gray-900">
//               ₹{product.price}
//             </p>
//             <p className="text-green-600 text-sm">Special price</p>
//           </div>

//           <div className="mt-4 text-sm text-gray-600">
//             Category: {product.category} · {product.subCategory}
//           </div>

//           {/* Delivery */}
//           <div className="mt-6 border-t pt-4">
//             <p className="font-medium">Delivery</p>
//             <p className="text-sm text-gray-600">
//               Delivery in 3-5 days | Free Delivery
//             </p>
//           </div>

//           {/* Features */}
//           {product.features && (
//             <div className="mt-6">
//               <h2 className="font-semibold mb-2">Highlights</h2>
//               <ul className="list-disc list-inside text-gray-700 space-y-1">
//                 {product.features.map((f) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Specifications Table */}
//       {/* {product.specs && (
//         <div className="bg-white mt-6 p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold mb-4">
//             Specifications
//           </h2>

//           <div className="grid grid-cols-2 gap-4">
//             {product.specs.map((spec) => (
//               <div
//                 key={spec.label}
//                 className="flex justify-between border-b py-2"
//               >
//                 <span className="text-gray-600">{spec.label}</span>
//                 <span className="font-medium">{spec.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )} */}
//     </div>
//   )
// }





















