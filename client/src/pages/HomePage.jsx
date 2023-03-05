import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CartTotal from "../components/cart/CartTotal";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
import { message } from "antd";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();

        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (err) {
        message.danger(err);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex flex-col justify-between gap-10 md:flex-row md:pb-0 pb-24 h-screen">
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-64">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products categories={categories}/>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default HomePage;
