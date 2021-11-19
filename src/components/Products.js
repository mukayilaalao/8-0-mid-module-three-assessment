import React from "react";
import Product from "./Product";
import productData from "../data/productData";

class Products extends React.Component {
  

    render() { 
        return (
            <section className="products">
                {productData.map(product=>  <Product product={product} addCart={this.props.AddCart} key={product.id}/>)}
            </section>
        );
    }
}
 
export default Products;