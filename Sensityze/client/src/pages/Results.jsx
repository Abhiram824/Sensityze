import React, { useState, useEffect } from 'react'
import ScoreNaN from '../components/ScoreNaN'
import ScoreNotNaN from '../components/ScoreNotNaN'
import { useParams } from 'react-router-dom'

export default function Result({ route, props }) {
  let { score } = useParams()

  function ScoreBlock () {
    if (isNaN(score)) {
      return <ScoreNaN/>
    } else {
      return <ScoreNotNaN score={score} />
    }
  }

  return (
    <div>
      <ScoreBlock/>
    </div>
  )
}
