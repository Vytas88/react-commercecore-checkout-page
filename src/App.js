import React, {Component} from 'react';
import norton from './Icons/group_677.svg'
import mcafee from './Icons/group_8.svg'
import comodo from './Icons/group_679.svg'
import verisign from './Icons/group.svg'
import {Input} from './Components/Input.style'
import {Header} from './Components/Header.style'
import './App.css';
import {Cart} from './Products/Cart'
import Dropdown from './Components/Dropdown'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="payment">
          <Dropdown/>
          
          <h1 className="payment-header">PAYMENT AND SHIPPING</h1>
          <div className="payment-form">
            <Header>Customer information</Header>
            <h3>Fields marked as (*) are required.</h3>
            <form>
              <Input type="text" name="firstName" placeholder="First name*"/>
              <Input type="text" name="lastName" placeholder="Last name*"/>
            </form>
            <Header>Shipping Address</Header>
            <form>
              <Input type="text" name="address" placeholder="Address*"/>
            </form>
            <form>
              <Input type="country" name="country" placeholder="Country*"/>
              <Input type="region" name="region" placeholder="Region*"/>
              <Input type="text" name="postalCode" placeholder="Postal code*"/>
            </form>
            <Header>Payment Method</Header>
            <div className="paymentMethodContainer">
              <h2 className="creditCard">Credit Card</h2>
              <div className="creditCardContainer">
                  <form>
                    <Input className="cardNumber" type="number" name="cardNumber" placeholder="Card number"/>
                  </form>
                  <form>
                    <Input className="monthYear" type="number" name="monthYear" placeholder="MM/YY"/>
                    <Input className="cvv" type="number" name="cvv" placeholder="CVV"/>
                  </form>
                </div>
              </div>
            <button className="completeButton" type="submit">COMPLETE ORDER</button>
              <div className="iconsContainer">
                <img src={norton} height={100} width={60}/>
                <img src={verisign} height={100} width={60}/>
                <img src={mcafee} height={100} width={60}/>
                <img src={comodo} height={100} width={60}/>
              </div>
          </div>
        </div>
          <div className="summary">
            <Cart/>
          </div>
  
      </div>
      <Footer/>
    </div>
  );
}

export default App;
