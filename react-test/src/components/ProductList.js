export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {props.children}
      </div>
    </>
  );
}
