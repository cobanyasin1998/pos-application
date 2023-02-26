import { Table } from "antd";
import React, { useState, useEffect } from "react";

import Header from "../components/header/Header";

const CustomerPage = () => {
  const [billItems, setBillItems] = useState([]);

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
      title: "İşlem Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      },
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-6">
        <div className="text-4xl font-bold text-center mb-4">Müşterilerim</div>
        <Table dataSource={billItems} columns={columns} bordered />
      </div>
    </div>
  );
};

export default CustomerPage;
