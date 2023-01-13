import React from "react";

import Header from "../components/header/Header";

const StatisticPage = () => {
  return (
    <div>
      <Header />
      <div className="px-6">
        <div className="text-4xl font-bold text-center mb-4">İstatistikler</div>
        <div className="text-xl">
            <h2>Hoş geldin <span className="text-green-700 font-bold text-large">Admin</span>.</h2>
        </div>
      </div>
    </div>
  );
};

export default StatisticPage;
