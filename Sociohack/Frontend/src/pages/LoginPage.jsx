import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [user,setUser] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const Login = async()=>{
    axios.post('http://localhost:8000/login',user)
    .then((res)=>{
      if(res.data.status===200){
        navigate('/home')
      }

      if(res.data.status===400)
        alert(res.data.msg)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <>
      <input type="text" placeholder="Email" value={user.email} onChange={(val)=>setUser((prev)=>({...prev,email: val.target.value}))}/>
      <input type="text" placeholder="Password" value={user.username} onChange={(val)=>setUser((prev)=>({...prev,password: val.target.value}))}/>
      <button onClick={Login}>SUBMIT</button>
    </>
  )
}

export default LoginPage
