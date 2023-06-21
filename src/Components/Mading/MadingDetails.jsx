import { useEffect, useState } from 'react';
import './madingdetails.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MadingDetails = () => {

    const [dataMading, setDataMading] = useState({});
    const [dataKomentar, setDataKomentar] = useState([]);
    const [inputKomentar, setInputKomentar] = useState({
        id_mading :'',
        nama_komen :'',
        isi_komen :''
    })
    const [isKomen, setIsKomen] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const getMading = async() => {
            const response = await axios.get(`http://localhost:3069/mading/${id}`);
            setDataMading(response.data)
        }
        getMading()

        const getKomentar = async() => {
            const response = await axios.get(`http://localhost:3069/komentar/${id}`);
            setDataKomentar(response.data)
        }
        getKomentar()

        if(dataKomentar.length !== 0)
        setIsKomen(true)
    },[])

    useEffect(()=>{
        setInputKomentar((data)=>({
            ...data,
            id_mading : dataMading.id_mading
        }))
    },[dataMading])

    const handleInput = (e) => {
        e.preventDefault()

        setInputKomentar((data) => ({
            ...data,
            [e.target.id] : e.target.value
        }))
    }
    
    const handleKirim = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:3069/komentar`, inputKomentar)
        setInputKomentar((data) => ({
            ...data,
            nama_komen : "",
            isi_komen : ""
        }))
        window.location.reload()
    }
    console.log(dataKomentar)
    return ( 
        <div className="mading-details container">
            <p className="text-judul-mading-detail">{dataMading.judul_mading}</p>
            <div className="row">
                <div className="col">
                    <div className="bg-isi-mading p-4 d-flex justify-content-start">
                        <p className='text-isi-mading'>{dataMading.isi_mading}</p>
                    </div>
                </div>

                <div className="col-4">
                   <div className="bg-judul-komentar">
                     <p className="text-judul-komentar d-flex align-items-center justify-content-center">Komentar</p>
                   </div>

                   <div className="bg-komentar d-flex p-2 justify-content-center">
                    <div style={{width:"100%"}}>
                    {dataKomentar?.map((data)=>{
                        return(
                        <div className="row p-0 m-0" style={{width:'100%', minHeight:'2em'}} key={data.id_komentar}>
                            <div className="col-1 p-0">
                                <p>-</p>
                            </div>
                            <div className="col-3 p-0">
                                <p className='text-nama-komentar d-flex justify-content-start'>{data.nama_komen} :</p>
                            </div>

                            <div className="col p-0">
                                <p className='text-isi-komentar d-flex justify-content-start' >{data.isi_komen}</p>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                   </div>

                   <div className="bg-input-komentar d-flex justify-content-center">
                        <div className="row" style={{width:'100%'}}>
                            <div className="col p-0">
                                <input type="text" id='nama_komen' placeholder='Username...' className='input-username' onChange={handleInput}/>
                                <input type="text" id='isi_komen' placeholder='Ketik Komentar...' className='input-komentar' onChange={handleInput}/>
                            </div>
                            <div className="col-2 p-0 ">
                                <button className='but-komentar' onClick={handleKirim}>Kirim</button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
     );
}
 
export default MadingDetails;