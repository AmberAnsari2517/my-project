import axios from 'axios';
import React from 'react'
import { useState } from 'react';
export const MyForm = () => {

  const [errorMsg, seterrorMsg] = useState('')
  const [formdata, setformData] = useState({ title: '', body: '' });

  const handlechange = (e) => {
    setformData({ ...formdata, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation start
    if (formdata.title.length === 0) {
      seterrorMsg('title cannot b empty')
      return;
    }
    else if (formdata.title.length <= 3) {
      seterrorMsg('title add more then three character')
      return;
    }


    else if (formdata.body.length === 0) {
      seterrorMsg('boday cannot b empty')
      return;
    }
    else if (formdata.body.length >= 500) {
      seterrorMsg('maximum lenth 500')
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
        e.target.reset()
      })

  }

  return (
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
        <button>Submit</button>
        <strong>{errorMsg}</strong>




      </form>

    </div>
  )
}

