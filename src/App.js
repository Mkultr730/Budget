import React, { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import ItemForm from './components/ItemForm';
import Item from './components/Item';
import Balance from './components/Balance';

function App() {

  const [budget, setBudget] = useState(0);
  const [remain, setRemain] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [createitem, setCreateitem] = useState(false);

  useEffect(() => {
    if (createitem) {
      setItems([...items, item]);

      const remainingBudget = remain - item.amount;
      setRemain(remainingBudget);

      setCreateitem(false);
    }
  }, [item, items, createitem, remain])  

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
                    setItem={setItem}
                    setCreateitem={setCreateitem}
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

                    <Balance 
                      budget={budget}
                      remain={remain}
                    />
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
