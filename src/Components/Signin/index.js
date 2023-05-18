import React, { useState } from 'react';
import { firebase } from '../../firebase';
import { CircularProgress } from '@mui/material';
import { Redirect, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PinDropSharp } from '@mui/icons-material';
//import {toast} from 'react-toastify';
import { showErrorToast, showSuccessToast } from '../Utils/tools';


const SignIn = (props) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    console.log(props)
    const formik = useFormik({
        initialValues: {
            //shobhit@gmail.com -> authenticated admin user 
            email: '',
            //testing123
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('The email is required'),
            password: Yup.string()
                .required('Password is required')
        }),
        onSubmit: (values) => {
            setLoading(true)
            submitForm(values)
        }
    })

    const submitForm = (values) => {
        firebase.auth()
            .signInWithEmailAndPassword(
                values.email,
                values.password
            ).then(() => {
                //toast("Wow so easy!");
                showSuccessToast('Welcome back!')
                navigate('/dashboard')
            }).catch(error => {
                setLoading(false)
                //alert(error)
                showErrorToast(error.message)
            })
    }

    return (
        <div className='container'>
            <div className='signin_wrapper' style={{ margin: '100px' }}>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Login</h2>
                    <input
                        name='email'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ?
                        <div className='error_label'>
                            {formik.errors.email}
                        </div>
                        : null}
                    <input
                        name='password'
                        placeholder='Password'
                        type='Password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ?
                        <div className='error_label'>
                            {formik.errors.password}
                        </div>
                        : null}

                    {loading ?
                        <CircularProgress color='secondary'
                            className='progress' />
                        :
                        <button type="submit">Log in</button>
                    }

                </form>
            </div>
        </div>
    )
}

export default SignIn


