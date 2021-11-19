import React from "react";
import "./App.css";
import formatPrice from "./helpers/formatPrice";
import Products from "./components/Products";
import UserForm from "./components/UserForm";


class App extends React.Component {
  constructor(){
    super();
    this.state={
        myCart:[],
        subTotal:0,
        tax:0
    }
}

handleAddCart=(product)=>{
    const {myCart, subTotal,tax}=this.state;
    this.setState({
        myCart:[...myCart,product],
        subTotal:this.state.subTotal+Number(product.price),
        tax:tax+5*product.price/100

   })
}
  
  render() { 
    const {subTotal,tax}=this.state;
    return (
      <div id="container">
        <div id="garage">
           <h1>My Garage Sale</h1>
           <Products AddCart={this.handleAddCart}/>
        </div>
        <div id="cart">
           <h1>Cart</h1>
           <ul>
            {this.state.myCart.map(product=> <li key={product.id}>{product.name}: formatPrice(product.price)</li>)}
           </ul>
           <h3>Subtotal: {formatPrice(subTotal)}</h3>
           <h3>Tax: {formatPrice(tax)}</h3>
           <h3>Total: {formatPrice(subTotal+tax)}</h3>
           <h3 id="checkout">Checkout</h3>
           <UserForm/>
        </div>

      </div>
    );
  }
}
 
export default App;
