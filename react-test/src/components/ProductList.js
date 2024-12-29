const styles = {
  Container: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
};

export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div style={styles.Container}>{props.children}</div>
    </>
  );
}
