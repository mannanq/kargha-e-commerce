import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';

export default class ProductList extends Component {
    state = {
        product: storeProducts
    };
    render() {
        console.log(this.state.product);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        {/* proucts row */}
                        <div className="row">{/* prodlist */}</div>
                    </div>
                </div>
            </React.Fragment>
            //   <Product>
        );
    }
}
