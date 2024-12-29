export function ProductCard() {
  const product = {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
    price: 999,
  };
  

  return (
    <article style={{ border: "1px solid white", padding: "1rem", borderRadius: "0.5rem", textAlign: "center" }}>
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
      <button>Buy (From ${product.price})</button>
    </article>
  );
}
