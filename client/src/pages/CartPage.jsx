import { Button, Card, Table } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, deleteCart } from "../../src/redux/cartSlice";

import { useSelector } from "react-redux";
import CreateBill from "../components/cart/CreateBill";
import Header from "../components/header/Header";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const CardPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      width: "120px",
      render: (text) => {
        return <img src={text} alt="" className="w-full h-20 object-cover" />;
      },
    },
    {
      title: "Ürün Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (txt) => {
        return <span>{txt.toFixed(2)} TL</span>;
      },
    },
    {
      title: "Ürün Adeti",
      dataIndex: "quantity",
      key: "quantity",
      render: (txt, record) => {
        return (
          <div className="flex items-center gap-x-2">
            <Button
              type="primary"
              size="small"
              onClick={() => dispatch(increment(record))}
              className="w-full  flex items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-bold">{txt}</span>
            <Button
              type="primary"
              size="small"
              onClick={() => dispatch(decrement(record))}
              className="w-full  flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        );
      },
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "price",
      key: "price",
      render: (txt, record) => {
        return <span>{(record.quantity * record.price).toFixed(2)} TL</span>;
      },
    },
    {
      title: "İşlemler",
      render: (_, record) => {
        return (
          <Button
            type="link"
            danger
            onClick={() => {
              dispatch(deleteCart(record));
            }}
          >
            Sil
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1200,
            y: 300,
          }}
        />

        <div className="cart-total flex justify-end mt-2">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>{cart.total.toFixed(2)}₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %{cart.tax}</span>
              <span className="text-red-600">
                +{((cart.total * cart.tax) / 100).toFixed(2)}₺
              </span>
            </div>
            <div className="flex justify-between">
              <b> Genel Toplam</b>
              <b> {(cart.total + (cart.total * cart.tax) / 100).toFixed(2)}₺</b>
            </div>
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>

      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default CardPage;
