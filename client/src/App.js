import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'; 
import LoginScreen from './screens/LoginScreen';
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOderScreen';
import OrderScreen from './screens/OrderScreen'
import RegisterScreen from './screens/RegisterScreen'


const App = () => {
  return (

    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/Login' component={LoginScreen} />
          <Route path='/Shipping' component={ShippingScreen} />
          <Route path='/Payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
        </Container>
      </main>
      <Footer />
 
    </Router>
  );
}

export default App;
