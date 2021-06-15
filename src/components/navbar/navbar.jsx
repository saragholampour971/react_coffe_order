import React,{Fragment} from 'react';
import { Link  , withRouter , BrowserRouter , NavLink} from 'react-router-dom';
import { Nav, NavItem,  Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Exit_action } from '../../redux/actions/handleaccount_action';
import { toast } from 'react-toastify';


const Navbar = (props) => {
    const who_is_login = useSelector(state => state.whoslogin);
    const dispatch = useDispatch();
    let no_login = null;

    //agar kasi login nabood  dokme register va vorood neshoon bede
    if (who_is_login.id === undefined) {
        no_login = 
        <Fragment>
        <NavItem>
        <NavLink to="/register"   className="btn m-2   badge-pill  "  activeStyle={{backgroundColor:"#dc3545" , color:"white"}} ><h5>ثبت نام</h5></NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="/login"   className="btn m-2   badge-pill  "  activeStyle={{backgroundColor:"#dc3545" , color:"white"}} ><h5>ورود</h5></NavLink>
            </NavItem>
            </Fragment>
    }
    //agar kasi login bood dokme khoroojo faghat neshoon bede
    else {

        no_login =
            <NavItem onClick={() => {
            dispatch(Exit_action());
            props.history.replace("/");
            
                toast.success("شما خارج شدید", {
                    position: "top-right",
                    closeOnClick: true
                })
            }}>
            <NavLink to="/exit" className="btn m-2   badge-pill  " ><h5>خروج</h5></NavLink>
            </NavItem>
    }

    return (
            <Nav variant="pills" className="justify-content-center pb-2 fixed-top " style={{backgroundColor:"#cec6c6" ,  }} >
               
               <NavItem>
                    <NavLink to="/about"   className="btn m-2   badge-pill  "  activeStyle={{backgroundColor:"#dc3545" , color:"white"}} ><h5>درباره من</h5></NavLink>
                </NavItem>

               {no_login}
               
                <NavItem>
                    <NavLink to="/shop"   className="btn m-2   badge-pill  "  activeStyle={{backgroundColor:"#dc3545" , color:"white"}} ><h5>محصولات</h5></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/mybill"   className="btn m-2   badge-pill  "  activeStyle={{backgroundColor:"#dc3545" , color:"white"}} ><h5>سبد خرید</h5></NavLink>
                </NavItem>
              
               
            </Nav>
     );
}
 
export default withRouter(Navbar);