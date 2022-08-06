import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const [text, setText] = useState("")
  const navigate = useNavigate()
  
  function addText(event) {
    setText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = {text}
    fetch('http://127.0.0.1:5000/', {
      mode: 'cors',  
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then (response => 
        response.json()
      )
      .then (datas => {
        let score = getScore(datas)
        navigate(`/results/${score}`, { state: {dictionary: datas}})
      })
      .catch(err => 
        console.log(err)
      )
  }

  function getScore(datas) {
    let total = 0
    let count = 0
    for (let key in datas) {
      count++
      total += datas[key]
    }
    return Math.round(total*100/count)
  }

  return (
    <div>
      <h1 class="text-center display-1" style={{marginTop:"3rem"}}>Sensityze</h1>
      <h3 class="text-center" style={{marginTop:"1rem"}}>Detect how systemically biased your text or information is</h3>
      <form onSubmit={handleSubmit}>
        <div class="form-group" style={{alignItems:"center", width:"50%", margin:"2rem 22rem"}}>
          <label for="exampleTextarea" class="form-label mt-4">Input text here</label>
          <textarea onChange={addText} class="form-control" id="exampleTextarea" rows="20" cols="60"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style={{width:"50%", margin:"1rem 22rem"}}>Submit</button>
      </form>
    </div>
  )
}