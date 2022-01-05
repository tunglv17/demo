import React from 'react'
import ListProduct from '../components/ListProduct'
import Seach from '../components/Seach'
const HomePage = (props) => {
  return (
    <div >
      <Seach {...props} />
      <ListProduct {...props} />
    </div>
  )
}

export default HomePage
