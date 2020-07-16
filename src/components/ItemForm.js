import React, { useState } from 'react';
import Error from './Error';

import shortid from 'shortid';

const ItemForm = ({addNewItem}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();

        if (amount < 1 || isNaN(amount) || name.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        const item = {
            name,
            amount,
            id: shortid.generate()
        }

        addNewItem(item);

        setName('');
        setAmount(0);

    }

    return(
        <form
            onSubmit={addItem}
        >
            <h2>Add new item</h2>
            { error ? <Error message="Both fields are required or Invalid amount" /> : null}

            <div className="campo">
                <label>Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Food"
                    value={name}
                    onChange={ e => setName(e.target.value) }
                />
            </div>

            <div className="campo">
                <label>Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$100"
                    value={amount.toString()}
                    onChange={ e => setAmount(parseInt(e.target.value)) }
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add New Item"
            />
        </form>
    );
}

export default ItemForm;