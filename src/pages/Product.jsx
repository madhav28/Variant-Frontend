import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return(
        <div className='card' as={Link} to={"/listitems"}>
            <Link to="/listitems">
                <span style={{cursor: 'pointer' }}>
                All Products
                </span>
            </Link>
        </div>
    );
}

export default Product;