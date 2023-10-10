import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid e-mail');
      return;
    }
    // if (!userName) {
    //   setErrorMessage('Please leave your name!');
    //   return;
    // }

    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
    // alert(`Thank you, ${userName}`);
  };

  return (
    <div className='container text-center'>
      <h1>Contact</h1>
      <form className='form' onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <input
            value={userName}
            name='userName'
            onChange={handleInputChange}
            type='text'
            placeholder='your name'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <input
            value={email}
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder='email'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <textarea
            value={message}
            name='message'
            onChange={handleInputChange}
            type='text'
            placeholder='leave a message'
            className='form-control'
            rows='3'
          ></textarea>
        </div>
        <button type='submit' className='btn-warning rounded-pill'>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}


export default Contact;

// export default function Contact() {
//   return (
//     <div>
//       <h2>Contact</h2>
//       <form className="">
//         <div className="form-group">
//           <label htmlFor="nameInput"></label>
//           <input
//             type="text"
//             className="form-control"
//             id="nameInput"
//             placeholder="your name"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="emailInput">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="emailInput"
//             placeholder="name@example.com"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="formMessage">Message</label>
//           <textarea
//             className="form-control"
//             id="formMessage"
//             rows="3"
//           ></textarea>
//         </div>
//         <button>Submit</button>
//       </form>
//       <p className="">merkabafox@gmail.com</p>
//     </div>
//   );
// }
