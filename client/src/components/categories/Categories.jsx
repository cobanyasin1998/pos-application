import React from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Input, Modal, Form, Button, message } from "antd";

const Categories = () => {
  const [isAddModalOpen, setisAddModalOpen] = useState(false);

  const[form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
   
      });
      message.success("Kategori Başarıyla Eklendi")
      form.resetFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      <li className="">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Meyve</span>
      </li>
      <li className="category-item">
        <span>Yiyecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>Meyve</span>
      </li>
      <li className="category-item">
        <span>Yiyecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>Meyve</span>
      </li>
      <li className="category-item">
        <span>Yiyecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>Meyve</span>
      </li>
      <li className="category-item">
        <span>Yiyecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>

      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => {
          setisAddModalOpen(true);
        }}
      >
        <PlusOutlined className="md:text-2xl " />
      </li>

      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => {
          setisAddModalOpen(false);
        }}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name={"title"}
            label="Kategori Ekle"
            rules={[
              {
                required: true,
                message: "Kategori Alanı Boş Geçilemez",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
