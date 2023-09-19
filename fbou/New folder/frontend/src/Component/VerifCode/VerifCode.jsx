import React, { useState } from 'react';
import './VerifCode.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
function VerifCode() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [msj,setMsj]=useState('')
  const navigate = useNavigate();
  const location = useLocation()
  const email = location.state?.email

console.log("emailll",email)
  const handleChange = (index, value) => {
    const newCodes = [...code];
    newCodes[index] = value.slice(0, 1);
    setCode(newCodes);
  };

const handelCode = () => {
  const codeString = code.join('')
  const codeNumber = parseInt(codeString)
  axios
    .post('http://localhost:3000/verify-code', { email, code: codeNumber }) 
    .then((response) => {
      console.log(response.data);
      setMsj('Code verified successfully');
      setTimeout(function () {
        navigate('/ConfirmPass',{state:{email}});
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      setMsj('Invalid code');
    });
};
  

  return (
    <div className='code'>
      <h1 className="text-center mb-4">Enter your code</h1>
      <div className="d-flex mb-3">
        {code.map((codes, index) => (
          <input
            key={index}
            type="tel"
            maxLength="1"
            pattern="[0-9]"
            className="form-control code-input"
            value={codes}
            onChange={(e) => {
              console.log(e.target.value);
              handleChange(index, e.target.value);
            }}
          />
        ))}
      </div>
      <p>{msj}</p>
      <button className="bntss" onClick={handelCode} >
        Verify Code
      </button>
    </div>
  );
}

export default VerifCode;