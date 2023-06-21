import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

const Login = () => {
    const [dataAdmin, setDataAdmin] = useState([])
    const [dataInput, setDataInput] = useState({
        email : '',
        password : ''
    })
    const navigate = useNavigate()

    useEffect(()=>{
        const getDataAdmin = async()=>{
            const response = await axios.get(`http://localhost:3069/admin`);
            setDataAdmin(response.data)
        }
        getDataAdmin()
    },[])

    const handleInput = (e) => {
        setDataInput((data)=>({
            ...data,
            [e.target.id] : e.target.value
        }))
    }

    const handleLogin = ()=> {
        dataAdmin.map((data)=>{
            if(dataInput.email !== data.email){
                alert('Email salah')
            } else if(dataInput.password !== data.password){
                alert('Password salah')
            } else (
                navigate(`/dashboard-admin/${data.id_admin}`)
            )
        })
    }

    console.log({
        dataInput,
        dataAdmin
    })
    return ( 
        <div className="login">
            <div className='bg-text-login py-5'>
                <p className='text-login-admin'>Login Admin</p>
                <div className="bg-text-login-kaosan d-flex justify-content-center">
                    <p className='text-login-kaosan d-flex justify-content-center align-items-center'>Kaosan.</p>
                </div>
            </div>

            <div className="bg d-flex justify-content-center">
                <div className="form-login p-5">
                    <label className='label d-flex justify-content-start' htmlFor="email ">Email</label>
                    <input className='input-text mb-2' type="text" id='email' onChange={handleInput}/>

                    <label className='label d-flex justify-content-start mt-2' htmlFor="email ">Password</label>
                    <input className='input-text' type="password" id='password' onChange={handleInput}/>
                    
                    <div className="row" style={{height:'100%'}}>
                        <div className="col d-flex align-items-center justify-content-center">
                            <button className='but-beranda' onClick={()=>navigate('/')}>Beranda</button>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <button className='but-login-admin' onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className='footer-login fixed-bottom '>
                <p className='text-footer-login m-0'>&copy; Kaosan.</p>
            </div>
        </div>
     );
}
 
export default Login;