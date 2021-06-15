import React,{Fragment , useState} from 'react';
import SimpleContext from './../context/simplecontext';
import { ToastContainer , toast} from 'react-toastify';

const GlobalState = (props) => {
    const [fullname, setfullname] = useState("");
    const [adres, setadres] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [bills, setbills] = useState([]);

    const handle_fullname = (e) => {
        setfullname(e.target.value);
    }
    const handle_adres = (e) => {
        setadres(e.target.value);
    }
    const handle_phone = (e) => {
        setphone(e.target.value);
    }
    const handle_password = (e) => {
        setpassword(e.target.value);
    }
    const handle_email = (e) => {
        setemail(e.target.value);
    }

    // const ceate_account = () => {
    //     const bills = [...bills];
    //     const person = { fullname, email, password }
    //     bills.push(person);
    //     setbills(bills);
    //     toast.success("ثبت نام شما انجام شد", {
    //         closeOnClick: true,
    //         position: 'top-right'
    //     });
    // }
    const clear_form = () => {
        setfullname("");
        setemail("");
        setpassword("");
    }


    return (
        <SimpleContext.Provider value={{
            fullname,
            adres,
            phone,
            password,
            email,
            bills,
            handle_adres,
            handle_fullname,
            handle_password,
            handle_phone,
            handle_email,
            clear_form,
        }}>
            <Fragment>
                <ToastContainer/>
            {props.children}
            </Fragment>
            </SimpleContext.Provider>
    );
}

export default GlobalState;