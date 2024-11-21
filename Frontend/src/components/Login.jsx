import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const modalRef = useRef(null);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios.post('http://localhost:4001/user/login', userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Login Successful');
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setIsLoggedIn(true);  // Update login state
          modalRef.current.close();  // Close the modal immediately
        }
      }).catch((err) => {
        if (err.response) {
          toast.error('Invalid email or password');
        }
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal" ref={modalRef}>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => modalRef.current.close()}  // Close the modal when clicking the cross button
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Login</h3>

              <div className='mt-4 space-y-2'>
                <span>Email</span><br />
                <input
                  type="email"
                  placeholder='Enter Your Email'
                  className='w-3/5 py-1 px-3 border rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <span>Password</span><br />
                <input
                  type="password"
                  placeholder='Enter Your Password'
                  className='w-3/5 py-1 px-3 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>

              <div className='flex justify-around mt-6'>
                <button type="submit" className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200'>
                  Login
                </button>
                <p>Not Registered? <Link
                  to={'/signup'}
                  className='underline text-blue-500 cursor-pointer'>Signup</Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
