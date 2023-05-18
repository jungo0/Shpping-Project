import Category from "./UI/Category";
import styles from "./Categories.module.css";

function Categories({ currentType, setCurrentType }) {
  const categories = ["all",  "Product", "Category", "Exhibition", "Brand",];
  return (
    <div className={styles.categories}>
      {categories.map((type) => (
        <Category
          type={type}
          currentType={currentType}
          setCurrentType={setCurrentType}
        />
      ))}
    </div>
  );
}
export default Categories;