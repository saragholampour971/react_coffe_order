import { toast } from 'react-toastify';

export const NewAccount = (fullname, email, password) => {
    return async (dispatch, getState) => {
        const accounts = [...getState().accounts];
        const acc = {
            fullname,
            email,
            password,
            id: Math.floor(Math.random() * 1000),
            bills:[],
        }
        accounts.push(acc);
        await dispatch({ type: "Add_Account", payload: accounts });
        toast.success("ثبت نام انجام شد", {
            position: "top-right",
            closeOnClick: true
        });
        dispatch(whoslogin(acc));

        toast.success(`${getState().whoslogin.fullname} خوش امدید`, {
            position: "top-right",
            closeOnClick:true
        })
  
}
}
//in  func ba yek object seda zade mishe k meghdare reducer whoslogin ra taghir mide
export const whoslogin = (obj) => {

    return async (dispatch, getState) => {

        await dispatch({ type: "who_is_login", payload: obj })
      
    }
}


export const LoginAccount = (email, password) => {
    return async (dispatch, getState) => {
        const accs = [...getState().accounts];
        const exist = accs.find(x => ( x.email === email && x.password === password ));
        //agar hamchin kasi tooye arraye account hamoon bood obj onoo be func whoslogin bfrst ta 
        //be onvan login save beshe too reducer
        if (exist) {
            dispatch(whoslogin(exist));
            
            const who_is_login = getState().whoslogin;
            toast.success(`${who_is_login.fullname}خوش امدید`, {
                position: "top-right",
                closeOnClick:true
            })

        }
        else {
            toast.warning("کاربری با این مشخصات یافت نشد  ", {
                position: "top-right",
                closeOnClick:true
            })
        }
        await dispatch({type:"Login_Account" , payload:getState().accounts})
    }
}


export const Exit_action = () => {
    return async (dispatch, getState) => {
        
        await dispatch({ type: "Exit" })
        
        
    }
}
