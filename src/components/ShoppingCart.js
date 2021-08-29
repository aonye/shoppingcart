import React from 'react';

const ShoppingCart = (props) => {
    const images = displayImages(props.cart, props.delItem, props.editItem);
    return (
        <div>
            <div>Shopping Cart</div>
            {images}
            {images.length !== 0 ? <div>{`Grand Total: ${(calcTotal(props.cart)).toFixed(2)}`}</div> : null}
        </div>
    );
};

const displayImages = (obj, delItemClickHand, editItemClickHand) => {
    let arr = [];
    for (let objKey in obj) {
        const tempArr = obj[objKey].map((item) => {
            return (
                <div className='shoppingcart' key={item.id} id={`${objKey + item.id}`} >
                    <img src={item.image} alt='' />
                    <div>
                        <div style={{ display: 'inline-block' }}>{`Quantity: x`}</div>
                        <div className='blur' onBlur={(e) => editItemClickHand(e)} style={{ display: 'inline-block' }} contentEditable='true'>{`${item.count}`}</div>
                    </div>
                    <div>{`Price: ${(item.count * item.price).toFixed(2)}`}</div>
                    <button onClick={(e) => delItemClickHand(e)}>Delete Item</button>
                </div >
            );
        });
        arr = arr.concat(tempArr);
    }
    return arr.map((item) => {
        return item;
    })
};

const calcTotal = (obj) => {
    let runningTotal = 0;
    for (let objKey in obj) {
        const tempVal = obj[objKey].reduce((acc, item) => {
            console.log(acc);
            return (item.price * item.count) + acc;
        }, 0);
        runningTotal += tempVal;
    }
    return runningTotal;
};

export default ShoppingCart;