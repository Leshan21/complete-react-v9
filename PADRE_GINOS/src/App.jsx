import Pizza from "./Pizza.jsx";

function App() {


  return (
   <div className="app">
    <h1>Padro Gino's - Order Now </h1>
    <Pizza name = "pepperoni"  description = "pep, chees, stuff" image={"/public/pizzas/pepperoni.webp"}/>
    <Pizza name = "Americano" description = "mushroom, onion, green pepper" image={"/public/pizzas/big_meat.webp"}/>
    <Pizza name = "hawaiian" description = "ham, pineapple" image={"/public/pizzas/hawaiian.webp"}/>
   </div>
  )
}

export default App
