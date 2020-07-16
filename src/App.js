import React from 'react';
import BudgetForm from './components/BudgetForm';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="contenido-principal contenido">
         <BudgetForm />
        </div>
      </header>
    </div>
  );
}

export default App;
