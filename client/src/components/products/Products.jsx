import { message } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setisAddModalOpen] = useState(false);

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
        <ProductItem item={item} />
      ))}

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90" onClick={()=>{setisAddModalOpen(true)}}>
        <PlusOutlined className="text-white md:text-2xl" />
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90">
        <EditOutlined className="text-white md:text-2xl" />
      </div>

      <Add
        isAddModalOpen={isAddModalOpen}
        setisAddModalOpen={setisAddModalOpen}
      />
    </div>
  );
};

export default Products;
