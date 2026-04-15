

import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='bg-green-400 rounded-lg'> please login </div>

    return <div className='bg-blue-400 rounded-lg' > Welcome : {user.username} !</div>
}

export default Profile