import React from "react";

class Product extends React.Component {
    render() {
        const {price,description,name,image}=this.props.product;

        return (
            <div className="products">
                <div>{name}</div>
                <div>{price}</div>
                <button onClick={()=>this.props.addCart(this.props.product)}>Add To Cart</button>
                <img src={image} alt/>
                <div>{description}</div>
            </div>

        );
    }
}
 
export default Product;