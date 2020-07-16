import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const BudgetForm = ({ setRemain, setBudget }) => {

    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const setBudgetAmount = (e) => {
        setAmount(parseInt(e.target.value, 10));
    }

    const submitBudget = (e) => {
        e.preventDefault();

        if (amount < 1 || isNaN( amount )) {
            setError(true);
            return;
        }
        setError(false);
        setBudget(amount);
        setRemain(amount);
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
                    onChange={setBudgetAmount}
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

BudgetForm.propTypes = {
    setRemain: PropTypes.func.isRequired,
    setBudget: PropTypes.func.isRequired
}

export default BudgetForm;