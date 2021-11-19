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
    handleInput=()=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleOnSubmit=(e)=>{
        
        e.preventDefault();
        const{fName,lName,email,cardInfo,zipCode}=this.state;
        if(fName&&lName&&email){
            if(zipCode.length===5&&cardInfo.length===16){
                alert("Purchase complete");
            }
            else if(zipCode.length<5) alert("Zip code is not valid");
            else if(cardInfo.length<16) alert("Credit card number is not valid");
        }
        else alert("Input is not valid");

    }
    render() { 
        const{fName,lName,email,cardInfo,zipCode}=this.state;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="fname">First Name</label>
                <input 
                  id="fname"
                  type="text"
                  name="fName"
                  value={fName}
                  onClick={this.handleInput}
                />
                <label htmlFor="lname">Last Name</label>
                <input 
                  id="lname"
                  type="text"
                  name="lName"
                  value={lName}
                  onClick={this.handleInput}
                />
                <label htmlFor="email">Email</label>
                <input 
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  onClick={this.handleInput}
                />
                <label htmlFor="credit-info">Credit Card</label>
                <input 
                  id="credit-info"
                  type="text"
                  name="cardInfo"
                  value={cardInfo}
                  onClick={this.handleInput}
                />
                <label htmlFor="zip-code">Zip Code</label>
                <input 
                  id="zip-code"
                  type="text"
                  name="zipCode"
                  value={zipCode}
                  onClick={this.handleInput}
                />
                <button type="submit">Buy Now</button>
            </form>
        );
    }
}
 
export default UserForm;