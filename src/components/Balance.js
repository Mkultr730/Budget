import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

Balance.propTypes = {
    budget: PropTypes.number.isRequired,
    remain: PropTypes.number.isRequired,
}

export default Balance;