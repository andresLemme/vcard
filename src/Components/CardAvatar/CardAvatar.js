import React from 'react'
import './CardAvatar.scss'

function CardAvatar() {
  return(
    <div className="avatar-card">
    <div className="avatar">
      <img src="https://i.postimg.cc/445zy52N/perfil-Avatar.jpg"/>
    </div>
    <div className="info-box">
      <h1 className="title">Dr. Sebastián Santamarina</h1>
      <p className="description">Médico Clínico</p>
      <p className="description">MP: 1234</p>
    </div>
   
    </div>
  )
}
export default CardAvatar