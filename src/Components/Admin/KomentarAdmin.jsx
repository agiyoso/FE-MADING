import axios from "axios";
import { useEffect, useState } from "react";

const KomentarAdmin = () => {
    const [dataKomentar, setDataKomentar] = useState([])
    
    useEffect(()=>{
        const getKomentar = async() =>{
            const response = await axios.get(`http://localhost:3069/komentar`)
            setDataKomentar(response.data)
        }
        getKomentar()
    },[])

    console.log(dataKomentar)

    const handleHapus = (e, id) => {
        e.preventDefault();
        console.log(id);
    
        axios.delete(`http://localhost:3069/komentar/${id}`);
        const dataFilter = dataKomentar.filter((data) => data.id_komentar !== id);
        setDataKomentar(dataFilter);
      };

    return ( 
        <div className="komentar-admin container py-3">
            <div className="judul-admin mb-5">
                <p className="text-judul-admin d-flex align-items-center justify-content-center">
                Manajemen Komentar
                </p>
            </div>

            <table className="table text-start">
                <thead className="table-dark">
                <tr className="">
                    <th className="col-1">No</th>
                    <th className="col-2">Email</th>
                    <th className="col-2">Username</th>
                    <th className="col-3">Komentar</th>
                    <th className="col-5">Artikel</th>
                    <th className="col-1">~</th>
                </tr>
                </thead>
                <tbody>
                {dataKomentar?.map((data, index) => {
                    return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{data.email_komen}</td>
                        <td>{data.nama_komen}</td>
                        <td>{data.isi_komen}</td>
                        <td>{data.judul_mading}</td>
                        <td>
                        <button
                            className="but-mading btn btn-danger mx-1"
                            onClick={(e) => handleHapus(e, data.id_komentar)}
                        >
                            Hapus
                        </button>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default KomentarAdmin;