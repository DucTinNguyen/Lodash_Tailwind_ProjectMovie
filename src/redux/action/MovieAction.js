
import axios from 'axios';
import { quanlyphim } from '../../service/QuanLyPhim';
import { GET_MOVIES } from '../type/MovieType';
export const getmovieAction = async (dispatch) =>{
    try{
        let results = await quanlyphim.getListMovie()
        dispatch({
            type: GET_MOVIES,
            result: results.data.content
        })
    }
    catch(err){
        console.log(err);
    }
}