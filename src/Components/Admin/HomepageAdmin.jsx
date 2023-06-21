import { useEffect, useState } from 'react';
import './homepageadmin.css'
import { useNavigate } from 'react-router-dom';
import DashboardAdmin from './DashboardAdmin';
import MadingAdmin from './MadingAdmin';

const HomepageAdmin = () => {
    const [isActiveDashboard , setIsActiveDashboard] = useState(true)
    const [isActiveMading, setIsActiveMading] = useState(false)
    const [halaman, setHalaman] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        setHalaman(<DashboardAdmin/>)
    },[])

    const handleMenuDashboard = () => {
        if(isActiveDashboard === true){
            setIsActiveMading(false)
        } else {
            setIsActiveDashboard(true)
            setIsActiveMading(false)
        }

        setHalaman(<DashboardAdmin/>)
    }

    const handleMenuMading = () => {
        if(isActiveMading === true){
            setIsActiveDashboard(false)
        } else {
            setIsActiveMading(true)
            setIsActiveDashboard(false)
        }

        setHalaman(<MadingAdmin/>)
    }
    return ( 
        <div className="homepage-admin d-flex justify-content-center">
            <div className="row " style={{width:"100%"}}>
                <div className="col-2 p-0" style={{height:"100%"}}>
                    <div className="sidebar sticky-top py-4">
                        <div className='bg-text d-flex justify-content-center'>
                        <p className="text-kaosan-admin d-flex justify-content-center align-items-center">Sekul 420</p>
                        </div>

                        <hr />
                        <div className="row d-flex justify-content-center">
                            <div className={`${!isActiveDashboard ? `menu-sidebar` : `menu-sidebar-active`} my-1`} onClick={handleMenuDashboard}>
                                <p className="text-menu-sidebar d-flex align-items-center justify-content-start">&diams; Dashboard</p>
                            </div>
                            <div className={`${!isActiveMading ? `menu-sidebar` : `menu-sidebar-active`} my-1`} onClick={handleMenuMading}>
                                <p className="text-menu-sidebar d-flex align-items-center justify-content-start">&diams; Mading</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-end justify-content-center" style={{height:'70%'}}>
                            <div className="">
                                <button className='but-logout' onClick={()=> navigate('/')}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {halaman}
                </div>
                
            </div>
        </div>
     );
}
 
export default HomepageAdmin;