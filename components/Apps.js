import React, {useState, useContext } from 'react'
import { AppProvider } from '../pages'
import Home from '../pages'

const Apps = ({rows}) => {
  const { application } = useContext(AppProvider)
  
  return (
    <>
      {application.map((app) => (
        <div style={{ width: 210, height: 250, backgroundColor: 'black',marginRight:20 }} key={app.id}>
          <img src={app.img} alt="..." height='250px' width="210px" />
        </div>
      ))}
    </>
  )
}

export default Apps