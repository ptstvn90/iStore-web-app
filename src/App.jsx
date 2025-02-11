import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  Home,
  Layout,
  Product,
  AboutApple,
  AppleSupport,
} from "./router/routing";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/support"
          element={
            <Layout>
              <AppleSupport />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutApple />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;

