import React from "react";

class UserForm extends React.Component {
    constructor(){
        super();
        this.state={
          
          fName:"",
          lName:"",
          email:"",
          cardInfo:"",
          zipCode:""
        }
    }
    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleOnSubmit=(e)=>{
        
        e.preventDefault();
        const{fName,lName,email,cardInfo,zipCode}=this.state;
        if(fName&&lName&&email){
            if(zipCode.length===5&&cardInfo.length===16){
                alert("Purchase complete " + this.props.total);
            }
            else if(zipCode.length<5) alert("Zip code is not valid");
            else if(cardInfo.length<16) alert("Credit card number is not valid");
        }
        else alert("Input is not valid");

    }
    render() { 
        const{fName,lName,email,cardInfo,zipCode}=this.state;
        return (
            <form id="checkout" onSubmit={this.handleOnSubmit}>
                <label htmlFor="fname">First Name</label>
                <br/>
                <input 
                  id="fname"
                  type="text"
                  name="fName"
                  value={fName}
                  onInput={this.handleInput}
                />
                <br/>
                <label htmlFor="lname">Last Name</label>
                <br/>
                <input 
                  id="lname"
                  type="text"
                  name="lName"
                  value={lName}
                  onInput={this.handleInput}
                />
                <br/>
                <label htmlFor="email">Email</label>
                <br/>
                <input 
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onInput={this.handleInput}
                />
                <br/>
                <label htmlFor="credit-info">Credit Card</label>
                <br/>
                <input 
                  id="credit-info"
                  type="text"
                  name="cardInfo"
                  value={cardInfo}
                  onInput={this.handleInput}
                />
                <br/>
                <label htmlFor="zip-code">Zip Code</label>
                <br/>
                <input 
                  id="zip-code"
                  type="text"
                  name="zipCode"
                  value={zipCode}
                  onInput={this.handleInput}
                />
                <br/>
                <button type="submit">Buy Now</button>
            </form>
        );
    }
}
 
export default UserForm;