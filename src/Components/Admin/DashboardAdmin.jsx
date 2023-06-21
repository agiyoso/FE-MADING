import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DashboardAdmin = () => {
    const [dataAdmin, setDataAdmin] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const getDataAdmin = async() => {
            const response = await axios.get(`http://localhost:3069/admin/${id}`)
            setDataAdmin(response.data)
        }
        getDataAdmin()
    },[])

    console.log(dataAdmin)
    return ( 
        <div className="dashboard-admin container py-3">
            <div className="judul-admin">
                <p className="text-judul-admin d-flex align-items-center justify-content-center">{dataAdmin.username}</p>
            </div>
        </div>
     );
}
 
export default DashboardAdmin;