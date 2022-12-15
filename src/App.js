import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import SideBar from "./components/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [type, setType] = useState(["All Prices"]);
  const [items, setItems] = useState(bakeryData);
  const [sortHighToLow, setSortHighToLow] = useState(true);
  const [sortLowToHigh, setSortLowToHigh] = useState(false);
  const [priceRange, setPriceRange] = useState("All Prices");

  function sortHighToLowF() {
    setSortHighToLow(true);
    setSortLowToHigh(false);
  };

  function sortLowToHighF() {
    setSortHighToLow(false);
    setSortLowToHigh(true);
  };
  
  function addToCart(item) {
    console.log("item propts in main app.js " + item.properties)
    if (cart.some(cItem => cItem === item)) {
      return
    } else {
      setCart([...cart, item]);
      const newTotal = Math.round((total + item.price) * 100)/100
      setTotal(newTotal);
      //item.properties = [...item.properties, "Fave"];
    }
  };

  function removeFromCart(item) {
    if (cart.some(cItem => cItem === item)) {
      const updatedCart = cart.filter((cartItem) => cartItem !== item);
      setCart(updatedCart);
      const newTotal = Math.round((total - item.price) * 100)/100
      setTotal(newTotal);
      // const updatedPropts = item.properties.filter((propt) => propt !== "Fave");
      // item.properties = updatedPropts
    }
  };

  const selectFilterType = eventkey => {
    setType([...type, eventkey]);
    console.log("selected filter " + [...type, eventkey]);
  };

  const removeFilterType = eventkey => {

    const updatedList = type.filter((event) => event !== eventkey);
    setType(updatedList);
    console.log("remove filter " + eventkey)
  };

  const handleFilterCheckChange = eventkey => {
    if (type.some(itemd => itemd === eventkey)) {
      removeFilterType(eventkey);
    } else {
      selectFilterType(eventkey)
    }
    console.log(type + " filters")
  }

  function handleRadioPress(eventkey) {
    console.log("handle press price range " + priceRange);
    //removeFilterType(priceRange);
    const updatedList = type.filter((event) => event !== priceRange);
    setPriceRange(eventkey.target.value);
    setType([...updatedList, eventkey.target.value]);
    //selectFilterType(eventkey.target.value);
    console.log(eventkey.target.value + " val");
    console.log("updated filters " + [...updatedList, eventkey.target.value]);
  }



  // add deselect checkbox functionality

  const matchesFilterType = item => {
    let isTrue = true;
    //console.log(type)
    //console.log(item)
    {type.map((ftype) => {
      if (item.properties.indexOf(ftype) === -1) {
        // !(item.properties.some(property => property === ftype))){
        isTrue = false;
      }
    })}
    return isTrue;
  }

  const matchesSortType = (a,b) => {
    if (sortHighToLow) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  }

  //const filteredData = bakeryData.filter(matchesFilterType);


  return (
    
    <div className="App">
      <h1>Scripts' Scones and Java</h1>
      <div className="Main-grid">
      <div className="Item-container">
        {
        items.filter(matchesFilterType).sort((a, b) => (matchesSortType(a,b))).map((item, index) => (
          <BakeryItem item={item} onAddClick={addToCart} onRemClick={removeFromCart}/>
        ))}
      </div>
      <SideBar cart={cart} total={total} sortHighToLow={sortHighToLow} sortLowToHigh={sortLowToHigh} sortHighToLowF={sortHighToLowF} sortLowToHighF={sortLowToHighF} priceRange={priceRange} handleFilterCheckChange={handleFilterCheckChange} handleRadioPress={handleRadioPress}></SideBar>
      </div>
    </div>
  );
}

export default App;
