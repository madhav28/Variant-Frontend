import './ProductCatalogCard.css';
import { Link } from 'react-router-dom';

const ProductCatalogCard = () => {
    return(
        <div className='card' as={Link} to={"/product"}>
            <Link to="/product">
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Product
                </span>
            </Link>
        </div>
    )
}

export default ProductCatalogCard;