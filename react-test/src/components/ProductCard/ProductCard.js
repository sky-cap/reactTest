import { useState } from "react";
import { Fragment } from "react";
import styles from "./ProductCard.module.css";

export function ProductCard({
  product,
  background = "slategray",
  onPurchase,
  width,
}) {
  const [stockCount, setStockCount] = useState(product.stockCount);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setStockCount((prevStockCount) => prevStockCount - 1);
    onPurchase(product);
  }

  function handleTwoClicks() {
    setStockCount((prevStockCount) => prevStockCount - 2);
    onPurchase(product);
  }

  return (
    <article className={styles.Container} style={{ background, width }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
      {showMore && (
        <ul className={styles.List}>
          {product.specification.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      )}
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <Fragment>
          <p>Price: ${product.price}</p>
          <button onClick={handleClick}>Buy</button>
        </Fragment>
      )}
      {stockCount > 1 && (<button onClick={handleTwoClicks}>Buy 2</button>)}
      
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
