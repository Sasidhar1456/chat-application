import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Inbox = () => {
  return (

    <>
      <div className='inbox'>

        <div className='inbox-heading'>
          Your inbox
        </div>

        <div className='messages'>
          <div className='message-status'>

              <div className='open'>
                <span>5 Open</span> 
                <span style={{paddingTop:"0.2rem"}}> <FaChevronDown color="black"  /> </span>
              </div>

              <div className='open'>
                <span>Waiting</span> 
                <span style={{paddingTop:"0.2rem"}}> <FaChevronDown color="black"  /> </span>
              </div>

            
          </div>

          <div className='actual-messages'>

          </div>
        </div>

      </div>

      <div className='inbox-footer'>

      </div>
    </>
  )
}

export default Inbox