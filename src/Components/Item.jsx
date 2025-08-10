import styles from "./Item.module.css";

export default function Item({ item }) {
  return (
    <div className={styles.ItemContainer}>
      <div className={styles.ImageContainer}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
          alt={item.name}
          className={styles.image}
        />
      </div>
      <div className={styles.NameContainer}>
        <div className={styles.Name}>{item.name}</div>
        <div className={styles.Amount}>
          {item.amount} {item.unit}
        </div>
      </div>
    </div>
  );
}
