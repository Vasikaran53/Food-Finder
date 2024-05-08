import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SideNav from "../ResponsiveNav/SideNav";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div>
        <Navbar />
        <Header />

        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
        <Footer />
      </div>
    </>
  );
};

export default Home;
