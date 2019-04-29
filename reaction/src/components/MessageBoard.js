import React from 'react'
import { useAppContext } from './hooks'

import Context from '../context'

function MessageBoard() {

  const {state: { messages}} = useAppContext(Context)

  return (
    <div>
      {
        messages.map( messageItem => {
          const {id, text, timestamp} = messageItem
          return (
            <div key={id}>
              <h4>{new Date(timestamp).toLocaleString()}</h4>
              <p>{text}</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default MessageBoard