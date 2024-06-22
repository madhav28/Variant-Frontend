import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DropdownComponent from "../components/DropdownComponent";
import React, { useEffect, useState } from "react";
import { createInventory } from "../api/inventoryApi";

const kindOptions = [
  { label: "Stock", value: "1" },
  { label: "Non Stock", value: "2" },
  { label: "Supplies", value: "3" },
];

const typeOptions = [
  { label: "SLAB", value: "1" },
  { label: "Sample", value: "2" },
  { label: "Tile", value: "3" },
  { label: "Sink", value: "4" },
  { label: "A-Frame", value: "5" },
  { label: "Cut-to-Size-Quartz", value: "6" },
  { label: "Engineered", value: "7" },
];

const categoryOptions = [
  { label: "Granite", value: "1" },
  { label: "Marble", value: "2" },
  { label: "Quartz", value: "3" },
  { label: "Soapstone", value: "4" },
  { label: "Porcelain", value: "5" },
  { label: "Limestone", value: "6" },
  { label: "Onyx", value: "7" },
];

const subCategoryOptions = [];

const groupOptions = [
  { label: "Basic", value: "1" },
  { label: "Premium", value: "2" },
  { label: "Semi-Exotic", value: "3" },
  { label: "Semi-precious", value: "4" },
  { label: "Exotics", value: "5" },
  { label: "Super Exotic", value: "6" },
  { label: "Special Order", value: "7" },
  { label: "Staples", value: "7" },
];

const originOptions = [{ label: "India", value: "1" }];

const priceRangeOptions = [
  { label: "Group 1", value: "1" },
  { label: "Group 2", value: "2" },
  { label: "Group 3", value: "3" },
  { label: "Group 4", value: "4" },
  { label: "Group 5", value: "5" },
];

const prefSupplierOptions = [{ label: "Anagha", value: "1" }];

const NewProducts = () => {
  const [kindState, setKindState] = useState("");
  const [typeState, setTypeState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [subCategoryState, setSubCategoryState] = useState("");
  const [groupState, setGroupState] = useState("");
  const [originState, setOriginState] = useState("");
  const [priceRangeState, setPriceRangeState] = useState("");
  const [prefSupplierState, setPrefSupplierState] = useState("");

  const [nameState, setNameState] = useState("");

  const [skuState, setSkuState] = useState("");

  const updateKindState = (newState) => {
    setKindState(newState);
  };

  const updateTypeState = (newState) => {
    setKindState(newState);
  };

  const updateCategoryState = (newState) => {
    setKindState(newState);
  };

  const updateSubCategoryState = (newState) => {
    setKindState(newState);
  };

  const updateGroupState = (newState) => {
    setKindState(newState);
  };

  const updateOriginState = (newState) => {
    setKindState(newState);
  };

  const updatePriceRangeState = (newState) => {
    setKindState(newState);
  };

  const updatePrefSupplierState = (newState) => {
    setKindState(newState);
  };

  const onSubmitClick = () => {
    const dataObj = {};
    dataObj["item_name"] = nameState;
    dataObj["sku"] = skuState;
    dataObj["kind"] = kindState;
    dataObj["type"] = typeState;
    dataObj["category"] = categoryState;
    dataObj["sub_category"] = subCategoryState;
    dataObj["item_group"] = groupState;
    dataObj["origin"] = originState;
    dataObj["price_range"] = priceRangeState;
    dataObj["pref_supplier"] = prefSupplierState;

    try {
      createInventory(dataObj);
      console.log("Data created successfully");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  return (
    <Form noValidate>
      <Form.Group as={Col} md="4">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Name"
          onChange={(e) => setNameState(e.target.value)}
        />
      </Form.Group>
      <Form.Group as={Col} md="4">
        <Form.Label>SKU:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="SKU"
          onChange={(e) => setSkuState(e.target.value)}
        />
      </Form.Group>
      <DropdownComponent
        options={kindOptions}
        placeholder="Kind:"
        updateState={updateKindState}
      />
      <DropdownComponent
        options={typeOptions}
        placeholder="Type / Form:"
        updateState={updateTypeState}
      />
      <DropdownComponent
        options={categoryOptions}
        placeholder="Category / Nature:"
        updateState={updateCategoryState}
      />
      <DropdownComponent
        options={subCategoryOptions}
        placeholder="Sub Category:"
        updateState={updateSubCategoryState}
      />
      <DropdownComponent
        options={groupOptions}
        placeholder="Group:"
        updateState={updateGroupState}
      />
      <DropdownComponent
        options={originOptions}
        placeholder="Origin:"
        updateState={updateOriginState}
      />
      <DropdownComponent
        options={priceRangeOptions}
        placeholder="Price Range:"
        updateState={updatePriceRangeState}
      />
      <DropdownComponent
        options={prefSupplierOptions}
        placeholder="Prefered Supplier:"
        updateState={updatePrefSupplierState}
      />
      <Button type="submit" className="mt-3" onClick={onSubmitClick}>
        Submit form
      </Button>
    </Form>
  );
};

export default NewProducts;
