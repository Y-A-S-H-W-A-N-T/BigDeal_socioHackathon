import axios from "axios"
import { useState } from "react"

const SignupPage = () => {

  const [user,setUser] = useState({
    username: "",
    phone: "",
    password: "",
    email: "",
    age: ""
  })

  const Signup = async()=>{
    console.log(user)
    axios.post('http://localhost:8000/signup',user)
    .then((res)=>{
      if(res.data.status===200)
        alert(res.data.msg)
      if(res.data.status===400)
        alert(res.data.msg)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <>
      <input type="text" placeholder="username" value={user.username} onChange={(val)=>setUser((prev)=>({...prev,username: val.target.value}))}/>
      <input type="text" placeholder="email" value={user.email} onChange={(val)=>setUser((prev)=>({...prev,email: val.target.value}))}/>
      <input type="text" placeholder="phone" value={user.phone} onChange={(val)=>setUser((prev)=>({...prev,phone: val.target.value}))}/>
      <input type="password" placeholder="password" value={user.password} onChange={(val)=>setUser((prev)=>({...prev,password: val.target.value}))}/>
      <input type="text" placeholder="age" value={user.age} onChange={(val)=>setUser((prev)=>({...prev,age: val.target.value}))}/>
      
      <button onClick={Signup}>SUBMIT</button>
    </>
  )
}

export default SignupPage
