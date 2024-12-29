const styles = {
  Container: {
    width: "100%",
    border: "1px solid white",
    padding: "1rem",
    borderRadius: "0.5rem",
    textAlign: "center",
  },
  List: {
    listStyle: "none",
    padding: 0,
  },
  NotAvailableStatus: {
    color: "lightsalmon",
  },
  AvailableStatus: {
    color: "lightgreen",
  },
};

export function ProductCard({
  product,
  background = "slategray",
  onPurchase,
  width,
}) {
  return (
    <article style={{...styles.Container, background, width}}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul style={styles.List}>
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
    <p style={styles.NotAvailableStatus}>Out of Stock</p>
  );
  const availableTemplate = (
    <p style={styles.AvailableStatus}>{stockCount} available</p>
  );

  return stockCount > 0 ? availableTemplate : notAvailableTemplate;
}
