import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductsGrid from "./ProductsGrid";
import NewProducts from "./NewProducts";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";

const Products = ({ loginState }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginState.isLoggedIn) {
      loginState.setLoggedIn(false);
      navigate("/login");
    }
  });
  return (
    <>
      <NavbarComponent loginState={loginState} />
      <Tabs defaultActiveKey="products" id="uproducts-tab" className="mb-3">
        <Tab eventKey="products" title="Products">
          <ProductsGrid />
        </Tab>
        <Tab eventKey="new_product" title="New Product" className="m-3">
          <NewProducts />
        </Tab>
      </Tabs>
    </>
  );
};

export default Products;
