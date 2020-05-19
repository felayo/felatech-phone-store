import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';

const Details = () => (
    <ProductConsumer>
        {
            value => {
                const { id, company, img, info, price, title, inCart} = value.detailProduct;
                return (
                    <div className="container py-5">
                        {/* start title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end title */}

                        {/* Product Info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} alt="product" className="img-fluid" />
                            </div>
                            {/* Product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                                <h2>Model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made by: <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        Price: <span><strike>N</strike></span>
                                        {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about product:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>

                                {/* button */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>Back to Products</ButtonContainer>
                                    </Link>
                                    {/* Here "cart" is passed as prop and styled on button component " */}
                                    <ButtonContainer
                                    cart 
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }} 
                                    disabled={inCart ? true: false}>

                                        {inCart ? "inCart" : "Add to cart"}

                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    </ProductConsumer>
);

export default Details;