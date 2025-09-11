import React from "react";
import styles from "../Dashboard/Dashboard.module.css";
import { Routes, Route } from "react-router-dom";
import Categories from "../Dashboard/Categories";
import SubCategories from "../Dashboard/SubCategories";

const Dashboard = () => {
  return (
    <section className="home">
      <div className={`${styles.dashboardContainer} animeLeft`}>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path=":id?" element={<SubCategories />} />
        </Routes>
      </div>
    </section>
  );
};

export default Dashboard;
