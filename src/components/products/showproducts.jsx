import React,{Fragment , useState , useEffect , useRef} from 'react';
import {Card , Image , Badge  } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {  CountUpBill, EditBill_or_AddBill, get_count_product, LowOffBill } from './../../redux/actions/handlebills_action';

const ShowProducts = ({ name, pic, id , is_login  , countup , getcount , cost }) => {
    const who_is_login = useSelector(state => state.whoslogin);
    const dispatch = useDispatch();

    const [count, setcount] = useState(0);

   
    const count_down = (count) => {
        if (count > 0) {
            const down = count - 1;
        }
    }

  
    
    return (
        <Fragment>  
            <Card id="postcard"   style={{margin:"30px"}}>
                <Card.Title style={{paddingTop:"9px"}} ><h3><Badge className="p-3 m-2" variant="danger" pill>{ name}</Badge></h3></Card.Title>
                <Image src={pic} roundedCircle />
                <br/>
                <div className="mb-4">
                      <h1 className="d-inline">
                <Badge    id="badge"
                        onClick={() => {
                            if (is_login) {
                                
                                dispatch(LowOffBill(id));
                                    setcount(who_is_login.bills.find(x => x.id === id).count);
                            }
                            else{ if(count>=1) setcount(count-1)}
                        }}
                    variant="danger" pill>-</Badge>
               
                    </h1>
                    <h1 className="d-inline">
                        <Badge id="badge" >
                        {(is_login &&who_is_login.bills.find(x => x.id === id)) ? (who_is_login.bills.find(x => x.id === id).count) : count }
                        </Badge>
                    </h1>

              <h1 className="d-inline">
                        <Badge
                             id="badge"
                      
                            onClick={() => {
                                if (is_login) {
                                    dispatch(CountUpBill(id, name , cost));
                                        setcount(who_is_login.bills.find(x => x.id === id).count);
                                }
                                else{ setcount(count+1)}
                            }}
                        variant="danger" pill>+</Badge>
                    </h1>

                </div>
                <Card.Footer>

                <h5 className="rtl"> {cost} {" تومان"} </h5>
                </Card.Footer>
            </Card>
          
        </Fragment>
    );
}
 
export default ShowProducts;