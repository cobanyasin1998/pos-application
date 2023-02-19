import { Button,  Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PrintBill from "../components/bills/PrintBill";
import Header from "../components/header/Header";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billItems, setBillItems] = useState();

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bills/get-all");
        const data = await res.json();

        setBillItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    getBills();
  }, []);

  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      },
    },
    {
      title: "Ödeme Yöntemi",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => {
        return <span>{text} TL</span>;
      },
    },
    {
      title: "İşlemler",
      dataIndex: "actions",
      key: "actions",
      render: (text) => {
        return (
          <Button
            type="link"
            className="pl-0"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Yazdır
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-6">
        <div className="text-4xl font-bold text-center mb-4">Faturalar</div>
        <Table dataSource={billItems} columns={columns} bordered />
      </div>

      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default BillPage;
