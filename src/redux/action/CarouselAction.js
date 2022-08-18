// async ()=>{
//         try{
//             const results = await axios({
//                 url:'https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner',
//                 method:'GET',
//             })
//             console.log(results.data.content);
//         }
//         catch(err){
//             console.log(err);
//         }
import axios from 'axios';
import { DOMAIN } from '../../utli/setting/setting';
import { SETTING_CAROUSEL } from '../type/CarouselType';

export const getCarouselAction = async (dispatch) => {
    try {
        const results = await axios({
            url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
            method: 'GET',
        })
        
        dispatch({
            type:SETTING_CAROUSEL,
            carousel:results.data.content
        })

    }
    catch (err) {
        console.log(err);
    }
}