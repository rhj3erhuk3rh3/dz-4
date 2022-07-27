import React from 'react';

function Products(props) {
    return (
        <ul>
            {
                props.products.map(
                    (product,key) => <li key={key}>{product}</li>
                )
            }

        </ul>
    );
}

export default Products;