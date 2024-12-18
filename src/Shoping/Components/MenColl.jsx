import React from 'react'

const MenColl = (props) => {
  const {title, image1, image2, image3, image4, image5, image6 } = props.men
  return (
    <div className='menColl'>
      
      <img src= "assests/Men/1.jpg" alt={title}/>
      <img src= "assests/Men/2.jpg" alt={title}/>
      <img src= "assests/Men/3.jpg" alt={title}/>
      <img src= "assests/Men/4.jpg" alt={title}/>
      <img src= "assests/Men/5.jpg" alt={title}/>
      <img src= "assests/Men/6.jpg" alt={title}/>
    </div>
  )
}

export default MenColl
