import React, {useEffect} from 'react';
import ProductCatalogCard from '../components/ProductCatalogCard';
import {useNavigate} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const Inventory = ({loginState}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!loginState.isLoggedIn) {
            loginState.setLoggedIn(false);
            navigate('/login');
        }
    });
    return(
        <>
            <NavbarComponent loginState={loginState} />
            <ProductCatalogCard />
        </>
    );
}

export default Inventory;