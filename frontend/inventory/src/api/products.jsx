// // src/api/products.jsx
// export const fetchProducts = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: 1,
//           name: "Product A",
//           price: "$10",
//           craeted_date: "2024-11-29T09:40:02.072813Z",
//         },
//         {
//           id: 2,
//           name: "Product B",
//           price: "$20",
//           created_date: "2024-11-29T09:40:02.072813Z",
//         },
//         {
//           id: 3,
//           name: "Product C",
//           price: "$30",
//           created_date: "2024-11-29T09:40:02.072813Z",
//         },
//         {
//           id: 4,
//           name: "Product D",
//           price: "$40",
//           created_date: "2024-11-29T09:40:02.072813Z",
//         },
//       ]);
//     }, 1000);
//   });
// };
// src/api/products.js (using fetch)
export const fetchProducts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array in case of error
  }
};
