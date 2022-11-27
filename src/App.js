import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.0);

  function addToCart(item) {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="container">
        {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} onClick={addToCart}/>
        ))}
    </div>
      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map((item) => (
            <p>
              {item.name} ${item.price}
            </p>
          ))}
          <h2>Total: {total}</h2>
      </div>
    </div>
  );
}

export default App;
