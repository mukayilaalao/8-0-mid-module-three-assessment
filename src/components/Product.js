import React from "react";
import formatPrice from "../helpers/formatPrice";

class Product extends React.Component {
    render() {
        const {price,description,name,img}=this.props.product;

        return (
            <div className="product">
                <div>{name}</div>
                <div>Price: {formatPrice(price)}</div>
                <div><button type="submit" onClick={()=>this.props.addCart(this.props.product)}>Add To Cart</button></div>
                <div><img src={img} alt={name}/></div>
                <div className="description">{description}</div>
            </div>

        );
    }
}
 
export default Product;