import './footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate()

    return ( 
        <div className="footer p-4">
            <div className="row" style={{height:'90%'}}>
                <div className="col">
                    <p className='text-footer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maxime a adipisci minus cum veritatis ratione, quis, itaque quia tenetur animi iusto provident dolor, odio veniam ducimus quaerat nulla aut?</p>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end">
                        <button className='but-login' onClick={()=>navigate('/login-admin')}>Login Admin</button>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;