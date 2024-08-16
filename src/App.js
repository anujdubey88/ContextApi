import './App.css';
import { useContext, useState } from 'react';
import {CounterProvider, CounterContext, useCounter} from './context/counter'
import { useCard } from './context/card';

function App() {
  const addItem = (iname, iprice) => {
      const updatedCards = card.cards.map(item => 
          item.name === iname ? { ...item, count: item.count + 1 } : item
      );
  
      const isLaptopInCards = card.cards.some(item => item.name === iname);
  
      if (!isLaptopInCards) {
          updatedCards.push({ name: iname, price: iprice, count: 1 });
      }

      setPrice(totalprice+iprice);
      card.setCards(updatedCards);
  }
  const [totalprice,setPrice] =useState(0);

  // const counter = useContext(CounterContext);
  // const counter = useCounter();
  // console.log(counter);
  const card = useCard();
  console.log("card : ",card)
  return (
    <>
    {/* <h1>Counter : {counter.counter}</h1>
    <button onClick={()=> counter.setCounter(counter.counter+1)}>Increament</button>
    <button onClick={()=> counter.setCounter(counter.counter-1)}>decreament</button> */}

    <h1>ADD TO CARD</h1>
    <div className='ADDCard'>
      <div>
        <h2>LAPTOP</h2>
        <h4>PRICE : 100000</h4>
        <button onClick={() => addItem("LAPTOP",100000)}>
    ADD
</button>
      </div>
      <div>
        <h2>MOBILE</h2>
        <h4>PRICE : 50000</h4>
        <button onClick={() => addItem("MBILE", 50000)}>ADD</button>
      </div>
      <div>
        <h2>TABLE</h2>
        <h4>PRICE : 5000</h4>
        <button onClick={() => addItem("TABLE", 5000)}>ADD</button>
      </div>
      <div>
        <h2>CHAIR</h2>
        <h4>PRICE : 500</h4>
        <button onClick={() => addItem("CHAIR",500)}>ADD</button>
      </div>
    </div>
    <div className='total'>Total Price : {totalprice}</div>
    <div className='addedItem'>
      {card && card.cards.map((item) => (
        <div className='item' key={item.name}>
          <div>Name: {item.name}</div>
          <div>Price: {item.price}</div>
          <div>Count: {item.count}</div>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
