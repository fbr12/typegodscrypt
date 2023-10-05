import { Product } from "../Context/ProductContext";

interface CardProps {
  product: Product;
}

const randomSelect = (array: string[]) => {
  const max = Math.ceil(array.length);
  const min = Math.floor(0);
  return array[Math.floor(Math.random() * (max - min + 1) + min)];
};

function Card(props: CardProps) {
  const { product } = props;
  console.log(props);
  return (
    <div className="product">
      <div className="info">
        <img src={randomSelect(product.images)} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div className="price"></div>
    </div>
  );
}

export { Card };
