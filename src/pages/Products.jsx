import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
  return (
    <Tabs defaultActiveKey="products" id="uproducts-tab" className="mb-3">
      <Tab eventKey="products" title="Products">
        <ProductsGrid />
      </Tab>
      <Tab eventKey="new_product" title="New Product" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Products;
