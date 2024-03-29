import React from 'react'
import { Link } from 'react-router-dom'
import './ForgotStyle.css'

const Resetpass =() => {
  return (
    <div className='-wrapper'>
            <form action="">
                <h1>Reset Password</h1>
                <div className="-input-box-log">
                    <input type="-password"
                    placeholder='New Password' required />
                    {/*<BiSolidUser className='icon'/>*/}
                </div>
                <div className="-input-box-log">
                    <input type="-password"
                    placeholder='Confirm Password' required />
                    {/*<BiSolidLockAlt className='icon'/>*/}
                </div>

                <Link to='/Login'><button type="submit">Submit</button></Link>
            </form>
        </div>
  )
}

export default Resetpass