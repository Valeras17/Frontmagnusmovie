import { ErrorMessage, Field, Form, Formik, } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup'
import Spinner from '../components/spinner/Spinner';
import authService from '../services/auth-service';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const nav = useNavigate();
  const [error,setError] = useState<string>()
  const [Loading,setLoading] = useState<boolean>(false)

  const validationSchema = Yup.object({
    username: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6)
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).{8,20}$/)
      .required(),
  });

  const intiailValues = {
    username: "",
    email: "",
    password: "",
  };


  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={intiailValues}
      onSubmit={({username,email,password}) => {
        setLoading(true)
        setError(undefined)
        authService.register(username,email,password)
        .then(res=>{
          Swal.fire({
            title:"Registred successfuly",
            icon:'success',
            timer:2000,
          });
          nav("/login")
        })
        .catch(e=>{
          console.log(e.response.data);
          setError(e.response.data.message);
        })
        .finally(()=>{
          setLoading(false);
        });
        
       }}
    >
        <Form>
         {Loading && <Spinner title='' />}
         {error && <p className='text-red-600 flex justify-center p-4 shadow-md w-fit mx-auto px-10 py-5 mt-4 rounded-3xl italic text-3xl'>{error}</p>}
      <div className=' bg bg-white-50 rounded-lg m-2 shadow-md w-1/2 mx-auto p-4'>

        <div className="font-extralight text-lg  m-2 my-2 form-group gap-3 flex flex-col">
          <label htmlFor="username">User name</label>
          <Field className=" px-2 py-1 rounded-md border-blue-500 border-2" placeholder="username..." name="username" type="text" id="username" />
          <ErrorMessage name="username" component="div" className='text-red-500' />
        </div>

        <div className="font-extralight text-lg  m-2 my-2 form-group gap-3 flex flex-col">
          <label htmlFor="email">Email address</label>
          <Field className=" px-2 py-1 rounded-md border-blue-500 border-2" placeholder="email..." name="email" type="text" id="email" />
          <ErrorMessage name="email" component="div" className='text-red-500' />
        </div>

        <div className="font-extralight text-lg  m-2 my-2 form-group gap-3 flex flex-col">
          <label htmlFor="password">Password</label>
          <Field className=" px-2 py-1 rounded-md border-blue-500 border-2" placeholder="password..." name="password" type="text" id="password" />
          <ErrorMessage name="password" component="div" className='text-red-500' />
          <button 
          disabled={Loading} 
          className='disabled:bg-red-500/50 rounded-lg bg-slate-600 px-3 py-2 w-full'>Register</button>
        </div>

      </div>
      </Form>
    </Formik>
  )
}

export default Register