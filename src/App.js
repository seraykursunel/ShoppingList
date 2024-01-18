import { useState } from "react";
import "./styles.css";
import Input from "./input";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = (name) => {
    const item = { name, id: crypto.randomUUID() };
    setShoppingList([...shoppingList, item]);
  };
  eventHandler = (e) => {
    // console.log(e);
    const updatedList = shoppingList.filter((item) => {
      if (item.id !== e.target.id) {
        return item;
      }
    });
    setShoppingList(updatedList);
  };

  return (
    <div className="App">
      <h1>Alışveriş Listesi</h1>
      <Input onSubmit={addItem} />
      <ul>
        {shoppingList.map((listItem) => {
          return (
            <div className="list" key={listItem.id}>
              <li>{listItem.name}</li>
              <span onClick={eventHandler} id={listItem.id}>
                ❌
              </span>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
