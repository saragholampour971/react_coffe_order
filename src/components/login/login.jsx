import React , {useState , useRef , useContext , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Card ,InputGroup ,FormControl , Button} from 'react-bootstrap';
import { LoginAccount } from '../../redux/actions/handleaccount_action';
import SimpleContext from './../../context/simplecontext';
import  SimpleReactValidator  from 'simple-react-validator';
import { toast } from 'react-toastify';
import { withRouter} from 'react-router-dom';

const Login = ({history}) => {

    const context = useContext(SimpleContext);
    const dispatch = useDispatch();

    const [email, getemail] = useState('');
    const [password, setpassword] = useState('');

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی است",
            min: "نباید کمتر از 5 کاراکتر واردکنید",
            email:"ایمیل وارد شده صحیح نمیباشد",
            
        },
        element: message => <div style={{color:"red"}} className="">{ message}</div>
    }));
    
     const passwordref=useRef(null);       
     const emailref=useRef(null);  
    const submitref = useRef(null);
    
    const [, forceupdate] = useState();
     
    useEffect(() => {
        emailref.current.focus();
    },[]);
        
    const handleemailref = (e) => {
        if (e.key === 'Enter')
            passwordref.current.focus();
    }
    const handlepasswordref = (e) => {
        if (e.key === 'Enter')
            submitref.current.focus();
    }

    const submit = () => {
        try{
               if  (validator.current.allValid()) {
                   dispatch(LoginAccount(context.email, context.password));
                context.clear_form();
                   history.replace("/");
                   
               }
               else {
                   validator.current.showMessages();
                   forceupdate(1);
            }
        }
        catch (ex) {
                toast.error("مشکلی رخ داده دوباره امتحان کنید", {
                    position: "top-right",
                    closeOnClick:true
                })
            }
        }

    return (
        <div id="loginbg" className="pt-4 " >
        <Card id="card" style={{marginTop:"70px" , marginLeft:"90px" }}> 
            <Card.Title >
                ورود
            </Card.Title>
            <Card.Body >
               
                <InputGroup size="lg" className="mb-2">
                <FormControl placeholder="ایمیل" className="rtl"
                            name="email" value={context.email} type="email"
                            onChange={(e) => { context.handle_email(e); validator.current.showMessageFor("email");}}
                            ref={emailref} onKeyDown={e=>handleemailref(e)}
                        />
          <InputGroup.Append>
               <InputGroup.Text className="fa fa-at "></InputGroup.Text>
             </InputGroup.Append>
                    </InputGroup>
                    {validator.current.message(
                                "email",
                                context.email,
                                "required|email"
                            )}

                <InputGroup size="lg" className="mb-2">
                <FormControl placeholder="رمز عبور"  className="rtl"
                            value={context.password} onChange={(e) => {
                                context.handle_password(e);
                                validator.current.showMessageFor("password");
                            }}
                            ref={passwordref} onKeyDown={e=>handlepasswordref(e)}
                />
          <InputGroup.Append>
               <InputGroup.Text className="fa fa-key "></InputGroup.Text>
             </InputGroup.Append>
                    </InputGroup>
                    
                    {validator.current.message(
                                "password",
                                context.password,
                                "required|min:5"
                            )}
              
                <Button style={{ width: "100%"  }} ref={submitref}
                    type="submit" onSubmit={submit}
                    onClick={submit}
                >ورود</Button>
            </Card.Body>
        </Card>
    </div>
     );
}
 
export default Login;