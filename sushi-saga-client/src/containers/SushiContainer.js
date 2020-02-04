import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  const renderSushi=()=>{
    return props.sushis.map(sushi => {
      return <Sushi sushi={sushi} eatenSushi={props.eatenSushi}/>
    })
  }

  const limitSushi=(sushis)=>{
    return sushis[0]
  }


  return (
    <Fragment>
      <div className="belt">
        {
          limitSushi(renderSushi())
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer