import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className={styles.card}>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <Link to={`/details/${product.id}`}>Details</Link>
    </div>
  );
}

export default Card;
