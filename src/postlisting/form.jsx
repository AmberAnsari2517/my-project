import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const MyForm = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  const [loading, setLoding] = useState()

  const [errorMsg, seterrorMsg] = useState('')
  const [formdata, setformData] = useState({ title: '', body: '', userId: " " });

  const handlechange = (e) => {
    setformData({ ...formdata, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoding(true)
    // validation start
    if (formdata.title.length === 0) {
      seterrorMsg('title cannot b empty')
      setLoding(false)
      return;
    }
    else if (formdata.title.length <= 3) {
      seterrorMsg('title add more then three character')
      setLoding(false)
      return;
    }


    else if (formdata.body.length === 0) {
      seterrorMsg('boday cannot b empty')
      setLoding(false)
      return;
    }
    else if (formdata.body.length >= 500) {
      seterrorMsg('In body write words maximum 500')
      setLoding(false)
      return;
    }
    else if (formdata.userId.length === 0) {
      seterrorMsg('boday cannot b empty')
      setLoding(false)
      return;

    }
    else if (formdata.userId.length === 0) {
      seterrorMsg('boday cannot b empty')
      setLoding(false)
      return;

    }
    else if (!/^\d+$/.test(formdata.userId)) {
      seterrorMsg('User ID cannot empety and should contain only numeric values');
      setLoding(false)
      return;
      
    }
    else {
      seterrorMsg('submit scuses')

    }
    //validation end




    console.log(formdata)
    axios.post(`https://jsonplaceholder.typicode.com/posts `, { formdata })

      .then(response => console.log(' Scucess', response))
      .catch(error => console.log(error))
      .finally(() => {
        setLoding(false)
        e.target.reset()
      })

  }

  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-success" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <div style={{ marginBottom: 10 }}>
        <button className='btn btn-success' onClick={handleBack}>
          <i class="fa-solid fa-arrow-left" ></i>
        </button>
      </div>

      <div className='container card'>
        <strong>Add list form Api</strong>
        <form onSubmit={handleSubmit}>
          Title:  <input
            className='form-control'

            type='text' onChange={handlechange} name='title' /><br />
          <strong>Body</strong>
          <textarea
            className='form-control'
            onChange={handlechange} name='body'

          />
          <br />
          <strong>userId</strong>
          <textarea
            className='form-control'
            onChange={handlechange} name='userId'
            onKeyPress={(e) => {
              // Allow only numeric input
              const charCode = e.charCode;
              if (charCode !== 8 && charCode !== 0 && (charCode < 48 || charCode > 57)) {
                e.preventDefault();
              }
            }}

          />
          <button>Submit</button>
          <strong>{errorMsg}</strong>




        </form>

      </div>
    </div>
  )
}

