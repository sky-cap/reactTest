import './ProductList.css';


export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div className="ListContainer">{props.children}</div>
    </>
  );
}
