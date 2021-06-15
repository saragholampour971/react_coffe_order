import React , {useState , useRef , useContext , useEffect } from 'react';
import {Card ,InputGroup ,FormControl , Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggle_checkbox } from './../../redux/actions/checkbox_action';
import SimpleContext from './../../context/simplecontext';
import { NewAccount } from './../../redux/actions/handleaccount_action';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import { withRouter} from 'react-router-dom';

const Register = (props) => {

    const context = useContext(SimpleContext);
    const dispatch = useDispatch();

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی است",
            min: "نباید کمتر از 5 کاراکتر واردکنید",
            email:"ایمیل وارد شده صحیح نمیباشد",
            
        },
        element: message => <div style={{color:"red"}} className="">{ message}</div>
    }));
    
     const fullnameref=useRef(null);       
     const passwordref=useRef(null);       
     const emailref=useRef(null);  
    const submitref = useRef(null);
    
    const [, forceupdate] = useState();
     
    useEffect(() => {
        fullnameref.current.focus();
    },[]);
        const handlefullnameref=(e)=>{
        if (e.key === 'Enter') {
            emailref.current.focus();
        } 
    }
    const handleemailref = (e) => {
        if (e.key === 'Enter') {
            
            passwordref.current.focus();
        }
        
    }
    const handlepasswordref = (e) => {
        if (e.key === 'Enter') {
            
            submitref.current.focus();
        }
        
    }
  

    const submit = () => {
     try{
            if  (validator.current.allValid()) {
                dispatch(NewAccount(context.fullname, context.email, context.password));
                context.clear_form();
                props.history.replace("/");
                // dispatch(whoslogin());
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
        <div id="registerbg" className="pt-5">
            <Card id="card"> 
                <Card.Title >
                    ثبت نام
                </Card.Title>
                <Card.Body >
                    <InputGroup size="lg" className="mb-2">
                        <FormControl placeholder="نام کاربری" className="rtl"
                             value={context.fullname}
                            onChange={(e) => {
                                context.handle_fullname(e);
                                validator.current.showMessageFor("fullname");
                            }}
                            ref={fullnameref}
                            onKeyDown={(e) => handlefullnameref(e)}
                            name="fullname"
                        />
              <InputGroup.Append>
                   <InputGroup.Text className="fa fa-user "></InputGroup.Text>
                 </InputGroup.Append>
                       
                    </InputGroup>
                    {validator.current.message(
                                "fullname",
                                context.fullname,
                                "required|min:5"
                            )}
                    <InputGroup size="lg" className="mb-2">
                        <FormControl placeholder="ایمیل" className="rtl"
                            name="email"
                            value={context.email}
                            onChange={(e) => {
                                context.handle_email(e)
                                validator.current.showMessageFor("email");
                            }}
                            ref={emailref} onKeyDown={e=>handleemailref(e)}
                        />
              <InputGroup.Append>
                   <InputGroup.Text className="fa fa-at "></InputGroup.Text>
                 </InputGroup.Append>
                    </InputGroup>
                    {validator.current.message(
                                "email",
                                context.email,
                                "required|min:5"
                            )}
                    <InputGroup size="lg" className="mb-2">
                <FormControl placeholder="رمز عبور"  className="rtl"
                            value={context.password}
                            onChange={(e) => {
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
                    <div className="accept-rules rtl">
                            <label>
                            <input type="checkbox" name="" onChange={ ()=>{dispatch(toggle_checkbox())}} />
                            قوانین و
                                مقررات سایت را میپذیرم{" "}
                            </label>
                        </div>

                        <div className="link rtl">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i> قوانین
                                و مقررات سایت !
                            </a>
                    </div>
                    <br/>
                    <Button style={{ width: "100%"  }} ref={submitref}
                        type="submit" onSubmit={() => {
                            submit();
                        }}
                        onClick={()=>{
                            submit();
                        }}
                    >ثبت نام</Button>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default Register;