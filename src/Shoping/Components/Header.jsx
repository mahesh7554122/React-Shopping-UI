import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'> 
        <h2 className='left'> Shopping Application</h2>
        <ol className='center'>
            <li> Men </li>
            <li>Women</li>
            <li> Children </li>
            <li> Beauty</li>
        </ol>
      <div className='search'>
        <input type='text' placeholder='Search...'/>
      </div>
      <div className='right'>
          SignIn/SingUp
      </div>
      <div className='cart'>
        Cart
      </div>
    </div>
  )
}

export default Header
