// TODO: create a component that displays a single bakery item

export default function BakeryItem({item, onClick}) {
    return <div className="BakeryItem">
        <h2>{item.name}</h2>
        <img 
        src={item.image} 
        alt={item.description}
      />
      <p>{item.description}</p>
      <h3>{item.price}</h3>
      <button onClick={() => onClick(item)}>Add to Cart</button>
    </div>
}
