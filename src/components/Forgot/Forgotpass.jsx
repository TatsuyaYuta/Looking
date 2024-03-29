import React from 'react'
import { Link } from 'react-router-dom'

const Forgotpass =() => {
    return (
      <div className='wrapper'>
              <form action="">
                  <h1>Forgot password</h1>
                  <div className="input-box-log">
                      <input type="text"
                      placeholder='Email' required />
                      {/*<BiSolidUser className='icon'/>*/}
                  </div>
  
                  <Link to='/resetpass'><button type="submit">Sent password reset email</button></Link>
  
              </form>
          </div>
    )
  }

export default Forgotpass