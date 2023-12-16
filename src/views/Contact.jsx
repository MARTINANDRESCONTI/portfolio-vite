// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// import style from './Contact.module.css'
// import Footer from '../components/Footer'



// export default function Contact() {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_4knsyzd', 'template_syz7qfa', form.current, '9ghiTPHPb4wc4CIZc')
//       .then((result) => {
//           console.log(result.text);
//           alert('Emial sent successfully!')
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div className={style.container}>
//       <form className={style.formcontainer} ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" required/>
//         <label>Email</label>
//         <input type="email" name="user_email" required />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" required/>
//       </form>
//       <Footer />
//     </div>
//   );
// };

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import style from './Contact.module.css'
import Footer from '../components/Footer'
// import validate from '../utils/validate'



export default function Contact() {

  const [input, setInput] = useState({
    user_name: '',
    user_email:'',
    message:''
  })

  const [errors, setErrors] =useState({
    user_name: 'Username is required',
    user_email:'Useremail is required',
    message:'Message is required'
  })

  function validate(input) {
    let errors ={}

  if (!input.user_name) errors.user_name = 'Username is required';
  
  if (!input.user_email) {
    errors.user_email = 'Useremail is required';
  } else if (!/\S+@\S+\.\S+/.test(input.user_email)) {
    errors.user_email = 'Useremail is invalid';
  }

  if (!input.message) errors.message = 'Message is required';
  
  return errors;
};

 

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
        <div className={style.containerUserName}>
          <label htmlFor='user_name'>Name</label>
          <input 
            name='user_name' 
            value={input.user_name} 
            onChange={handleChange}
          />
          <button name='user_name' onClick={deleteInput}>X</button>
          {errors.user_name && <p>{errors.user_name}</p>}
        </div>
        <div className={style.containerUserEmail}>
          <label htmlFor='user_email'>Email</label>
          <input 
            name='user_email' 
            value={input.user_email}
            onChange={handleChange} 
          />
          <button name='user_email' onClick={deleteInput}>X</button>
          {errors.user_email && <p>{errors.user_email}</p> }
        </div>
        <div className={style.containerMessage}>
          <label htmlFor='message'>Message</label>
          <textarea 
            name='message'
            type='submit' 
            value={input.message} 
            onChange={handleChange}
          />
          <button name='message' onClick={deleteInput}>X</button>
          {errors.message && <p>{errors.message}</p>}       
        </div>
        <div className={style.containerButtons}>
          {!errors.user_name && !errors.user_email && !errors.message && <button onSubmit={sendEmail}>Send message</button>}
          <button onClick={resetAllInputs}>Reset all</button>
        </div>
        
      </form>
      <Footer />
    </div>
  );
};
  