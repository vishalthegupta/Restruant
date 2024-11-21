import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from 'axios'
import toast from 'react-hot-toast';

function Signup() {

  const navigate = useNavigate();
  const from = '/'


  const { register, 
    handleSubmit, 
    formState: { errors } ,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname : data.fullname,
      email : data.email,
      password : data.password
    }

   await axios.post('http://localhost:4001/user/signup' , userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data) {
        toast.success('Sign Up Succesfully');
        navigate(from , { replace : true })
      }
      localStorage.setItem("Users" , JSON.stringify(res.data.user))
    }).catch((err) => {
       console.log("Error : " + err)
       toast.error('Error : ' + err.response.data.message);
    })
  };


   

   return (
    <>
     <div className='flex h-screen items-center justify-center'>
    <div className='w-1/2'>
  <div className=" modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link  to = {'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</Link>

    <h3 className="font-bold text-lg">Signup</h3>
  
     {/*      {Name}     */}
     <div className='mt-4 space-y-2'>
     <span>Name</span><br />
     <input type="name" placeholder='Enter Your fullname'  className='w-80 px-3 py-2 border rounded-md outline-none' {...register("fullname", { required: true })} />
     <br />
     {errors.fullname && <span className='text-sm text-red-500'>This filed is required</span>}
   </div>



    {/*      {Email}     */}
   <div className='mt-4 space-y-2'>
     <span>Email</span><br />
     <input type="email" placeholder='Enter Your Email'  className='w-80 px-3 py-2 border rounded-md outline-none' {...register("email", { required: true })}/>
     <br />
     {errors.email && <span className='text-sm text-red-500'>This filed is required</span>}
   </div>
 
    {/* {Password }  */}

    <div className='mt-4 space-y-2'>
     <span>Password</span><br />
     <input type="password" placeholder='Enter Your Password'  className='w-80 px-3 py-2 border rounded-md outline-none text-zinc-950' {...register("password", { required: true })}/>
     <br />
     {errors.password && <span className='text-sm text-red-500'>This filed is required</span>}
   </div>

    {/*    {Button    } */}
    <div className='flex justify-around mt-6'>
        <button className='bg-red-500 rounded-md px-3 py-1 text-white hover:bg-red-700 duration-200 '>Signup</button>
        <p className='text-md'>Have Account ? {" "}
        <Link
        to={'/'}
        className='text-blue-500 cursor-pointer underline'>Login</Link></p>
        <Login />
    </div>
    </form> 
  </div>
</div>
    </div>
    </>
  );
}

export default Signup;
