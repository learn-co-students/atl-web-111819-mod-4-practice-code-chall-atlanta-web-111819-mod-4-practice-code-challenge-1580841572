import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((s, i) => (
              <Sushi 
              sushi={s} 
              key={i} 
              eatenSushi={props.eatenSushi} 
              eatSushi={props.eatSushi}
              />
            ))
        }
        <MoreButton handleMoreClicked={props.handleMoreClicked}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer