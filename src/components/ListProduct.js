import React from 'react'
import Filter from './Filter';
const ListProduct = (props) => {
    return (
        <div>
            <div className="products">
                <Filter />
                <div className="list-product">
                    <div className="product-item">
                        {props.listProducts.slice(0,6).map((item ,index) => {
                            return (
                                <div className="item" key={index}>
                                <div className="img">
                                    <img src="./img/Image.png" alt />
                                </div>
                                <div className="sub-product">
                                    <div className="title">
                                        <div className="product-name">
                                            <h4 className="title-heading">{item.name}</h4>
                                            <h4 className="category">{item.category}</h4>
                                        </div>
                                        <p className="price">$:{item.price}</p>
                                    </div>
                                    <div className="hehe">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="cart">
                                            <img src="./img/Add to Cart Button.png" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                       
                    </div>
                    <div className="pagination">
                        <a href="#">»</a>
                        <a href="#">6</a>
                        <a href="#">5</a>
                        <a href="#">4</a>
                        <a href="#">3</a>
                        <a href="#">2</a>
                        <a href="#">1</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListProduct
