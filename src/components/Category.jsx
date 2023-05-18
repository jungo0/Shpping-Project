import styles from "./Category.module.css";
import all from "../assets/All.png";
import product from "../assets/Product.png";
import category from "../assets/category.png";
import exhib from "../assets/Exhibition.png";
import brand from "../assets/Brand.png";
function Cateogroy({ type, currentType, setCurrentType }) {
    let imgSrc;
    let title;
    switch (type) {
        case "all":
            imgSrc = all;
            title = "전체";
            break;
        case "Product":
            imgSrc = product;
            title = "상품";
            break;
        case "Category":
            imgSrc = category;
            title = "카테고리";
        break;
        case "Exhibition":
            imgSrc = exhib;
            title = "기획전";
        break;
        case "Brand":
            imgSrc = brand;
            title = "브랜드";
        default:
            title = "브랜드";
        break;
  }

  const handleClick = () => {
    setCurrentType(type);
  };

  return (
    <div className={styles.typeBox} onClick={handleClick}>
      <img src={imgSrc} alt={type} />
      <div className={currentType === type ? styles.colored : styles.title}>
        {title}
      </div>
    </div>
  );
}

export default Cateogroy;
