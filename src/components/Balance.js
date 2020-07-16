import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';

const Balance = ({budget, remain}) => {

    return(
        <Fragment>
            <div className="alert alert-primary">
                Budget: {budget}
            </div>
            <div className={checkBudget(budget, remain)}>
                Remaining: {remain}
            </div>
        </Fragment>
    );
}

export default Balance;