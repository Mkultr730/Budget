import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import ItemForm from './components/ItemForm';
import Item from './components/Item';

function App() {

  const [budget, setBudget] = useState(0);
  const [remain, setRemain] = useState(0);
  const [items, setItems] = useState([]);

  const addNewItem = item => {
    console.log(item);
    setItems([...items, item]);
  }
    

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="contenido-principal contenido">

          { budget <= 0 ? 
            (
              <BudgetForm 
                setBudget={setBudget}
                setRemain={setRemain}
              />
            )
            :(
              <div className="row">
                <div className="one-half column">
                  <ItemForm 
                    addNewItem={addNewItem}
                  />
                </div>
                <div className="one-half column">

                  <div className="gastos-realizados">
                    <h2>List</h2>
                    { items.map( item => (
                      <Item 
                        item={item}
                        key={item.id}
                      />
                      ))
                    }
                  </div>

                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
