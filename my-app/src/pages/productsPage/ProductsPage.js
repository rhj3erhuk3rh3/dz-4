import React from 'react';
import Products from "../../components/products/Products";



class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            input: ""
        }
    }

    getProducts = () => {
        this.setState( {products: ['Apple','Orange','Potato']})
    }

    changeInput = (e) => {
        this.setState( {...this.state, input: e.target.value})
    }
    addProduct = (e) => {
        this.setState({products: [...this.state.products, this.state.input]})
        this.setState(this.state.value = '')
        console.log(this.state)
    }

    onClear = () => {
        this.setState({products : []})
    }

    render () {
        return (
            <div>
                <input type="text" onChange={this.changeInput} value={this.state.value}/>
                <button onClick={this.getProducts}>get product</button>
                <button onClick={this.onClear}>delete</button>
                <button onClick={this.changeInput}>change Input</button>
                <button onClick={this.addProduct}>add product</button>
                <Products products={this.state.products}/>
            </div>
        )
    };

}


export default ProductsPage;