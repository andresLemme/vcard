import React from 'react'
import './Card.scss'
import InnerCard from '../InnerCard/InnerCard'

function Card(){
  return(
    <section className="card-box">
      <InnerCard/>
    </section>
  )
}

export default Card