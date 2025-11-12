const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello, React!")
  );
};

const pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "The pepperoni pizza"),
    React.createElement("p", {}, "mozzarella, pepperoni, tomato sauce"),
  ])
}

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));
} else {
  console.error('Root container not found: element with id "root"');
}
