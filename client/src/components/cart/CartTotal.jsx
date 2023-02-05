import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";

import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart h-full max-h-[calc(100vh_-_110px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold -tracking-wide">
        Sepetteki Ürünler
      </h2>

      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cart.cartItems.map((item) => (
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center">
              <img
                src={item.img}
                alt=""
                className="w-16 h-16 object-cover"
                onClick={() => dispatch(deleteCart(item))}
              />
              <div className="flex flex-col ml-2">
                <b>{item.title}</b>
                <span>
                  {item.price} x {item.quantity}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <Button
                type="primary"
                size="small"
                className="w-full  flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />
              <span className="font-bold">{item.quantity}</span>
              <Button
                type="primary"
                size="small"
                className="w-full  flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="justify-between flex p-2">
            <b>Ara Toplam</b>
            <span>{(cart.total).toFixed(2)} TL</span>
          </div>
          <div className="justify-between flex p-2">
            <b>KDV %{cart.tax}</b>
            <span className="text-red-600">
              +{((cart.total * cart.tax) / 100).toFixed(2)} TL
            </span>
          </div>
        </div>

        <div className="border-b mt-4">
          <div className="justify-between flex p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">
              {(cart.total + (cart.total * cart.tax) / 100).toFixed(2)} TL
            </span>
          </div>
        </div>

        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            icon={<ClearOutlined />}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
