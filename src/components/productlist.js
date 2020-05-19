import React, { Component } from 'react';
import Product from '../components/product';
import { ProductConsumer } from '../context';
import Title from './title';

class ProductList extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products"/>
                        <div className="row">
                            <ProductConsumer>
                                {
                                    (value) => {
                                        return value.products.map(product => {
                                            return <Product key={product.id} product={product} />
                                        });
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
    

export default ProductList;