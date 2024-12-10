import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import RightBar from "./components/RightBar";
import Layout from "./components/Layout";
import OrderList from "./components/OrderList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
        </div>
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Layout />
                  <RightBar />
                </>
              }
            />
            <Route path="/orderList" element={<OrderList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
