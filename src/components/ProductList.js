import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    state = {
        product: storeProducts
    };
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        {/* proucts row */}
                        <div className="row">
                            {/* prodlist */}
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => (
                                        <Product
                                            product={product}
                                            key={product.id}
                                        />
                                    ));
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            //   <Product>
        );
    }
}
