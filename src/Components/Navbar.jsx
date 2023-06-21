import { useNavigate } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {

    const navigate = useNavigate()
    return ( 
        <div className="navbar d-flex justify-content-center">
            <div className="row" style={{width:'100%', height:"100%"}}>
                <div className="col">
                    <div className="bg-text-navbar-tengah">
                        <p className='text-navbar d-flex align-items-center justify-content-center' onClick={()=> navigate('/')}>Sekul 420 Pagi</p>
                    </div>
                </div>

                <div className="col-2 " style={{height:"100%"}}>
                    <div className='d-flex' style={{height:"100%"}}>
                        <p className='text-navbar-sub d-flex justify-content-end align-items-center'>Tentang</p>                
                        <p className='text-navbar-sub d-flex justify-content-end align-items-center'>Mading</p>
                    </div>            
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;