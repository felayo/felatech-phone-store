import React from 'react';
import Title from '../title';
import CartColumns from './cartColumns';
import EmptyCart from './emptyCart';
import {ProductConsumer} from '../../context';
import CartList from './cartLIst';
import CartTotal from './cartTotal';

const Cart = () => (
    <section>
        <ProductConsumer>
            {
                value => {
                    const {cart} = value;
                    if(cart.length > 0) {
                        return(
                            <React.Fragment>
                                <Title name="Your" title="Cart" />
                                <CartColumns />
				                <CartList value={value}/>
                                <CartTotal value={value} />
                            </React.Fragment>
                        );
                    } else {
                        return <EmptyCart />
                    }
                }
            }
        </ProductConsumer>
        {/* <ProductConsumer>
            {
                value => {
                    if(value.cart === 0) {
                        return <EmptyCart />
                    }else {
                        return(
                            <div>
                                <Title name="Your" title="Cart" />
                                <CartColumns />
                                <CartList value={value}/>
                            </div>
                        );
                    }
                }
            }
        </ProductConsumer> */}
        
    </section>
);

export default Cart;