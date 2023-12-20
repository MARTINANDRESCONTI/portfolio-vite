import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import style from './Contact.module.css'
import Footer from '../components/Footer'
import { FaTrash } from "react-icons/fa";
import validate from '../utils/validate'

export default function Contact() {
  const [input, setInput] = useState({
    user_name: '',
    user_email:'',
    message:''
  })

  const [errors, setErrors] =useState({
    user_name: 'Username is required...',
    user_email:'Useremail is required...',
    message:'Message is required...'
  })

  const handleChange = (e)=>{
    setInput((prev) => {
      const newState = {
        ...prev,
        [e.target.name]: e.target.value
      }    
    setErrors(validate(newState))

    return newState;
    })
  }
  const form = useRef();

  const sendEmail = (e) => {    
    e.preventDefault();  
    emailjs.sendForm('service_4knsyzd', 'template_syz7qfa', form.current, '9ghiTPHPb4wc4CIZc')
      .then((result) => {
          console.log(result.text);
          alert('Emial sent successfully!')
      }, (error) => {
          console.log(error.text);
      }); 
    console.log(form.current)
  };

  const deleteInput = (e)=>{
  e.preventDefault();   
    setInput((prev) => {
      const newState = {
        ...prev,
        [e.target.name]: ''
      }    
    setErrors(validate(newState))

    return newState; 
    })
  } 

  const resetAllInputs = (e)=>{
    e.preventDefault();   
    setInput({
      user_name: '',
      user_email:'',
      message:''
    })
    setErrors({
      user_name: 'Username is required',
      user_email:'Useremail is required',
      message:'Message is required'
    })
  }  

  return (
    <div className={style.container}>
      <form className={style.formcontainer}
      ref={form} 
      onSubmit={sendEmail}
      >
        <div className={style.containerIputText}>
          <div className={style.containerMessage}>            
            <div className={style.containerTextarea}>
              <textarea 
                placeholder='Write your message...'
                className={(errors.message) && style.errors }
                name='message'
                type='submit' 
                value={input.message} 
                onChange={handleChange}
              />             
              <button name='message' onClick={deleteInput} className={style.delete}>X</button>
            </div>
            {errors.message && <p className={style.p}>{errors.message}</p>}       
          </div>
          <div className={style.containerInput}>
            <label htmlFor='user_name'>Name</label>
            <div className={style.containerUserName}>
              <div className={style.input}>
                <input 
                  className={(errors.user_name) && style.errors }
                  name='user_name' 
                  value={input.user_name} 
                  onChange={handleChange}
                  autoComplete='off'
                />
                <button name='user_name' onClick={deleteInput} className={style.delete}>X</button>
              </div>
              {errors.user_name && <p className={style.p}>{errors.user_name}</p>}
            </div>
            <label htmlFor='user_email'>Email</label>
            <div className={style.containerUserEmail}>
              <div className={style.input}>
                <input 
                  className={(errors.user_email) && style.errors }
                  name='user_email' 
                  value={input.user_email}
                  onChange={handleChange} 
                  autoComplete='off'
                />
                <button name='user_email' onClick={deleteInput} className={style.delete}>X</button>
              </div>
              {errors.user_email && <p className={style.p}>{errors.user_email}</p> }
            </div>
          </div>          
        </div>
        <div className={style.containerButtons}>
          <div className={style.containerSend}>
            {!errors.user_name && !errors.user_email && !errors.message && <button className={style.send} onSubmit={sendEmail}>Send message</button>}
          </div>
          <button className={style.deleteAll} onClick={resetAllInputs}>Reset all <FaTrash /></button>
        </div>        
      </form>
      <Footer />
    </div>
  );
};
  