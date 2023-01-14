import React from "react";

import Header from "../components/header/Header";
import StatisticCard from "../components/statistics/StatisticCard";

const StatisticPage = () => {
  return (
    <div>
      <Header />
      <div className="px-6">
        <div className="text-4xl font-bold text-center mb-4">İstatistikler</div>

        <div className="statistic-section">
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard
              title="Toplam Müşteri"
              amount="10"
              img="/images/user.png"
            />
            <StatisticCard
              title="Toplam Kazanç"
              amount="1500 TL"
              img="/images/money.png"
            />
            <StatisticCard
              title="Toplam Satış"
              amount="50"
              img="/images/sale.png"
            />
            <StatisticCard
              title="Toplam Ürün"
              amount="10"
              img="/images/product.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticPage;
