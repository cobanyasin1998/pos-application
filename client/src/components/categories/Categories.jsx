import React from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import Add from "./Add";
import Edit from "./Edit";
import "./style.css";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setisAddModalOpen] = useState(false);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      {categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))}
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => {
          setisAddModalOpen(true);
        }}
      >
        <PlusOutlined className="md:text-2xl " />
      </li>

      <li
        className="category-item !bg-orange-800 hover:opacity-90"
        onClick={() => {
          setisEditModalOpen(true);
        }}
      >
        <EditOutlined className="md:text-2xl " />
      </li>

      <Add
        isAddModalOpen={isAddModalOpen}
        setisAddModalOpen={setisAddModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
      <Edit
        isEditModalOpen={isEditModalOpen}
        setisEditModalOpen={setisEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
    </ul>
  );
};

export default Categories;
