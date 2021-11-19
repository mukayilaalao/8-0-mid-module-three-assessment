import React from "react";

class Product extends React.Component {
    render() {
        const {price,description,name,img}=this.props.product;

        return (
            <div className="products">
                <div>{name}</div>
                <div>${price}</div>
                <div><button onClick={()=>this.props.addCart(this.props.product)}>Add To Cart</button></div>
                <div><img src={img} alt={name}/></div>
                <div>{description}</div>
            </div>

        );
    }
}
 
export default Product;