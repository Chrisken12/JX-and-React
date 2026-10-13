import product from "./product";

export default function Price() {
  return (
    <div className="price-line">
      <span className="price">${product.price}</span>
      <span className="price-note">USD · free shipping</span>
    </div>
  );
}
