import React, { Fragment } from 'react';

const BudgetForm = () => {

    return(
        <Fragment>
            <h2>What is your budget?</h2>

            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Your budget"
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