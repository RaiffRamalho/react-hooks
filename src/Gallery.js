import React, {useEffect, useState} from 'react';

import { useDynamicTransition} from './hooks'

import PICTURES from'./data/pictures'

const SECOND = 1000
const minimumDelay = 1 * SECOND
const minimumIncrement = 1


function Gallery(){

  const [delay, setDelay] = useState(3 * SECOND)
  const [increment, setIncrement] = useState(1)

  const index = useDynamicTransition({
    delay, increment, length: PICTURES.length
  })

  const updateIncrement = event => {
    const increment = Number(event.target.value)
    setIncrement(increment < minimumIncrement ? minimumIncrement : increment)
  }

  const updateDelay = event => {
    const delay = Number(event.target.value) * SECOND
    setDelay(delay < minimumDelay ? minimumDelay : delay)
  }

  return (
    <div className='Gallery'>
      <img 
        src={PICTURES[index].image}
        alt='galley' />
        <div className='multiform'>
        <div>
          Gallery transition Delay (seconds)
          <input type='number' onChange={updateDelay} />
        </div>
        <div>
          Gallery increment
          <input type='numeber' onChange={updateIncrement}/>
        </div>

        </div>

    </div>
  )

}

export default Gallery