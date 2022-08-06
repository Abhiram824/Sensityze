import React from 'react'

export default function About() {
  return (
    <div>

      <h1 style={{color:'black', textAlign:'center', marginTop:"6rem"}}>About</h1>

       <br></br>

      <h4 style={{color:'black', textAlign:'center', marginLeft:'300px', marginRight:'300px'}}>Our solution is Sensityze</h4>
      <p style={{color:'black', textAlign:'center', marginLeft:'300px', marginRight:'300px'}}>Sensitive is a universally accessible, scalable,  and easy-to-use website that quantifies how systemically offensive text might be. We believe this is extremely useful for online training documentation, educational materials, orientation informatics, or any text-based informatics.</p>

       <br></br>

      <h4 style={{color:'black', textAlign:'center', marginLeft:'300px', marginRight:'300px'}}>How it works:</h4>
      <p style={{color:'black', textAlign:'center', marginLeft:'300px', marginRight:'300px'}}>Sensityze is uses Artificial Intelligence, particularly Natural Language Processing(NLP), to perform sentiment analysis on a document & sentence level. It does so via Pytorch with a SOTA NLP model called a Transformer to convert text into semantic embeddings and output a 0 to 1 score of how non-offensive a text or sentence is. It is then encoded in a RESTful API using the Flask microframework to be easily callable. Then, a front-end website was constructed using a Bootstrap templating engine and ReactJS which calls the aforementioned API. Finally, the website is hosted globally on the cloud via Google’s Firebase.</p>

    </div>
  )
}