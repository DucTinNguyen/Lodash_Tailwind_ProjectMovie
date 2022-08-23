import { baseService } from "./baseService";


export class Quanlyrapphim extends baseService {
    constructor(){
        super();
    }
    

    getInforCinestar = ()=>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`);
    }

    getInforMovie = (id)=>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }
}
export const  quanlyrapphim = new Quanlyrapphim();