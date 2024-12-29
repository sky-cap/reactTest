export function ProductCard({
  product,
  background = "slategray",
  onPurchase,
  width,
}) {
  return (
    <article
      style={{
        background,
        width: width,
        border: "1px solid white",
        padding: "1rem",
        borderRadius: "0.5rem",
        textAlign: "center",
      }}
    >
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {product.specification.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (<button onClick={() => onPurchase(product)}>
        Buy (From ${product.price})
      </button>)}
    </article>
  );
}

function Status({ stockCount }) {
    const notAvailableTemplate =  <p style={{ color: "lightsalmon" }}>Out of Stock</p>
    const availableTemplate = <p style={{ color: "lightgreen" }}>{stockCount} available</p>

  return stockCount > 0 ? (
    availableTemplate
  ) : (
    notAvailableTemplate
  );
}
