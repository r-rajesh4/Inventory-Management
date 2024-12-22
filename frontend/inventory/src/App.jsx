import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import CreateProductForm from "./components/CreateProductForm";

function App() {
  return (
    <div className="App">
      <ProductList />
      <CreateProductForm />
    </div>
  );
}

export default App;
