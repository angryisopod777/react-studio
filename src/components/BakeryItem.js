// TODO: create a component that displays a single bakery item
import { useState } from "react";
import  "./BakeryItem.css";
export default function BakeryItem({item, onAddClick, onRemClick}) {
    // const [remDisabled, setRemDisabled] = useState(true);
    // const [addDisabled, setAddDisabled] = useState(false);
    
    // determine if item is already a fave
    // if (item.properties.some(propt => propt === "Fave")) {
    //   setAddDisabled(true)
    //   setRemDisabled(false)
    // }
    //const [numItemInCart, setNumItemInCart] = useState(0);
    function handleRemChange(item) {
      console.log("handle item rem change " + item.properties)
      if (item.properties.some(propt => propt === "Fave")) {
        console.log("properties rem change " + item.properties)
        // setRemDisabled(true);
        // setAddDisabled(false);
        // remove fave category
        const updatedCat = item.properties.filter((propt) => propt !== "Fave");
        item.properties = updatedCat;
        onRemClick(item);
      }
    }

    function handleAddChange(item) {
        //setNumItemInCart(numItemInCart + 1);
      if (item.properties.some(propt => propt === "Fave")) {
        return;
      } else {
        // setAddDisabled(true);
        // setRemDisabled(false);
        // add to fave category
        item.properties = [...item.properties, "Fave"];
        onAddClick(item);
      }
    }

    function getFoodType() {
      let dessert = ""
      let breakfast = ""
      if (item.properties.some(food => food === "dessert")) {
        dessert = "Dessert"
      }
      if (item.properties.some(food => food === "breakfast")) {
        breakfast = "Breakfast"
      }
      if (dessert === "Dessert" && breakfast === "Breakfast") {
        return "Breakfast, Dessert"
      } else if (dessert === "Dessert") {
        return dessert;
      } else if (breakfast === "Breakfast") {
        return breakfast;
      }
      

    }

    return <div className="BakeryItem">
        <h2>{item.name}</h2>
        <img 
        src={item.image} 
        alt={item.description}
        />
      <p>{item.description}</p>
      <p>Type of food: {getFoodType()}</p>
      <h3>{item.price}</h3>
      {(item.properties.some(propt => propt ==="Fave")) ? <button disabled>Add to Favorites</button> :
      <button onClick={() => handleAddChange(item)}>Add to Favorites</button>}
      {(item.properties.some(propt => propt ==="Fave")) ? <button onClick={() => handleRemChange(item)}>Remove from Favorites</button>:<button disabled>Remove from Favorites</button>
      }
    </div>
}
