import React from 'react';
import PropTypes from 'prop-types';

const Item = ({item}) => {

    return(
        <li className="gastos">
            <p>
                { item.name }

                <span className="gasto"> $ {item.amount} </span>
            </p>
        </li>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default Item;