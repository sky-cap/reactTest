import "./App.css";
import { Fragment } from "react";
import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";

function App() {
  const products = [
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      stockCount: 10,
      price: 999,
    },
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      stockCount: 0,
      price: 499,
    },
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 14",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      stockCount: 6,
      price: 299,
    },
  ];

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`);
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          //Will use ID from the product object as the key - DB ID such as Mongo Hash ID
          <ProductCard
            onPurchase={handlePurchase}
            key={product.title}
            product={product}
          />
        ))}
      </ProductList>

      <h2 style={{ textAlign: "center" }}>Products under $500</h2>
      {products
        .filter((product) => product.price < 500)
        .map((product) => (
          <Fragment key={product.title}>
            <hr />
            <ProductCard style={{width: "100px"}} key={product.title} product={product} />
          </Fragment>
        ))}
    </div>
  );
}

export default App;
