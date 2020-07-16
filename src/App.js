import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import ItemForm from './components/ItemForm';

function App() {

  const [budget, setBudget] = useState(0);
  const [remain, setRemain] = useState(0);
    

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
                  <ItemForm />
                </div>
                <div className="one-half column">
                  2
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
