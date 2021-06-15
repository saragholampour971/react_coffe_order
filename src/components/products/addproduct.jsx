import React , {Fragment} from 'react';
import { Card, Image } from 'react-bootstrap';
import chaiigoli from './chaiigoli.jpg';
const AddProduct = () => {
    return (
        <Fragment>
            <p>out side card</p>
           
            <Card  id="postcard" >
                <Image
                src={chaiigoli} roundedCircle
                />
            </Card>
        </Fragment>
     );
}
 
export default AddProduct;