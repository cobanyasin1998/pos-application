import React from "react";
import { Input, Modal, Form, Button, message, Select } from "antd";

const Add = ({
  isAddModalOpen,
  setisAddModalOpen,
  categories,
  setProducts,
  products,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün Başarıyla Eklendi");
      form.resetFields();

      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]);

      setisAddModalOpen(false)
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
            <Input placeholder="Bir Ürün Görseli Giriniz" />
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
            <Input placeholder="Bir Ürün Fiyatı Giriniz" />
          </Form.Item>

          <Form.Item
            name={"category"}
            label="Ürün Kategorisi Ekle"
            rules={[
              {
                required: true,
                message: "Ürün Kategorisi Alanı Boş Geçilemez",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Ürün Kategorisi Seç"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare(optionB?.label ?? "")
              }
              options={categories}
            />
          </Form.Item>

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
