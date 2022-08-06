import React from 'react'

export default function ScoreNotNaN(props) {
  return (
    <div>
      <h1 className="text-center" style={{fontSize:"10rem", marginTop:"6rem"}}>{props.score}%</h1>
      <h1 className="text-center" style={{marginLeft:'300px', marginRight:'300px'}}>This is a holistic quantification of the amount of potential systemic bias encountered in your text</h1>
    </div>
  )
}