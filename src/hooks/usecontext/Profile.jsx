import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Profile = () => {
    const {user, setUser} = useContext(UserContext);

    const ChangeName = () => {
        setUser((prev) => ({...prev, name:"nihala shareef"}));
    }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={ChangeName}>Change Name</button>
    </div>
  )
}

export default Profile
