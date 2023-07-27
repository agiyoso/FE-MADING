import { useEffect, useState } from "react";
import axios from "axios";

const DataLaporan = ({data, index}) => {
    const [dataKomentar, setDataKomentar] = useState([]);

    useEffect(()=>{
        const getKomentar = async() =>{
            const response = await axios.get(`http://localhost:3069/komentar/${data.id_mading}`)
            setDataKomentar(response.data)
        }
        getKomentar()
    },[])

    return ( 
        <div className="data-laporan">
          
                <p>{dataKomentar.length}</p>
            
        </div>
     );
}
 
export default DataLaporan;