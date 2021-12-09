import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import { userLogin } from '../../services/services';
import './Login.css'
function Login() {
	const history= useHistory()
	const [loginObj,setLoginObj] = useState({
		email:'',
		password:''
	})

	const handleOnchange = (e) => {
		setLoginObj({
		  ...loginObj,
		  [e.target.name]: e.target.value,
		});
		console.log(loginObj);
	  };

	  const onSubmitLogin=(e)=>{
		userLogin(loginObj).then((response)=>{
			console.log(response);
			history.push('/home')
		}).catch((err)=>{
			console.warn(err);
		})
	  }
	return (
		<div className='loginContainer'>
			<input className='inputClass' type='text' placeholder='Email' name="email" value={loginObj.email} onChange={(e)=>handleOnchange(e)}/>
			<input className='inputClass' type='text' placeholder='Password' name="password" value={loginObj.password} onChange={(e)=>handleOnchange(e)}/>
			<button className='loginBtn' onClick={onSubmitLogin}>Login</button>
			<div className="ORBtn">OR</div>
			<div className="socialIcnTxt">
				<div className="socialTxt ftxt">Facebook</div>
				<div className="socialTxt gtxt">Google</div>
			</div>
		</div>
	);
}

export default Login;
