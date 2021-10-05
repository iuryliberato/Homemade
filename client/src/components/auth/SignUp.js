import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ImageUpload from '../helpers/ImageUpload'


const SignUp = () => {

    //* History
    const history = useHistory()

    //* State
    const [ formData, setFormData ] = useState({
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      profileImage:''
    })

    const [ errors, setErrors ] = useState({
      email: { message: '' },
      username: { message: '' },
      password: { message: '' },
      passwordConfirmation: { message: '' }
    })
  
    //* Functions 
    const handleChange = (event) => {
      const newObj = { ...formData, [event.target.name]: event.target.value }
      setFormData(newObj)
      setErrors({ ...errors, [event.target.name]: '' })
    }
  
    const setTokenToLocalStorage = (token) => {
      window.localStorage.setItem('token', token)
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        const { data } = await axios.post('/api/register', formData)
        setTokenToLocalStorage(data.token)
        history.push('/')
      } catch (error) {
        console.log('error ->', error.response)
        if (error.response.data.errors) setErrors(error.response.data.errors)
      }
    }
  

    const handleImageUrl = (url) => {
      try {
        setFormData({ ...formData, profileImage: url })
      } catch (error) {
        if (error.response.data.errors) setErrors(error.response.data.errors)
      }
    }


  return (
    <div className="signUpPage">

      <div className="form-header sign-up-form-header">
        <h2>Sign up for an account.</h2>

        <h3>Already have an account?
          <a href="/login"> Login here.</a>
        </h3>

      </div>

      <div className="form-container sign-up-form-container">

        <form onSubmit={handleSubmit}>

          <div className="formfield">
            <p>Email</p>
            <input onInput={handleChange} type="email" name="email" value={formData.email} placeholder="Your email goes here"/>
            {errors.email && <p className="error">Please enter an email</p>}
          </div>

          <div className="formfield">
            <p>Username</p>
            <input onInput={handleChange} type="text" name="username" value={formData.username} placeholder="Your username goes here"/>
            {errors.username && <p className="error">Please enter a username</p>}
          </div>

          <div className="formfield">
            <p>Password</p>
            <input onInput={handleChange} type="password" name="password" value={formData.password} placeholder="Your email goes here"/>
            {errors.password && <p className="error">please enter a password</p>}
          </div>

          <div className="formfield">
            <p>Confirm Password</p>
            <input onInput={handleChange} type="password" name="passwordConfirmation" value={formData.passwordConfirmation} placeholder="Confirm your password"/>
            {errors.passwordConfirmation && <p className="error">The passwords didn’t match. Try again.</p>}
          </div>

          <div className="formfield">
            <ImageUpload name="profileImage" handleImageUrl={handleImageUrl}/>
          </div>

          <button className="form-button">SIGN UP</button>

        </form>
      </div>

    </div>
  )
}

export default SignUp