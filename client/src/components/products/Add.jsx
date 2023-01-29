import React from "react";
import { Input, Modal, Form, Button, message } from "antd";

const Add = ({
  isAddModalOpen,
  setisAddModalOpen,
  categories,
  setCategories,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori Başarıyla Eklendi");
      form.resetFields();

      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]);
    } catch (err) {
      message.danger(err);
    }
  };
  return (
    <>
      <Modal
        title="Yeni Ürün Ekle"
        open={isAddModalOpen}
        onCancel={() => {
          setisAddModalOpen(false);
        }}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name={"title"}
            label="Ürün Adı Ekle"
            rules={[
              {
                required: true,
                message: "Ürün Adı Alanı Boş Geçilemez",
              },
            ]}
          >
            <Input placeholder="Bir Ürün Adı Giriniz" />
          </Form.Item>

          <Form.Item
            name={"img"}
            label="Ürün Görseli Ekle"
            rules={[
              {
                required: true,
                message: "Ürün Görseli Alanı Boş Geçilemez",
              },
            ]}
          >
            <Input  placeholder="Bir Ürün Görseli Giriniz" />
          </Form.Item>


          <Form.Item
            name={"price"}
            label="Ürün Fiyatı Ekle"
            rules={[
              {
                required: true,
                message: "Ürün Fiyatı Alanı Boş Geçilemez",
              },
            ]}
          >
            <Input placeholder="Bir Ürün Fiyatı Giriniz"  />
          </Form.Item>

{/* 
          <Form.Item
            name={"title"}
            label="Ürün Adı Ekle"
            rules={[
              {
                required: true,
                message: "Ürün Adı Alanı Boş Geçilemez",
              },
            ]}
          >
            <Input />
          </Form.Item>
 */}


          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Add;
