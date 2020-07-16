import React, { Fragment, useState } from 'react';
import Error from './Error';

const BudgetForm = () => {

    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const setBudget = (e) => {
        setAmount(parseInt(e.target.value, 10));
    }

    const submitBudget = (e) => {
        e.preventDefault();

        if (amount < 1 || isNaN( amount )) {
            setError(true);
            return;
        }
        setError(false);
    }

    return(
        <Fragment>
            <h2>What is your budget?</h2>

            { error ? <Error message="Invalid Input" /> : null }

            <form
                onSubmit={submitBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Your budget"
                    onChange={setBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Send"
                />
            </form>
        </Fragment>
    );
}

export default BudgetForm;