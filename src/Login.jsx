import React,{useState} from 'react'
import logo from './images/logo.png'
import login from './images/login.png'


export default function Login() {


  const [email, setemail] = useState("");
  const [password, setphnumber] = useState("");
  const [Error, setError] = useState('')

  async function Login(){
    const response = await fetch("https://18.234.190.228:8080/login",{
      method:'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({email, password})
    })
    const data = await response.json()
    if(data.status){
      localStorage.setItem('Token', data.access_token)
      if (data.role === "admin"){
        window.location.href = "/Admin"
      } else if (data.role === "salesperson"){
        window.location.href = "/Sales"
      }
    } else{
      setError(data.msg)
      alert(Error)
    }
  }



  return (
    <div className='relative px-20 py-5'>

    <header>
    <img className="max-w-[15%] mx-auto mb-5" src={logo} alt='' />
  </header>
     
    <div className='flex flex-row justify-around mt-10'>

      <div className=''>
       <img className='shadow-lg rounded-xl' src={login} alt='' />
      </div>

    <div className=''>
       <div className='flex justify-center'>
         <h1 className='font-bold text-transparent underline bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text lg:text-2xl xl:text-3xl font-Poppins underline-offset-8 decoration-violet-500 decoration-4'>Login</h1>
       </div>
       <div className='flex justify-center'>
       <div className='flex flex-row justify-center p-2 mt-5'>
        <form className='flex flex-col w-full gap-y-5'>
        <label className="block mt-5 font-bold font-Inter sm:text-base lg:text-xl xl:text-2xl">E-mail Id</label>
        <input
          required
          placeholder="Email"
          className="px-3 py-3 font-semibold border-2 border-gray-500 rounded-lg sm:text-base lg:text-xl xl:text-2xl"
          type="email"
          value={email}
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <label className="mt-1 font-bold font-Inter sm:text-base lg:text-xl xl:text-2xl">Password</label>
        <input
          required
          placeholder="Password"
          className="px-3 py-3 font-semibold border-2 border-gray-500 rounded-lg sm:text-base lg:text-xl xl:text-2xl"
          type="password"
          value={password}
          onChange={(event) => {
            setphnumber(event.target.value);
          }}
        />
        <div className='flex justify-center mt-5'>
        <button onClick={()=>Login()} type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-3 shadow-lg py-1.5 rounded-lg bg-violet-500">
         <p className='font-bold tracking-wider text-white font-Inter'> Enter </p>
        </button>
        </div>
        </form>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}
