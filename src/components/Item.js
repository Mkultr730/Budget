import React from 'react';

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

export default Item;