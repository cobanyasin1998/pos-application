import { Modal, Table, Form, Input, Button, message } from "antd";
import React from "react";
import { useState } from "react";

const Edit = ({
  isEditModalOpen,
  setisEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState({});

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values, categoryId: editingRow._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori Başarıyla Güncellendi");

      setCategories(
        categories.map((item) => {
          if (item._id === editingRow._id) {
            return { ...item, title: values.title };
          }
          return item;
        })
      );
    } catch (err) {
      message.danger("Kategori Güncellenemedi");
    }
  };

  const deleteCategory = (id) => {
    if (window.confirm("Emin misiniz")) {
      try {
        fetch("http://localhost:5000/api/categories/delete-category", {
          method: "DELETE",
          body: JSON.stringify({ categoryId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Kategori Silindi");

        setCategories(categories.filter((item) => item._id !== id));
      } catch (err) {
        message.danger("Kategori Silinemedi");
      }
    }
  };

  const columns = [
    {
      title: "Kategori Adı",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0" name="title">
              <Input defaultValue={record.title} />
            </Form.Item>
          );
        } else {
          return (
            <>
              <p>{record.title}</p>
            </>
          );
        }
      },
    },
    {
      title: "İşlemler",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              className="pl-0"
              type="link"
              onClick={() => {
                setEditingRow(record);
              }}
            >
              Düzenle
            </Button>

            <Button type="link" htmlType="submit" className="text-gray-500">
              Kaydet
            </Button>
            <Button
              type="link"
              danger
              onClick={() => deleteCategory(record._id)}
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
      <Modal
        title="Kategori İşlemleri"
        open={isEditModalOpen}
        onCancel={() => {
          setisEditModalOpen(false);
        }}
        footer={false}
      >
        <Form onFinish={onFinish}>
          <Table
            bordered
            dataSource={categories}
            columns={columns}
            rowKey={"_id"}
          />
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
