import product from "./product";

export default function Image() {
  return (
    <div className="product-image-wrap">
      <img className="product-image" src={product.image} alt={product.name} />
      <span className="image-caption">SOUND, IN SOFT FOCUS</span>
    </div>
  );
}
