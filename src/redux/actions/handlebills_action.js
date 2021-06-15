
//id ooni k login hasto barmidarim ta indexesho toye accounts peyda knim
//bad az inke bill login ro edit krdim miznim accounts[index]=person_login


export const EditBill_or_AddBill = (product_id, product_name) => {
    return async (dispatch, getState) => {
        const accounts = [...getState().accounts];
        const person_is_login = getState().whoslogin;

        //agar kasi login bood
        if (person_is_login.id !== undefined) {
            const login_index = accounts.findIndex(x => x.id === person_is_login.id);
        
            // bill oon kasi k login hast ro peyda miknim
            const bill_login = [...person_is_login.bills];

            //agar bill khali  bood
            if (!(bill_login.length > 0)) {

                const obj = { id: product_id, name: product_name, count: 0 };
                bill_login.push(obj);
                person_is_login.bills = bill_login;
                accounts[login_index] = person_is_login;
                await dispatch({ type: "Edit_Bill", payload: accounts })
                await dispatch({ type: "who_is_login", payload: person_is_login });
            }
            //agar bill khali nabood
            else {
                const bill_index = bill_login.findIndex(x => x.id === product_id);
                bill_login[bill_index].count++;
                person_is_login.bills = bill_login;

                accounts[login_index] = person_is_login;
                await dispatch({ type: "who_is_login", payload: person_is_login });

                await dispatch({ type: "Edit_Bill", payload: accounts });
            }
        }

        
    }
            

    
}

export const LowOffBill = (product_id) => {
    return async (dispatch, getState) => {
        const accounts = [...getState().accounts];
        const person_is_login = getState().whoslogin;

        const bill_login = person_is_login.bills;
        const login_index = accounts.findIndex(x => x.id === person_is_login.id);

        const find = bill_login.find(x => x.id === product_id);
        const find_index = bill_login.findIndex(x => x.id === product_id);

        if (find && find.count>0) {
            
            find.count--;
            bill_login[find_index] = find;
            person_is_login.bills = bill_login;
            accounts[login_index] = person_is_login;

            await dispatch({ type: "who_is_login", payload: person_is_login });
            await dispatch({ type: "Edit_Bill", payload: accounts });
            
            
        }
    }
}

export const get_count_product = (product_id) => {
    return async (dispatch, getState) => {
        
        const person_is_login = getState().whoslogin;
        //agar kasi login bood
        if (person_is_login.id !== undefined) {
            const bill_login = person_is_login.bills;
            //agar kasi login bood va oon product tooye billesh bood
            if (person_is_login.id !== undefined && bill_login.find(x=>x.id===product_id)) {
                const index = bill_login.findIndex(x => x.id === product_id);
                return (bill_login[index].count);
            }
            //agar kasi login bood vali product tooye billesh nabood
            else if (person_is_login.id !== undefined && !bill_login.find(x=>x.id===product_id)) {
                return 0;
            }
            //agar kasi login nabaood
            else if (person_is_login.id === undefined) {
                return 1;
            }
        }
    }
}

export const CountUpBill = (product_id, product_name , product_cost) => {
    return async (dispatch, getState) => {
        const accounts = [...getState().accounts];
        const person_is_login = getState().whoslogin;
       
    

        //agar kasi login bood va in product tooye billesh bood
        if (person_is_login.id !== undefined && person_is_login.bills.find(x=>x.id===product_id)) {
            //index ooni k logina ro bedast miarim
        const login_index = accounts.findIndex(x => x.id === person_is_login.id);

            person_is_login.bills.find(x => x.id === product_id).count++;
            accounts[login_index] = person_is_login;
            await dispatch({ type: "who_is_login", payload: person_is_login });
            await dispatch({ type: "Edit_Bill", payload: accounts });
            
            

        }

        ///agar kasi login bood va in product tooye billesh nabood
        else if (person_is_login.id !== undefined && !person_is_login.bills.find(x=>x.id===product_id)) {
            const obj = { name: product_name, id: product_id, count: 1 , cost:product_cost};
            const login_bill = person_is_login.bills;
            login_bill.push(obj);
            const login_index = accounts.findIndex(x => x.id === person_is_login.id);
            person_is_login.bills = login_bill;
            accounts[login_index] = person_is_login;
            await dispatch({ type: "who_is_login", payload: person_is_login });
            await dispatch({ type: "Edit_Bill", payload: accounts });
            


        }

    }
}

export const CalculateBill = () => {
    let result = 0;
    return async (dispatch, getState) => {

        const who_is_login = getState().whoslogin;

        if (who_is_login.id !== undefined) {
            
            const login_bill = who_is_login.bills;
            
            for (var i = 0; i < login_bill.length; i++){
                result = login_bill[i].count * login_bill[i].cost + result;
                
        }
            return (result);
        }
    }
}
