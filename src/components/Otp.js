import React, { useState } from 'react'
import './style/Otp.css'
import OtpInput from 'react-otp-input';

const Otp = (props) => {
  const [check, setcheck] = useState(true)
  const handleClick = () => {
    props.onSubmit();
  }

  const otpdata = async () => {
    let response = await fetch('https://adarsh8266.pythonanywhere.com/api/accounts/verify-otp/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: localStorage.getItem('email'), otp: otp })
    })

    let datarecieved = await response.json();
    console.log(datarecieved.msg)
  }

  const toggle = () => {
    setcheck(!check);
  }
  const [otp, setOtp] = useState('');
  return (
    <div className='otp-first-main-container'>
      <div className="otp-main-container">
        <label htmlFor="account" id='otp-account'>Create account</label>
        <div className="otp-first-container">
          <p>Enter OTP:</p>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props}
            />}
            inputStyle={{ width: "70px" }}

          />
          <div className="otp-resend">
            <a href="#">Resend</a> in time
          </div>
          <div className="otp-second-container" style={{ marginTop: '30px' }}>
        <input type="checkbox" onClick={toggle} /> I have read and agree to all the <a href='#'>terms and condition</a>
      </div>
        </div>


      </div>
        <button type="submit" style={{ marginTop: '50px',marginRight:'10px' }} onClick={handleClick} className="otp-Signup">Back</button>
        <button type="submit" disabled={check ? true : false} onClick={otpdata} className="otp-Signup">Signup</button>

    </div>
  )
}

export default Otp
