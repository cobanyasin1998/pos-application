import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Area, Pie } from "@ant-design/plots";
import Header from "../components/header/Header";
import StatisticCard from "../components/statistics/StatisticCard";

const StatisticPage = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        ;
      }
    };
    getCategories();
  }, []);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("http://localhost:5000/api/bills/get-all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "customerName",
    yField: "subTotal",
    xAxis: {
      range: [0, 1],
    },
  };

  const config2 = {
    appendPadding: 10,
    data: data,
    angleField: "subTotal",
    colorField: "customerName",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Toplam Değer",
      },
    },
  };

  const totalAmount = () => {
    const amount = data.reduce((total, item) => item.totalAmount + total, 0);
    return `${amount.toFixed(2)} TL`;
  };

  return (
    <div>
      <Header />
      <div className="px-6 md:pb-0 pb-20">
        <div className="text-4xl font-bold text-center mb-4">İstatistikler</div>

        <div className="statistic-section">
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard
              title="Toplam Müşteri"
              amount={data?.length}
              img="/images/user.png"
            />
            <StatisticCard
              title="Toplam Kazanç"
              amount={totalAmount()}
              img="/images/money.png"
            />
            <StatisticCard
              title="Toplam Satış"
              amount={data?.length}
              img="/images/sale.png"
            />
            <StatisticCard
              title="Toplam Ürün"
              amount={products?.length}
              img="/images/product.png"
            />
          </div>

          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...config} />
            </div>
            <div>
              <Pie {...config2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticPage;
