
import React, { useEffect } from "react";
import './Alluser.css'
import { useDispatch, useSelector } from 'react-redux'
import { getalluser } from "../../../store/Userslice";
const Alluser = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getalluser())
  }, [])
  const users = useSelector(state => state.user)
  console.log(typeof (users.users))
  const alluser = users.users
  console.log("alluser", alluser)

  return (
    <div className="alluser-container">
      <h2 className="titr"> All Usres List </h2>
      {Array.isArray(alluser) && alluser.map((el) => (<> <div className="user-card">
        <h6 className="user-name"> name: {el.name}</h6>
        <h6 className="user-email"> email: {el.email}</h6>
      </div>
      </>))}

    </div>
  )
}

export default Alluser




