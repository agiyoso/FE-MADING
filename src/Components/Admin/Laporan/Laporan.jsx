import { useEffect, useState } from "react";
import "./laporan.css"
import axios from "axios";
import DataLaporan from "./DataLaporan";

const Laporan = () => {
    const [dataLaporan, setDataLaporan] = useState([]);

    useEffect(() => {
        const getLaporan = async () => {
            const response = await axios.get(`http://localhost:3069/laporan`);
            setDataLaporan(response.data);
          };
          getLaporan();
    },[])
    return (
        <div className="laporan container py-3">
            <div className="judul-admin mb-5">
                <p className="text-judul-admin d-flex align-items-center justify-content-center">
                    Laporan
                </p>
            </div>

            <table className="table text-start">
                <thead className="table-dark">
                    <tr className="">
                        <th className="col-1">No</th>
                        <th className="col-2">Judul Artikel</th>
                        <th className="col-2">Jumlah Komentar</th>
                    </tr>
                </thead>
                <tbody>
                {dataLaporan?.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{index +1}</td>
                            <td>{data.judul_mading}</td>
                            <td> <DataLaporan data = {data} index = {index}/></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
 
export default Laporan;