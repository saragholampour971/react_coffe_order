import React , {Fragment} from 'react';
import {Switch , Route} from 'react-router-dom'
import Register from './components/register/Register';
import Shop from './components/shop/shop';
import Login from './components/login/login';
import Products from './components/products/products';
import MyBill from './components/sabadkharid/mybill';
import Navbar from './components/navbar/navbar';
import { Container} from 'react-bootstrap';
import Home from './components/home/home';
import About from './components/about/about';
const App = () => {
    return (
        <Fragment>
            <div className="mb-5"><Navbar /> </div>
            <Switch>
                <Route path="/register" component={ Register}/>
                <Route path="/login" component={ Login}/>
                <Route path="/shop" component={ Shop}/>
                <Route path="/mybill" component={MyBill} />
                <Route path="/exit"  />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />

            </Switch>
        </Fragment>
    );
}
 
export default App;
