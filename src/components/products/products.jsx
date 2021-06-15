import React,{Fragment , useEffect , memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowProducts from './showproducts';
import { toast } from 'react-toastify';
import { CountUpBill } from '../../redux/actions/handlebills_action';
import { get_count_product } from './../../redux/actions/handlebills_action';

const Products = () => {
    const products = useSelector(state => state.products);
    const who_is_login = useSelector(state => state.whoslogin);
    const dispatch = useDispatch();

        if (who_is_login.fullname === undefined) {
            toast.warning("برای ذخیره لیست خریدتان لطفا وارد شوید", {
                position: "top-right",
                closeOnClick: true
            });
        }

    let is_login = null;
    if (who_is_login.id !== undefined) {
        
        is_login = true;
    }
    else {
        is_login=false
    }
    return (
        <div  id="cards " className=" d-inline d-flex flex-wrap">
            {products.map(pro => (
               
            
                <ShowProducts
                    key={pro.id}
                    name={pro.name}
                    pic={pro.pic}
                    id={pro.id}
                    is_login={is_login}
                    // count={pro.count}
                    countup={()=>dispatch(CountUpBill(pro.id , pro.name,pro.cost) )}
                    getcount={() => dispatch(get_count_product(pro.id))}
                    cost={pro.cost}
                />
            )
            )}
        </div>
     );
}
 
export default Products;