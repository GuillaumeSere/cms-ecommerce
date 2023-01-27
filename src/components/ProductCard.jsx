import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            
                <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                    <Link to="/:id" className="product-card position-relative mb-2">
                        <div className="wishlist-icon position-absolute">
                            <button className='border-0 bg-transparent'>
                                <img src="../images/wish.svg" alt="wishlist" />
                            </button>
                        </div>
                        <div className="product-image">
                            <img src="../images/watch.jpg" className='img-fluid' alt="product " />
                            <img src="../images/watch-1.jpg" className='img-fluid' alt="product " />
                        </div>
                        <div className="product-details">
                            <h6 className='brand'>Havels</h6>
                            <h5 className="product-title">
                                Kids headphones bulk 10 pack multi colored for students
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                                value={3}
                                edit={false}
                            />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dicta quidem vitae recusandae inventore neque pariatur
                                accusamus voluptates ab, atque ipsa totam fuga impedit
                                adipisci corrupti cupiditate delectus officiis non tenetur?
                            </p>
                            <p className="price">$100.00</p>
                        </div>
                        <div className="action-bar position-absolute">
                            <div className='d-flex flex-column gap-15'>
                                <button className='border-0 bg-transparent'>
                                    <img src="../images/prodcompare.svg" alt="compare" />
                                </button>
                                <button className='border-0 bg-transparent'>
                                    <img src="../images/view.svg" alt="view" />
                                </button>
                                <button className='border-0 bg-transparent'>
                                    <img src="../images/add-cart.svg" alt="addcart" />
                                </button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                    <Link to="/:id" className="product-card position-relative mb-2">
                        <div className="wishlist-icon position-absolute">
                            <button className='border-0 bg-transparent'>
                                <img src="../images/wish.svg" alt="wishlist" />
                            </button>
                        </div>
                        <div className="product-image">
                            <img src="../images/watch.jpg" className='img-fluid' alt="product " />
                            <img src="../images/watch-1.jpg" className='img-fluid' alt="product" />
                        </div>
                        <div className="product-details">
                            <h6 className='brand'>Havels</h6>
                            <h5 className="product-title">
                                Kids headphones bulk 10 pack multi colored for students
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                                value={3}
                                edit={false}
                            />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dicta quidem vitae recusandae inventore neque pariatur
                                accusamus voluptates ab, atque ipsa totam fuga impedit
                                adipisci corrupti cupiditate delectus officiis non tenetur?
                            </p>
                            <p className="price">$100.00</p>
                        </div>
                        <div className="action-bar position-absolute">
                            <div className='d-flex flex-column gap-15'>
                                <button className='border-0 bg-transparent'>
                                    <img src="../images/prodcompare.svg" alt="compare" />
                                </button>
                                <button className='border-0 bg-transparent'>
                                    <img src="../images/view.svg" alt="view" />
                                </button>
                                <button className='border-0 bg-transparent'>
                                    <img src="../images/add-cart.svg" alt="addcart" />
                                </button>

                            </div>
                        </div>
                    </Link>
                </div>
        

        </>
    )
}

export default ProductCard
