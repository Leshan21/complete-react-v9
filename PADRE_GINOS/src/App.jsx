import Pizza from "./Pizza.jsx";

function App() {


  return (
   <div className="app">
    <h1>Padro Gino's - Order Now </h1>
    <Pizza name = "pepperoni"  description = "pep, chees, stuff"/>
    <Pizza name = "veggie" description = "mushroom, onion, green pepper"/>
    <Pizza name = "hawaiian" description = "ham, pineapple"/>
   </div>
  )
}

export default App
