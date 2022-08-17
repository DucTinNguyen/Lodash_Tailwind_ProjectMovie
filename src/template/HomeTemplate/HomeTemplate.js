import React from 'react'
import { Route } from 'react-router-dom';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel';
export const HomeTemplate = (props) =>{
    let {Component,...restProps} = props;
    return <Route {...restProps} render={(propsRouter) =>{
        return <>
            <Header />
            <HomeCarousel />
            <Component />
           <Footer/>
        </>
    }}
     />
}