import './homepageuser.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HomepageUser = () => {
    const [dataMading, setDataMading] = useState([]);

    useEffect(() => {
        const getMading = async() => {
            const response = await axios.get(`http://localhost:3069/mading`)
            setDataMading(response.data)
        }
        getMading()
    },[])

    console.log(dataMading)
    return ( 
        <div className="homepage-user" style={{overflowX:"hidden"}}>
            <div className="banner">
                <div className="bg-foto-banner">
                    <p className="text-banner d-flex align-items-center justify-content-center">SEKUL 420 PAGI</p>
                </div>
            </div>

            <div className='body-homepage container'>
                <hr />
                <div className="bg-barang d-flex justify-content-center row">
                    <p className='text-judul-barang-body d-flex justify-content-center'>- Tentang -</p>
                    
                    <div className="bg-isi-tentang py-4">
                        <p className="text-isi-tentang">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim repellendus necessitatibus maxime quisquam dignissimos laboriosam debitis vero voluptatum suscipit eos officia quam odio quod asperiores totam error magni, iste dolores quos quae, ratione vitae? Officia accusantium iste quaerat nisi cupiditate rem, inventore voluptate enim quos est nihil sint ipsa odio.
                        </p>
                    </div>
                </div>

                <hr />
                <div className="bg-barang d-flex justify-content-center row">
                    <p className='text-judul-barang-body d-flex justify-content-center'>- Mading -</p>
                    
                    <div className="bg-mading">
                        <table className='table'>
                            <tbody>
                                {dataMading?.map((data, index) => {
                                    return(
                                    <tr key={data.id_mading}>
                                        <td className="col-1" style={{height:"100%"}}><p className='no-mading-thumb'>{index +1}</p></td>
                                        <th className="col-3" style={{height:"100%"}}><p className="judul-mading-thumb d-flex align-items-center">{data.judul_mading}</p></th>
                                        <td className="col-7" style={{height:"100%"}}><p className="isi-mading-thumb d-flex align-items-center">{data.isi_mading}</p></td>
                                        <td className="col" style={{height:"100%"}}>
                                            <Link
                                                to={`mading/${data.id_mading}`}
                                                style={{textDecoration:"none", color:'black'}}    
                                            >
                                                <p className='text-selengkapnya d-flex align-items-center justify-content-end' >Selengkapnya </p>
                                            </Link>
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
     );
}
export default HomepageUser;