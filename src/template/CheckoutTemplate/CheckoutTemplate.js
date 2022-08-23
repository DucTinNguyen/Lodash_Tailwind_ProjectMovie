import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { USER_LOGIN } from '../../utli/setting/setting';


export const CheckoutTemplate = (props) =>{

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/login' /> 
    }


    let {Component,...restProps} = props;
    return <Route {...restProps} render={(propsRouter) =>{
        return <>
            <Component {...propsRouter} />
        </>
    }}
     />
}
