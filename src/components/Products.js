import React from "react";
import Product from "./Product";
import productData from "../data/productData";

class Products extends React.Component {

    handleSubmit=(e)=>{
        e.preventDefault();

    }
  

    render() { 
        return (
            <React.Fragment >
                <form onSubmit={this.handleSubmit}>
                  <section className="products">
                     {productData.map(product=>  <Product product={product} addCart={this.props.AddCart} key={product.id}/>)}
                  </section>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Products;