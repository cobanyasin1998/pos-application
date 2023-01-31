import { message } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const Products = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setisAddModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        message.danger("Bğlantı Hatası");
      }
    };
    getCategories();
  }, []);

  return (
    <div className="products-wrapper grid gap-4 grid-cols-card">
      {products.map((item) => (
        <ProductItem item={item} key={item._id} />
      ))}

      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-h-[180px]"
        onClick={() => {
          setisAddModalOpen(true);
        }}
      >
        <PlusOutlined className="text-white md:text-2xl" />
      </div>
      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px]"
        onClick={() => {
          navigate("/products");
        }}
      >
        <EditOutlined className="text-white md:text-2xl" />
      </div>

      <Add
        isAddModalOpen={isAddModalOpen}
        setisAddModalOpen={setisAddModalOpen}
        categories={categories}
        setProducts={setProducts}
        products={products}
      />
    </div>
  );
};

export default Products;
