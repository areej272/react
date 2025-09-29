import React from 'react'

const Items = () => {

    const items = ['Apple', 'Banana', 'Orange']

  return (
    <div>
      <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
