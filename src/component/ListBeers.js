import React from 'react'

function ListBeers(props) {
  return(
    <div>
      {props.beers.map((beer, index)=>{
        console.log(props.beers)
        return(
          <div>
            <h1>{beer.name}</h1>
            <h2>abv:{beer.abv}  ibu:{beer.ibu}</h2>
            <img style={{width: "100px"}} src={beer.image_url}></img>
            <p>{beer.description}</p>
          </div>
        )
      })}
    </div>
  )
}
export default ListBeers