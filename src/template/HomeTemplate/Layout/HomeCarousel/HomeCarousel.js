
import { Carousel, Radio } from 'antd';
import React, { useState } from 'react';
import {useSelector} from 'react-redux'
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: '#364d79',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
};

export default function HomeCarousel() {
   
    let {carousel} = useSelector(state => state.CarouselReducer);
    const renderCarousel = () => {
        return carousel.map((item,index)=>{
            return <div key={index}>
            <div style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
                <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
            </div>
        </div>
        })
    }
    return (
        <div>
            <>
                <Carousel>
                    {renderCarousel()}
                </Carousel>
            </>
        </div>
    )
}
