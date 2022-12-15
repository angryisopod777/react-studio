import { useState } from "react";
import FormCheck from 'react-bootstrap/FormCheck';
export default function SideBar({cart, total, sortHighToLow, sortLowToHigh, sortHighToLowF, sortLowToHighF, priceRange, handleFilterCheckChange, handleRadioPress}) {
  //const [type, setType] = useState(["All Prices"]);
  
  //const [priceRange, setPriceRange] = useState("All Prices");


  
  return (
    <div className="Side-bar">
        <h2>Filter Items:</h2>

        <h4>Filter by Food Type:</h4>
        <FormCheck eventkey="breakfast" onChange={() => handleFilterCheckChange("breakfast")} on
            type={'checkbox'}
            label={`Breakfast`}
          />
        <FormCheck eventkey="dessert" onChange={() => handleFilterCheckChange("dessert")} on
            type={'checkbox'}
            label={`Dessert`}
          />
        <h4>Filter by Price:</h4>

        <form>
              <label>
                <input
                  type="radio"
                  value="All Prices"
                  defaultChecked
                  checked={priceRange === "All Prices"}
                  onChange={handleRadioPress}/>
                    <span> All Prices </span>
              </label>
              <br/>
              <label>
                <input
                  type="radio"
                  value="< $3"
                  checked={priceRange === "< $3"}
                  // checked={(e) => handleFilterCheckChange}
                  onChange={handleRadioPress}/>
                    <span> Under $3 </span>
              </label>
              <br/>

              <label>
                <input
                  type="radio"
                  value="$3-$5"
                  checked={priceRange === "$3-$5"}
                  onChange={handleRadioPress}/>
                    <span>$3 to $5</span>
              </label>
              <br/>

              <label>
                <input
                  type="radio"
                  value="> $5"
                  checked={priceRange === "> $5"}
                  onChange={handleRadioPress}/>
                    <span>Over $5</span>
              </label>
        </form>
        <h2>Sort Items By Price:</h2>
        <form>
        <label>
                <input
                  type="radio"
                  value="sortHighToLow"
                  defaultChecked
                  checked={sortHighToLow === true}
                  // checked={(e) => handleFilterCheckChange}
                  onChange={() => sortHighToLowF()}/>
                    <span> Sort by price (low to high) </span>
              </label>
        <br/>
        <label>
                <input
                  type="radio"
                  value="sortLowToHigh"
                  checked={sortLowToHigh === true}
                  // checked={(e) => handleFilterCheckChange}
                  onChange={() => sortLowToHighF()}/>
                    <span> Sort by price (high to low) </span>
              </label>

        </form>
        <h2>Favorite Items List:</h2>
        {cart.map((item) => (
            <p>
              {item.name} ${item.price}
            </p>
          ))}
        <h2>Total Price: {total}</h2>
        </div>);
}