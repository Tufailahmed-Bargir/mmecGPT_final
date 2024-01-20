'use client '
import Card from 'react-bootstrap/Card';
import axios from 'axios';
 
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Searchbar() {
  const [query , setquery]=useState('')
  const [message , setmessage]=useState('')

  function handlechange(e){
    setquery(e.target.value)
    console.log(e.target.value);
  }

  const sendData = async ()=>{
    try {
     const response =   await axios.post('http://localhost:3002/submit',{query})
    console.log('btn clicked');
    console.log('query is ');
    setmessage(response.data)
    setquery('')
    console.log(response.data);
    } catch (error) {
      console.error('errore found'+error.message);
    }
  }
    return ( 
        <>
         <Form className="d-flex container mt-0 w-50 position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={handlechange}
              
            />
         <div className="search-icon" onClick={sendData}>➢</div>

        {message &&
        <Card className='mt-2 w-100 text-center'>
      <Card.Body>{message}</Card.Body>
    </Card>
        }
         
          </Form>
          <p className='text-center container mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et possimus inventore quaerat veritatis pariatur laborum, odio voluptate totam numquam ducimus.</p>

        </>
     );
}

export default Searchbar;