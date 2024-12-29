import styles from './ProductCard.module.css';

export function ProductCard({
  product,
  background = "slategray",
  onPurchase,
  width,
}) {
  return (
    <article className={styles.Container} style={{ background, width}}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul className={styles.List}>
        {product.specification.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
          Buy (From ${product.price})
        </button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p className={styles.NotAvailableStatus}>Out of Stock</p>
  );
  const availableTemplate = (
    <p className={styles.AvailableStatus}>{stockCount} available</p>
  );

  return stockCount > 0 ? availableTemplate : notAvailableTemplate;
}
