import React from 'react'
import {Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../store/reducers/authReducer'

const Login = () => {
    const dispatch = useDispatch()
    const login = (body) => {
        dispatch(loginThunk(body))
    }
  return (
    <div>
        <Formik
            initialValues={{
                email : "",
                password : ""
            }}
            onSubmit={(value) => login(value)}
        >
            <Form>
                <Field name='email' placeholder='email'/>
                <Field name='password' placeholder='password'/>
                <button type='submit'>Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login