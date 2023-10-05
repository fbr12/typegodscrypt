import { useEffect, useState } from "react";
import "./App.css";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function App() {
  const PRODUCT_URL = "https://dummyjson.com/products";
  const [info, setIata] = useState<Product[]>();
  useEffect(() => {
    async () =>
      fetch(PRODUCT_URL)
        .then((data) => data.json())
        .then((data) => setIata(data.products));
  }, []);
  console.log(info ? info : null);
  return (
    <>
      {info?.map((product: Product) => {
        return <p>{product.title}</p>;
      })}
    </>
  );
}

export default App;
