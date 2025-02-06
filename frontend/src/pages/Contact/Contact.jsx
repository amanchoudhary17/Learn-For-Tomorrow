import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log("SubmitHandler called");

    try {
      const data = {
        name,
        email,
        message,
        phoneNo
      };
      const response = await fetch("http://localhost:9090/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
     
      console.log(responseJson);
      
    } catch (error) {
      console.error("Error:", error);
     
    }
    navigate("/");
  };

  return (
    <>
      <div className='contact-page'>
        <header className='height-75'>
          <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            <h1 className='text-center fw-semibold'>Get In Touch</h1>
            <p className='text-center w-75 mb-5'>
              Certainly! If you have any further questions or need assistance, feel free to get in touch with me. You can ask your questions here, and I'll do my best to help you. If you have specific inquiries or need more detailed assistance, you can also provide additional information, and I'll tailor my response accordingly.
            </p>
          </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
          <Form id='contact-form' onSubmit={SubmitHandler}>
            <Form.Group className='mb-3' style={{ width: '370px' }}>
              <Form.Label>Name</Form.Label>
              <Form.Control 
                placeholder='*Name' 
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className='mb-3' style={{ width: '370px' }}>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Enter email' 
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' style={{ width: '370px' }}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                placeholder='Your phone number' 
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className='mb-3' style={{ width: '370px' }}>
              <Form.Label>Your Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
              />
            </Form.Group>

            <Button variant="danger btn-lg" type='submit'>Submit</Button>
          </Form>
        </div>

        <div className='bg-dark text-light p-5'>
          <div className='container'>
            <h2 className='text-center mb-5'>Our Locations</h2>
            <div className='row g-4'>
              <div className='col-lg-4 d-flex flex-column align-items-center'>
                <img src={LondonLocationImg} className='img-fluid' alt="London" />
                <h3 className='text-center mt-3'>Lucknow</h3>
              </div>
              <div className='col-lg-4 d-flex flex-column align-items-center'>
                <img src={ManchesterLocationImg} className='img-fluid' alt="Manchester" />
                <h3 className='text-center mt-3'>Mau</h3>
              </div>
              <div className='col-lg-4 d-flex flex-column align-items-center'>
                <img src={LiverpoolLocationImg} className='img-fluid' alt="Liverpool" />
                <h3 className='text-center mt-3'>Ballia</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
