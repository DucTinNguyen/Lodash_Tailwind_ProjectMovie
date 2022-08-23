import { baseService } from "./baseService"


export class QuanLyPhim extends baseService {
    constructor(){
        super();
    }
    getListBanner = ()=>{
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
    }
    getListMovie = ()=>{
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`);
    }
}
export const quanlyphim = new QuanLyPhim();
