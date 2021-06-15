import { createContext } from "react";

const SimpleContext = createContext({
    fullname: "",
    adres: "",
    phone: "",
    password: "",
    email: "",
    bills: [],
    handle_fullname:()=>{},
    handle_adres:()=>{},
    handle_phone:()=>{},
    handle_password:()=>{},
    handle_email: () => { },
    clear_form:()=>{}
});
export default SimpleContext;