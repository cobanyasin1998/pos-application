import { Modal, Table, Form, Input, Button } from "antd";
import React from "react";
import { useState } from "react";

const Edit = ({
  isEditModalOpen,
  setisEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState({});

  const columns = [
    {
      title: "Kategori Adı",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0">
              <Input />
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
              type="link"
              onClick={() => {
                setEditingRow(record);
              }}
            >
              Düzenle
            </Button>

            <Button type="text">Kaydet</Button>
            <Button type="text" danger>
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
        <Form>
          <Table bordered dataSource={categories} columns={columns} />
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
