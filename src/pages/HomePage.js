import React from 'react'
import HeaderWebsite from '../components/Header'
import ListProduct from '../components/ListProduct'
import Seach from '../components/Seach'
const HomePage = (props) => {
  return (
    <div >
      <Seach />
      <ListProduct {...props}/>
    </div>
  )
}

export default HomePage
