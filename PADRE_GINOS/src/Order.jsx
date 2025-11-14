import Pizza from "./Pizza";

const Order = () => {
  const pizzaTypes = "Margherita";
  const pizzaSizes = "Medium";

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type:</label>
            <select name="pizza-type" id="pizza-type">
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
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza type = "pepperoni" description="another pep pizzaaaa" image = "/public/pizzas/pepperoni.webp"/>
            <p>$13.99</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
