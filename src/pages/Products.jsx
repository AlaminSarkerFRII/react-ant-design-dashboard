import { Card } from "antd";
import React from "react";
import ProductsTable from "../table/ProductsTable";

const Products = () => {
  return (
    <Card style={{ width: "100%", backgroundColor: "blue" }}>
      <ProductsTable />
    </Card>
  );
};

export default Products;
