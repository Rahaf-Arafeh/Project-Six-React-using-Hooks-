import React, { useState } from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import '../styles/Registeration.css'
function Registeration() {
    const [switchLogin_Register, setSwitchLogin_Register] = useState(false);
    return (
        <div className='registeration'>
            {switchLogin_Register ? (
                <SignIn
                    switchLogin_Register={switchLogin_Register}
                    setSwitchLogin_Register={setSwitchLogin_Register} />

            ) : (

                <SignUp
                    switchLogin_Register={switchLogin_Register}
                    setSwitchLogin_Register={setSwitchLogin_Register} />

            )}
        </div>
    )
}

export default Registeration
