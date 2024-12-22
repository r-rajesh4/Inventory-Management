import React from "react";
import CreateProductForm from "./CreateProductForm"; // Import the CreateProductForm component

const CreateProductPage = () => {
  return (
    <div className="create-product-page">
      <h1>Create a New Product</h1>
      <CreateProductForm /> {/* Render the CreateProductForm component */}
    </div>
  );
};

export default CreateProductPage;
