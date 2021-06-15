import React ,{useState , useRef , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ListGroup , ListGroupItem , Card  , Badge} from 'react-bootstrap';
import { CountUpBill, LowOffBill } from '../../redux/actions/handlebills_action';
import { CalculateBill } from './../../redux/actions/handlebills_action';


const MyBill = () => {
    const who_is_login = useSelector(state => state.whoslogin);
    const dispatch = useDispatch();
    const [get, set] = useState();

            
       
    const p_ref = useRef();
    const [getupdate, update] = useState(0);

    let no_login = null;
    let empty_bill = null;
    let login_bill = null;

    //agar kasi login nabood sabad khrid khalie 
    if (who_is_login.id === undefined) {
        no_login=<h3>لطفا وارد شوید تا لیست خرید خود را ببینید</h3>
    }
   
    if (who_is_login !== undefined && who_is_login.bills !== undefined) {
         
        login_bill = who_is_login.bills.map(x => (
            <ListGroupItem className="bg-danger mb-3 rtl ">
                <Card>
                    <div className="d-flex justify-content-between">
                        <h4 className="d-inline pl-3" >{x.name}</h4>


                        <h5>{ x.count * x.cost}</h5>
                       
                        <h2 className="d-inline mr-0">
                        <Badge
                             id="badge"
                      
                            onClick={() => {
                            update(who_is_login.bills.find(v => v.id === x.id).count);
                                
                                dispatch(CountUpBill(x.id, x.name ,x.cost));
                                
                            }}
                                variant="success" pill>+</Badge>
                              <h4 className="d-inline pl-3 mr-3">
                            {who_is_login.bills.find(n => n.id === x.id) ? who_is_login.bills.find(n => n.id === x.id).count : update(7)} 
                            </h4>
                            <Badge
                                className="mr-3"
                                id="badge"
                        onClick={() => {
                            update(who_is_login.bills.find(v => v.id === x.id).count);
                            
                            dispatch(LowOffBill(x.id));
                            
                        }}
                    variant="danger" pill>-</Badge>
                   
                        </h2>
                       
                    </div>
                </Card>
            </ListGroupItem>
        ))
    }
    try {
       dispatch(CalculateBill()).then((value) => {
           set(value);
       })
        
    }
    catch (ex) {
        console.log(ex);
    }
    return (
        <div id="mybill">
            <ListGroup className="mt-5 w-75 " style={{paddingLeft:"30%"}} >
                {no_login}
                {/* {empty_bill} */}
                {login_bill}
               {who_is_login.id !== undefined ?  <ListGroupItem className="bg-danger rtl ">
                    <h5>مبلغ پرداختی</h5>
                    <h5 className="bg-white ">{ get}</h5>
                </ListGroupItem> : null}
           </ListGroup>
        </div>
     )
}
 
export default MyBill;