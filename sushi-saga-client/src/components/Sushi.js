import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {eatenSushi, eatSushi, sushi} = props
  const {name, img_url, price} = sushi
  // console.log(name, img_url, price)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(sushi)}>
        { 
          eatenSushi.includes(sushi) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi