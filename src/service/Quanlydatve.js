import { Thongtindatve } from "../model/Thongtindatve";
import { baseService } from "./baseService";


class QuanLyDatVe extends baseService {

    constructor(){
        super()
    }

    getListRoomTicket = (id) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
    }

    bookTicket = (thongtindatve = new Thongtindatve()) =>{
        return this.post(`api/QuanLyDatVe/DatVe`,thongtindatve);
    }


}
export const  quanlydatve = new QuanLyDatVe();