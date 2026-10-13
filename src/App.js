import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import product from "./product";
import "./App.css";

// Add your first name here to personalize the note below the card.
const firstName = "";

export default function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Stillform home">
          <span className="wordmark-mark">s.</span> stillform
        </a>
        <span className="header-note">OBJECTS FOR SLOWER DAYS</span>
        <button className="bag-button" type="button" aria-label="Shopping bag">
          BAG <span>0</span>
        </button>
      </header>

      <section className="showcase" id="home">
        <div className="eyebrow"><span /> CURATED SOUND, CONSIDERED DESIGN</div>
        <Card className="product-card">
          <div className="card-grid">
            <Image />
            <Card.Body className="product-info">
              <div className="product-meta">
                <span>{product.category}</span>
                <span className="rating">★ {product.rating} <small>(128)</small></span>
              </div>
              <Name />
              <Price />
              <div className="divider" />
              <span className="detail-label">THE EVERYDAY ESCAPE</span>
              <Description />
              <div className="features">
                <span><i>✳</i> 40-hour battery</span>
                <span><i>◌</i> Adaptive quiet</span>
                <span><i>↗</i> Crafted to last</span>
              </div>
              <Button className="add-button" type="button">
                Add to your day <span aria-hidden="true">↗</span>
              </Button>
              <div className="shipping-note">Complimentary delivery · Easy 30-day returns</div>
            </Card.Body>
          </div>
        </Card>

        <div className="greeting" aria-live="polite">
          <span className="greeting-rule" />
          <p>{firstName ? `Hello, ${firstName}.` : "Hello, there!"}</p>
          {firstName && (
            <img
              className="greeting-image"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt={`${firstName}`}
            />
          )}
        </div>
      </section>

      <footer className="site-footer">
        <span>LESS, BUT BETTER.</span>
        <span>DESIGNED FOR THE IN-BETWEEN</span>
        <span>© STILLFORM 2026</span>
      </footer>
    </main>
  );
}
