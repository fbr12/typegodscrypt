import { useContext } from "react";
import "./App.css";
import { ProductContext } from "./Context/ProductContext";
import { Card } from "./components/Card/Card.tsx";

function App() {
  const product = useContext(ProductContext);
  return (
    <section>
      {product?.map((item) => {
        return <Card key={item.id} product={item}></Card>;
      })}
    </section>
  );
}

export default App;
