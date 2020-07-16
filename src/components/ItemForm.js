import React, { useState } from 'react';

const ItemForm = () => {

    return(
        <form>
            <h2>Add new item</h2>

            <div className="campo">
                <label>Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Food"
                />
            </div>

            <div className="campo">
                <label>Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$100"
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