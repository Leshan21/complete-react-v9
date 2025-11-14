import { useState, useEffect } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

const Order = () => {

  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSizes, setPizzaSizes] = useState("Medium");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true)

  let price, selectedPizza;

  if(!loading){
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
  }

  async function fetchPizzaTypes(){
    const pizzaRes = await fetch("api/pizzas");
    const pizzaJson = pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(true);
  }

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type:</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              <option value="pepperoni">pepperoni pizza</option>
              <option value="margherita">margherita pizza</option>
              <option value="bbq-chicken">bbq chicken pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size:</label>
            <div>
              <span>
                <input
                  checked={pizzaSizes === "Small"}
                  type="radio"
                  name="pizza-size"
                  value="Small"
                  id="pizza-s"
                  onChange={(e) => setPizzaSizes(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSizes === "Medium"}
                  type="radio"
                  name="pizza-size"
                  value="Medium"
                  id="pizza-m"
                  onChange={(e) => setPizzaSizes(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSizes === "Large"}
                  type="radio"
                  name="pizza-size"
                  value="Large"
                  id="pizza-l"
                  onChange={(e) => setPizzaSizes(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="pepperoni"
              description="another pep pizzaaaa"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$13.99</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
