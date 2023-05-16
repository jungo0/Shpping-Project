import Item from "../components/UI/Item";
import Cateogries from "../components/Categories";
import styles from "./ProductListPage.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function ProductListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=10", {
        method: "GET",
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div className={styles.mainbox}>
      <h1 className={styles.title}>상품 리스트</h1>
      <div className={styles.listWrapper}>
        {data.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </div>
  );
}

export default ProductListPage;
