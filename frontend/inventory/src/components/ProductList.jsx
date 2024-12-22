// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }
  console.log(products);
  return (
    <div>
      <h2>Product Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Descriptions</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
