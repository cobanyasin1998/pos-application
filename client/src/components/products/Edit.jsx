import { Table, Form, Button, message, Modal, Select, Input } from "antd";
import React from "react";
import { useState, useEffect } from "react";

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({});

  const [form] = Form.useForm();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        message.danger("Bğlantı Hatası");
      }
    };
    getProducts();
  }, []);
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
        message.danger("Bğlantı Hatası");
      }
    };
    getCategories();
  }, []);
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün Başarıyla Güncellendi");

      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          }
          return item;
        })
      );
    } catch (err) {
      message.danger("Ürün Güncellenemedi");
    }
  };

  const deleteProduct = (id) => {
    if (window.confirm("Emin misiniz")) {
      try {
        fetch("http://localhost:5000/api/products/delete-product", {
          method: "DELETE",
          body: JSON.stringify({ productId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Ürün Silindi");

        setProducts(products.filter((item) => item._id !== id));
      } catch (err) {
        message.danger("Ürün Silinemedi");
      }
    }
  };

  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "title",
      width: "4%",
      render: (_, record) => {
        return (
          <>
            <p>{record.title}</p>
          </>
        );
      },
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      width: "4%",
      render: (_, record) => {
        return (
          <img src={record.img} alt="" className="w-full h-20 object-cover" />
        );
      },
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      width: "4%",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      width: "4%",
    },
    {
      title: "İşlemler",
      dataIndex: "action",
      width: "4%",

      render: (text, record) => {
        return (
          <div>
            <Button
              className="pl-0"
              type="link"
              onClick={() => {
                setIsEditModalOpen(true);
                setEditingItem(record);
              }}
            >
              Düzenle
            </Button>

            <Button
              type="link"
              danger
              onClick={() => deleteProduct(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        bordered
        dataSource={products}
        scroll={{
          x: 1000,
          y: 600,
        }}
        columns={columns}
        rowKey={"_id"}
      />

      <Modal
        title="Yeni Ürün Ekle"
        open={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
        }}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
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
              Kaydet
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
