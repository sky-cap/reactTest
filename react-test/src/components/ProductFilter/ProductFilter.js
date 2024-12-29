import styles from "./ProductFilter.module.css";

export function ProductFilter({ filters, onFilter }) {
  return (
    <div className={styles.Center}>
      Price: $
      <input
        defaultValue={filters.price.min}
        type="number"
        min={0}
        max={999}
        onChange={(e) => onFilter('min', e.target.value)}
      />{" "}
      - $
      <input
        defaultValue={filters.price.max}
        type="number"
        min={0}
        max={999}
        onChange={(e) => onFilter('max',e.target.value)}
      />
    </div>
  );
}
