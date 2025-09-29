import React from 'react'

const RealWorld = () => {

    const products = [
        {id:'p1',name:"t-shirt"},
        {id:'p2', name:'jeans'}
    ]

    // const person = {
    //     name:'areej',
    //     age:21
    // }

  return (
    <div>
     {/* <h1>{person.name}</h1>
     <p>{person.age}</p> */}

     <ul>
        {products.map(pdt => (
            <li key={pdt.id}>{pdt.name}</li>
        ))}
     </ul>
    </div>
  )
}

export default RealWorld
